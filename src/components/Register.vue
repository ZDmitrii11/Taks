<template>
    <div class="col-md-4 col-md-offset-4" id="login">
        <section id="inner-wrapper" class="login">
            <article>
                <form>


                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope"> </i></span>
                            <input type="email"  v-model="email" class="form-control" placeholder="Email Address">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"> </i></span>
                            <input type="password" v-model="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"> </i></span>
                            <input type="password" v-model="passwordControl" class="form-control" placeholder="Confirm Password">
                        </div>
                    </div>
                    <button  @click.prevent="checkForm"  class="btn btn-success btn-block">Submit</button>
                    <button @click="backToLogin" type="submit" class="btn btn-success btn-block">Have Accaunt Back to
                        Login
                    </button>
                </form>
            </article>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "LoginPage"
        ,
        data(){
            return {
                email: '',
                password: '',
                passwordControl: '',
                emailregex:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                passwordregex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm
            }
        },
        methods: {
            checkForm(){
              if (this.emailregex.test(this.email) &&
                      this.passwordregex.test(this.password)
                  && this.password === this.passwordControl
                  ){
                  console.log(true)
               axios.post('http://localhost:5000/api/v1/register',{
                   username:this.email,
                   password:this.password
               }).then(res=>{
                   console.log(res)
                   this.$router.push('/')
               }).catch(err=>console.log(err))
              }
              else {
                  console.log('error')
              }
              console.log(this.password)
                console.log(this.passwordControl)
            },

            backToLogin() {
                if (this.$router.currentRoute.path !== '/') {
                    this.$router.push('/')
                }
            }
        }
    }

</script>

<style scoped>

    body {
        background: #333;
    }

    #login {
        -webkit-perspective: 1000px;
        -moz-perspective: 1000px;
        perspective: 1000px;
        margin-top: 50px;
        margin-left: 30%;
    }

    .login {
        font-family: 'Josefin Sans', sans-serif;
        -webkit-transition: .3s;
        -moz-transition: .3s;
        transition: .3s;
        -webkit-transform: rotateY(40deg);
        -moz-transform: rotateY(40deg);
        transform: rotateY(40deg);
    }

    .login:hover {
        -webkit-transform: rotate(0);
        -moz-transform: rotate(0);
        transform: rotate(0);
    }

    .login article {

    }

    .login .form-group {
        margin-bottom: 17px;
    }

    .login .form-control,
    .login .btn {
        border-radius: 0;
    }

    .login .btn {
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .input-group-addon {
        border-radius: 0;
        color: #fff;
        background: #f3aa0c;
        border: #f3aa0c;
    }

    .forgot {
        font-size: 16px;
    }

    .forgot a {
        color: #333;
    }

    .forgot a:hover {
        color: #5cb85c;
    }

    #inner-wrapper, #contact-us .contact-form, #contact-us .our-address {
        color: #1d1d1d;
        font-size: 19px;
        line-height: 1.7em;
        font-weight: 300;
        padding: 50px;
        background: #fff;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        margin-bottom: 100px;
    }

    .input-group-addon {
        border-radius: 0;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        color: #fff;
        background: #f3aa0c;
        border: #f3aa0c;
        border-right-color: rgb(243, 170, 12);
        border-right-style: none;
        border-right-width: medium;
    }
</style>