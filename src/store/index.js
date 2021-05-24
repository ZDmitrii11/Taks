import Vue from 'vue'
import Vuex from 'vuex'
import modals from './modals/modals.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        modals
    }
})