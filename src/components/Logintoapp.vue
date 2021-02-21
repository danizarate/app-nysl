<template>

    <div class="container-fluid mt-5 pt-4 pb-4 bgrep body2">

        <div class="card login">
            <div class="card-body login-screen">
                <form @submit.prevent="Login" class="app-title">
                    <h5>
                        Member Login
                    </h5>

                    <div class="control-group">
                        <label for="inputemail" class="form-label"></label>
                        <input type="email" id="inputemail" area-describedby="emailhelp" placeholder="Email" v-model="email" class="form-control input">
                    </div>

                    <div class="control-group">
                        <label for="inputpassword" class="form-label"></label>
                        <input type="password" id="inputpassword" area-describedby="passwordhelp" placeholder="Password" v-model="password" class="form-control input">
                    </div>

                    <button class="btn btn-primary" type="submit">
                    Sign me in                    
                    </button>

                    <div v-if="error">
                        <div class="alert alert-danger" role="alert">
                        {{error}}
                        </div>
                    </div>

                    <a class="login-link" href="#">Create an Account!</a>

                </form>
            </div>
        </div>

    </div>
    

</template>

<script>
import firebase from "firebase"
import "@/firebase/init"

export default {
    name: "Login",
    data(){
        return{
            email: "",
            password: "",
            error: null
        }
    },

    methods: {
        Login(){
            console.log (this.email)
            if(this.email && this.password){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user=>{
                    console.log(user);
                    this.$store.dispatch('setUserAction', user)
                    this.$router.push({name:"Home"})
                }).catch(error =>{
                    console.log(error);
                    this.error = error
                })
            }
        }

    },

  }

</script>

<style scoped>

.body2 {
    font-family: 'Anton', sans-serif; 
    text-align: center;
}

.login {
margin: 20px auto;
width: 300px;
}

.login-screen {
background-color: #FFF;
padding: 20px;
border-radius: 5px
}

.app-title {
text-align: center;
color: #777;
}

.control-group {
margin-bottom: 10px;
}

.input {
text-align: center;
background-color: #ECF0F1;
border: 2px solid transparent;
border-radius: 5px;
font-size: 16px;
height: 60px;
width: 250px;
transition: border .5s;
}

input:focus {
border: 2px solid #0a560a;
box-shadow: none;
}

.btn {
  border: 2px solid transparent;
  background: #333333;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 5px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 250px;
  margin: 20px auto;
}

.btn:hover {
  background-color: #585555;
}

.btn:active {
  background-color: #585555;
}

.login-link {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}



</style>
