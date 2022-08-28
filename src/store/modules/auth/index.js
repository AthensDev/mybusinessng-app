import auth from '~/repository/auth'
const state = () => ({
    isLogged: false,
    token: '',
})

const getters = {
    isLogged: (state) => {
        return state.isLogged
    },
}

const actions = {
    async login({ commit, dispatch }, data) {

        let res = await auth.login(data)
        
        if (res.data.data.auth_token && res.data.status === 201) {
            commit('setToken', res.data.data.auth_token)
            dispatch('user/setUser', {...res.data.data.customer} , { root:true })
            commit('setIsLogged', true)
            return res.data.data
        }


    },

    async register({ commit, dispatch }, data) {
        let res = await auth.register(data)        
        console.log(res.data)
        return res.data
    },

    logout({ commit, dispatch }, data) {
        commit('setIsLogged', false)
        commit('setToken', '')
        dispatch('user/setUser', '', { root:true })
    },
}

const mutations = {
    setIsLogged (state, payload) {
        state.isLogged = payload
    },

    setToken (state, payload) {
        state.token = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
