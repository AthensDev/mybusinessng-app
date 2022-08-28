import { createStore, createLogger } from 'vuex'

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import user from './modules/auth/user'
import auth from './modules/auth/'
var ls = new SecureLS({ isCompression: false });


const debug = process.env.NODE_ENV !== 'production'

let plugins = [
	createPersistedState({
    paths: ['user', 'auth'],
    }),
]

if(debug) plugins.push(createLogger())

const store = createStore({
    modules: {user, auth},
    strict: debug,
    plugins,
})

export default store
