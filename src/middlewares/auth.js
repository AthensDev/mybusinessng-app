import axios from 'axios'
import config from '~/config'

// check that user is logged in before transfering to next
export function isAuth({ next, store }) {
    if (store.state.auth.isLogged) {
        return next()
    }
    return next({
        name: 'login'
    })
}
 
// ensure user is guest
export function isGuest({ next, store, router }) {
    if (store.state.auth.isLogged) {
        return next({
            name: 'dashboard'
        })
    }
    return next()
}

