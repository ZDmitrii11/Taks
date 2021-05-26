<template>
    <div class="logo">

        <div class="logOut">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    <div><i style="background-color: red;width: 10px">{{GET_BASKET.length}}</i></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-basket" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </button>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                    <li v-for="(item,index) in GET_BASKET" :key="index">
                        <a  class="dropdown-item" href="#">
                            <p>{{index+1}}</p>
                            <p>{{item.title}}</p>
                            <p>{{item.description}}</p>
                            <p>{{item.price}}</p>
                            <button
                                    @click=" deletefromBasket(index)"> {{item.id}}
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="16" height="16"
                                     fill="currentColor"
                                     class="bi bi-basket" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </button>
                        </a>
                    </li>

                </ul>
            </div>

        </div>

        <div class="other">
            <button id="logO" @click="logOut">LogOut</button>
            <button id="favorites" @click="Favorites">Show Favorites</button>
        </div>


        <div class="container">
            <div class="card">
                <h3 align="center">Products List :</h3>
                <div class="form-control">
                    <label class="label-input">Title:</label>
                    <input class="my-input" v-model="title" type="text" placeholder="Title">
                    <label class="label-input">Description:</label>
                    <input class="my-input" v-model="description" type="text" placeholder="Description">
                    <label class="label-input">Price:</label>
                    <input class="my-input" @input="numberValidator" :value="price" type="text"
                           placeholder="Add price only number">

                </div>
                <div class="button_cont" @click="addProducts"
                     align="center">
                    <button class="example_c" rel="nofollow noopener">Add Call to Action</button>
                </div>
            </div>
        </div>

        <div class="nothing" v-if="Products.length<=0"><h3>Nothing Added</h3></div>

        <div v-else class="shop-container">
            <table>
                <tr>
                    <th>ID:</th>
                    <th>Title:</th>
                    <th>Description:</th>
                    <th>Price:</th>
                    <th>Remove Item</th>

                </tr>
                <tr v-for="(product,index) in Products" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{product.title}}</td>
                    <td>{{product.description}}</td>
                    <td>{{product.price}}</td>
                    <td style="margin: 1rem">
                        <button @click.once="addToBasket(product)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="bi bi-basket" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </button>
                        <button class="favorite-item" @click="addFavorite(product)">Favorite</button>

                        <button class="edit-button" @click="tookItem(product)">Edit</button>
                        <button class="remove-item" @click="deleteStuff(product.id)">&times;</button>
                    </td>

                </tr>

            </table>
            <div class="edit-div">
                <div class="edit-form" v-if="isActive">
                    <label class="label-input">Title:</label>
                    <input class="my-input" v-model="selectedObject.title" type="text" placeholder="Title">
                    <label class="label-input">Description:</label>
                    <input class="my-input" v-model="selectedObject.description" type="text" placeholder="Description">
                    <label class="label-input">Price:</label>
                    <input class="my-input" v-model="selectedObject.price" type="text"
                           placeholder="Add price only number">
                    <button class="btn-edit" @click="editItem">Click To Safe Changes</button>
                    <button class="btn-canceled" @click="cancelEdit">Cancel</button>
                </div>
            </div>
            <button @click="deleteAll">Delete All Stuff</button>



        </div>


    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import paginationMixin from '../mixins/pagination.mixin'


    export default {
        name: "UserPage"
        ,
        mixins: [paginationMixin],
        data() {
            return {
                token: null,
                id: null,
                title: '',
                description: '',
                price: '',
                selectedObject: {},
                isActive: false,

            }
        },
        computed: {
            ...mapGetters(['Products', 'Token', 'GET_BASKET']),
        },
        mounted() {
            this.$store.dispatch('GET_PRODUCTS')
            this.token = localStorage.getItem('token')
            this.setupPagination(this.Products.map(el => el))
        }
        ,

        methods: {
            logOut() {
                localStorage.removeItem('token')
                this.$router.push('/')
            },
            Favorites() {
                if (this.$router.currentRoute.path !== '/favorites') {
                    this.$router.push('/favorites')
                }
            },
            addProducts() {
                if (this.title !== '' && this.description !== '' && this.price !== '') {
                    this.$store.dispatch('ADD_PRODUCTS', [this.id, this.title, this.description, this.price])
                    this.title = ''
                    this.description = ''
                    this.price = ''
                }
            },
            numberValidator(e) {
                e.target.value = e.target.value.replace(/[^\d.]/g, '')
                this.price = e.target.value + ' $'
            },
            deleteStuff(id) {
                this.$store.dispatch('DELETE_PRODUCT', id)
            },
            tookItem(ind) {
                this.isActive = !this.isActive
                this.selectedObject = {...ind};
            },
            addToBasket(item) {
                this.$store.commit('BASKET', item)

            },
            deletefromBasket(ind) {
                this.$store.commit('DELETE_BAKSET', ind)
            },
            cancelEdit() {
                this.isActive = !this.isActive
            },
            editItem() {
                this.$store.dispatch('EDIT_PRODUCT',
                    [this.selectedObject.id, this.selectedObject.title,
                        this.selectedObject.description, this.selectedObject.price])
                        this.isActive = !this.isActive
            },
            addFavorite(item) {
                this.$store.commit('FAVORIT_PRODUCT', item)

            },

            deleteAll() {
                this.$store.dispatch('DELETE_ALL')
            },


        }

    }
