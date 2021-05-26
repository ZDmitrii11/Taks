<template>
    <div>
        <div class="Back">
            <button @click="BackHome">Back Home</button>
        </div>
        <div class="favorite-container">
            <table>
                <tr>
                    <th>ID:</th>
                    <th>Title:</th>
                    <th>Description:</th>
                    <th>Price:</th>


                </tr>
                <tr v-for="(favorit,index) in this.favorites" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{favorit.title}}</td>
                    <td>{{favorit.description}}</td>
                    <td>{{favorit.price}}</td>
                </tr>

            </table>
        </div>

        </div>
</template>

<script>

    export default {
        name: "Favorite",
        data(){
            return {
                favorites:[]
            }
        },

        computed:{

        },
        mounted() {
        this.favorites = JSON.parse(localStorage.getItem('favorite'))
        },
        watch:{},

        methods:{
            BackHome(){
                if (this.$router.currentRoute.path !== '/user-page'){
                    this.$router.push('/user-page')
                }
            }
        }
    }
</script>

<style scoped>
    .favorite-container{
        width: auto;
        height: auto;
        margin: auto;
    }
    th, td {
        padding: 8px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    tr:hover {
        background-color: #f5f5f5;
    }


    td {
        border: 1px solid black;
        text-align: center;
        width: auto;
        height: 30px;
        padding: 1rem;
        margin: 1rem;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        background-color: white;
        text-align: center;

    }


</style>