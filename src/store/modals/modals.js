import axios from "axios";


export default {
    state: {
        products:[],
        token:null
    },

    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload

        },


    },
    actions: {
        async GET_PRODUCTS({commit}) {
            await axios.get('http://localhost:5000/api/v1/products').then(res => {
                commit('SET_PRODUCTS', res.data.todos)
            })
        },
         ADD_PRODUCTS({dispatch},[id, title, description, price]) {
             axios.post('http://localhost:5000/api/v1/products', {
                id:id,
                title:title,
                description:description,
                price:price
            }).then(()=>{
              dispatch('GET_PRODUCTS')

            })},

        DELETE_STUFF({dispatch},id){
             axios.delete(`http://localhost:5000/api/v1/products/${id}`)
                 .then(()=>dispatch('GET_PRODUCTS'))
        }

    },


    getters: {
        Products: state => state.products,
        Token:state=>state.token
    }
}
