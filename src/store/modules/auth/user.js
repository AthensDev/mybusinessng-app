const state = () => ({
    details: '',
})

const getters = {
    nameUppercased: (state) => {
        return state.name.toUpperCase()
    },
    orgs: (state) => {
        return state.details.orgs
    },
    user: (state) => {
        return state.details
    },
}

const actions = {
    saveName({ commit }, data) {
        commit('SET_NAME', data)
    },

     setUser({ commit }, data) {
        commit('SET_USER', data)
    },
}


const mutations = {
    SET_NAME(state, payload) {
        state.name = payload
    },

    SET_USER(state, payload) {
        state.details = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
