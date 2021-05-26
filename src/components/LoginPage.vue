<template>
    <div class="container">
        <form action="/action_page.php">
            <div class="my-row">
                <div class="vl">
                    <span class="vl-innertext">OR</span>
                </div>
                <div class="col">
                    <div class="hide-md-lg">
                        <p>Or sign in manually:</p>
                    </div>
                    <h1 align="center">Login</h1>
                    <label class="label">Email</label>
                    <input class="my-input" type="text" v-model="username" name="username"
                           placeholder="Email or Username" required>
                    <label class="label">Password</label>
                    <input class="my-input" type="password" v-model="password" name="password" placeholder="Password"
                           required>
                    <button id="login" @click.prevent="login">Login</button>
                    <a class="singUp" @click="Register" href="#">Want To Sing Up ?</a>
                </div>


                <div id="my-col" class="col">
                    <a href="#" class="fb my-btn">
                        <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                    </a>
                    <a href="#" class="twitter my-btn">
                        <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                    </a>
                    <a href="#" class="google my-btn"><i class="fa fa-google fa-fw">
                    </i> Login with Google+
                    </a>
                </div>


            </div>
        </form>

    </div>


</template>

<script>
    import axios from 'axios'

    export default {
        name: "LoginPage",
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            Register() {

                if (this.$router.currentRoute.path !== '/Register') {
                    this.$router.push('/Register')
                }
            },

            login() {
                axios.post('http://localhost:5000/api/v1/login', {
                    username: this.username,
                    password: this.password
                }).then(
                    res => {

                        localStorage.setItem('token', res.data.token)
                        this.$router.push('/user-page')
                    }
                )
                    .catch(err => console.log(err))

            }

        }
    }
</script>

<style scoped>
    body {

        font-family: Arial, Helvetica, sans-serif;

    }

    * {
        box-sizing: border-box;
    }

    /* style the container */

    .container {
        position: relative;
        background-color: white;
        padding: 20px 0 30px 0;
        width: 1500px;
        height: auto;
        margin-top: 12%;


    }

    .my-container {

    }

    .label {
        font-size: 25px;

    }

    #my-col {
        margin-top: 6%;
        padding: 2rem;
    }

    .singUp {
        font-size: 20px;
    }

    .my-input {
        font-size: 22px;
        padding: 1rem;
        margin-top: 15px;
    }

    /* style inputs and link buttons */
    input,
    .my-btn {
        width: 100%;
        padding: 12px;
        border: 1px solid #6c757d;
        border-radius: 4px;
        margin: 5px 0;
        opacity: 0.85;
        display: inline-block;

        line-height: 20px;
        text-decoration: none; /* remove underline from anchors */
        height: 55px;
        font-size: 17px;

    }

    input:hover,
    .btn:hover {
        opacity: 1;
    }

    /* add appropriate colors to fb, twitter and google buttons */
    .fb {
        background-color: white;

        height: 50px;
    }

    .twitter {
        background-color: white;

        height: 50px;
    }

    .google {
        background-color: white;

        height: 50px;
    }

    /* style the submit button */
    input[type=submit] {
        background-color: #04AA6D;
        color: white;
        cursor: pointer;

    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    #login {
        background-color: #04AA6D;
        color: white;
        cursor: pointer;
        width: 80%;
        height: 50px;
        margin: 2rem;
        background-color: red;
        padding: 1rem;


    }


    #login:hover {
        background-color: #45a049;
    }

    /* Two-column layout */
    .col {
        float: left;
        width: 50%;

        padding: 0 50px;
        margin-top: 6px;
        text-align: center;

    }

    .my-row {
        margin-top: 5%;
    }

    /* Clear floats after the columns */
    .my-row:after {
        content: "";
        display: table;
        clear: both;
    }

    /* vertical line */
    .vl {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        border: 1px solid #ddd;
        height: 70%;
    }

    /* text inside the vertical line */
    .vl-innertext {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        font-size: 35px;
        color: #6c757d;
        /*border: 1px solid #ccc;*/
        /*border-radius: 50%;*/
        /*padding: 8px 10px;*/
    }

    /* hide some text on medium and large screens */
    .hide-md-lg {
        display: none;

    }

    /* bottom container */
    .bottom-container {
        text-align: center;
        background-color: #666;
        border-radius: 0px 0px 4px 4px;
    }

    /* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 450px) {
        .col {
            width: 100%;
            margin-top: 0;
        }

        /* hide the vertical line */
        .vl {
            display: none;
        }

        /* show the hidden text on small screen */
        .hide-md-lg {
            display: block;
            text-align: center;
            height: 70%;
        }
    }

</style>