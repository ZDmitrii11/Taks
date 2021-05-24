<template>
    <div class="logo">


        <div class="logOut">
            <button id="logO" @click="logOut">LogOut</button>
        </div>


        <div class="container">
            <div class="card">
                <h3 align="center">Products List :</h3>
                <div class="form-control">
                    <label class="label-input">Title:</label>
                    <input class="my-input" v-model="title"  type="text" placeholder="Title">
                    <label class="label-input">Description:</label>
                    <input class="my-input"  v-model="description" type="text" placeholder="Description">
                    <label class="label-input">Price:</label>
                    <input class="my-input" @input="numberValidator" :value="this.price" type="text" placeholder="Add price only number">

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
                <tr  v-for="(product,index) in Products" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{product.title}}</td>
                    <td>{{product.description}}</td>
                    <td>{{product.price}}</td>
                    <td>
                        <button class="remove-item" @click="deleteStuff(product.id)">&times;</button>
                    </td>

                </tr>

            </table>
        </div>


    </div>
</template>

<script>
    import {mapGetters} from 'vuex'


    export default {
        name: "UserPage"
        ,
        data() {
            return {
                element: [],
                token: null,
                id: null,
                title: '',
                description: '',
                price: '',
                selectedObject: {}
            }
        },
        computed: {
            ...mapGetters(['Products', 'Token'])
        },
        mounted() {
            this.$store.dispatch('GET_PRODUCTS')
            this.token = localStorage.getItem('token')

        }
        ,


        methods: {


            logOut() {
                localStorage.removeItem('token')
                this.$router.push('/')
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
                this.$store.dispatch('DELETE_STUFF', id)
            },
            getItem(ind){
                this.selectedObject = {...ind};
            }

        }
    }
</script>

<style scoped>
    .nothing{
        text-align: center;
        color: orangered;
    }
      .remove-item{
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
        position: absolute;
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
</style>