</script>

<style scoped>
    #id {
        background: red;
        color: red
    }

    /*.baketsee {*/
    /*    display: none;*/
    /*}*/

    /*.baketnone {*/
    /*    display: block;*/
    /*}*/
    .my-bi {
        color: red;
        display: block;
    }
    .other{
        width: 150px;
        height: 100px;
        display: flex;
        flex-direction: column;
    }

    .dropdown {
        position: relative;
        display: inline-block;
        width: 150px;
    }

    .btn {
        width: 150px;
    }

    .active {
        background: green;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 12px 16px;
        z-index: 1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }


    .btn-canceled {
        width: 250px;
        height: 30px;
        background-color: #0a58ca;
        margin: auto;
        border-radius: 25px;
    }

    .nothing {
        text-align: center;
        color: orangered;
    }

    .remove-item {
        background-color: red;
        border-radius: 50%;
    }

    .example_c {
        color: #494949 !important;
        text-transform: uppercase;
        text-decoration: none;
        background: #ffffff;
        padding: 20px;
        border: 4px solid #494949 !important;
        display: inline-block;
        transition: all 0.4s ease 0s;
    }

    #favorites {
        background-color: #0a53be;
        width: 100px;
        height: 50px;
        color: white;
        border-radius: 15px;
    }

    .example_c:hover {
        color: #ffffff !important;
        background: #f6b93b;
        border-color: #f6b93b !important;
        transition: all 0.4s ease 0s;
    }

    .my-input {
        background: white;
        border: 1px solid #ffa853;
        border-radius: 5px;
        box-shadow: 0 0 5px 3px #ffa853;
        color: #666;
        outline: none;
        height: 35px;
        width: 275px;
    }

    .form-control {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .label-input {
        font-size: x-large;
        font-style: italic;
        font-family: "Baskerville Old Face";
    }

    table {
        border-collapse: collapse;
        width: 100%;
        background-color: white;
        text-align: center;

    }

    th, td {
        padding: 8px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    tr:hover {
        background-color: #f5f5f5;
    }

    #logO {

        background-color: #0a53be;
        width: 100px;
        height: 50px;
        color: white;
        border-radius: 15px;
    }

    td {
        border: 1px solid black;
        text-align: center;
        width: auto;
        height: 30px;
        padding: 1rem;
        margin: 1rem;
    }

    .add-stuff {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        margin: 2rem;
        padding: 1rem;
        border: 1px solid black;
        margin: auto;
        border-radius: 50px;
    }

    .add-stuff > button {
        background-color: red;
        border-radius: 25px;
        margin: 2rem;
    }


    .btn {
        height: 100px;
    }

    .shop-container {
        margin: 10px;
    }

    .edit-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #5cb85c;
        color: black;
        width: 400px;
        height: 300px;
        margin: auto;
        padding: 3%;

    }

    .edit-div {
        margin: 2rem;

    }

    .btn-edit {

        width: 250px;
        height: 30px;
        background-color: red;
        margin: auto;
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 25px;


    }
</style>