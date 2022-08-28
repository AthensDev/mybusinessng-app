import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import store from './store'
import './index.css'
import config from '~/config'

import {isAuth, isGuest} from './middlewares/auth'
import middlewarePipeline from './middlewares/pipeline'
import Notifications from './plugins/notiwind/index.esm'







const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
})

const app = createApp(App).use(router).use(store).use(createMetaManager()).use(Notifications)

// add config to vue instance - this.$config
app.config.globalProperties.$config = config





// add middleware to routes
router.beforeEach(( to, from, next )=> {
    if(to.path === '/login'){
        to.meta.middleware.push(isGuest )
    }

    if(to.path === '/logout'){
        store.dispatch('auth/logout')
        window.location = '/login'
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, attach auth middleware
        to.meta.middleware.push(isAuth)
    }
    next();
})


// middleware pipeline
router.beforeEach((to, from, next) => {
    // console.log(to)
    if (!to.meta.middleware || !to.meta.middleware.length > 0) {
        return next()
    }
    const middleware = to.meta.middleware

    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }
    const uniqueMiddlewares = middleware.filter(unique)
    const context = {
        to,
        from,
        next,
        store,
        router,
    }
    return uniqueMiddlewares[0]({
        ...context,
        next: middlewarePipeline(context, uniqueMiddlewares, 1)
    })
})






router.afterEach((to, from, failure) => {})


async () => {

	await router.isReady()

}

// await router.isReady()
app.mount('#app')

