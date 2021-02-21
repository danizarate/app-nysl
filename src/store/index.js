import {createStore} from "vuex";

export const store = createStore ({
    state: {
        loggedUser: null
    },
    getters: {
        isLoggedIn(state){
            return state.loggedUser != null? true:false; 
        }
    },
    actions: {
        setUserAction(context, user){
            context.commit('setUser', user)
        }

    },
    mutations: {
        setUser(state, user){
            state.loggedUser = user;
            console.log(state.loggedUser)
        }

    }
})

export default store