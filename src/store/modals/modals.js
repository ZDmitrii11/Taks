import axios from "axios";

export default {
    state: {
        products: [],
        token: null,
        favorite: [],
        basket:[]
    },

    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload

        },
        FAVORIT_PRODUCT(state, favorite) {
            state.favorite.push(favorite)
            localStorage.setItem('favorite', JSON.stringify(state.favorite))
        },
        BASKET(state,basket){
            state.basket.push(basket)
        },
        DELETE_BAKSET(state,id){
           state.basket.splice(id,1)
        }



    },
    actions: {
        async GET_PRODUCTS({commit}) {
            await axios.get('http://localhost:5000/api/v1/products').then(res => {
                commit('SET_PRODUCTS', res.data.todos)
            }).catch(err => console.log(err))
        },

        ADD_PRODUCTS({dispatch}, [id, title, description, price]) {
            axios.post('http://localhost:5000/api/v1/products', {
                id: id,
                title: title,
                description: description,
                price: price
            }).then(() => {
                dispatch('GET_PRODUCTS')

            })
        },


        EDIT_PRODUCT({dispatch}, [id, title, description, price]) {
            axios.put(`http://localhost:5000/api/v1/products/${id}`,
                {
                    id: id,
                    title: title,
                    description: description,
                    price: price
                }
            ).then(() => {
                const favourites = JSON.parse(localStorage.getItem('favorite'));
                const found = favourites.findIndex(el => el.id === id);
                if (found) {
                    favourites[found].title = title;
                    favourites[found].price = price;
                    favourites[found].description = description;
                    localStorage.setItem('favorite', JSON.stringify(favourites))
                }

                console.log(found)
                dispatch('GET_PRODUCTS')
            }).catch(err => console.log(err))
        },

        DELETE_PRODUCT({dispatch},id) {
            axios.delete(`http://localhost:5000/api/v1/products/${id}`).then(
                () => dispatch('GET_PRODUCTS'))
                .catch(err=>console.log(err))
        },



        // DELETE_ALL({dispatch}){
        //     axios.get('http://localhost:5000/api/v1/products').then(res => {
        //             dispatch('SET_PRODUCTS', res.data.todos = [])
        //         }).catch(err => console.log(err))
        // }


    },


    getters: {
        Products: state => state.products,
        Token: state => state.token,
        Favorite: state => state.favorite,
        GET_BASKET:state=>state.basket
    }
}
