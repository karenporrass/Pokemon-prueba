<template>
 <div>
  <form class="formulario" >
    
    <h1>Login</h1>
     <div class="contenedor">
     
     
        <h1><a v-bind:href="links" class="text-danger text-decoration:none;">{{ alert }}</a></h1> 
         <div class="input-contenedor">
         <i class="fas fa-envelope icon"></i>
         <input v-model="email" type="text" placeholder="Correo Electronico">
         
         </div>
         
         <div class="input-contenedor">
        <i class="fas fa-key icon"></i>
         <input v-model="password" type="password" placeholder="Contraseña">
         
         </div>
         <input type="button" value="Login" class="button" @click="login()">
         <p>¿No tienes una cuenta? <a class="link" href="registrer.html">Registrate </a></p>
     </div>
    </form>


 </div>
  </template>

<script>
  import {ref} from "vue"
  export default {
    setup(){
      let alert= ref(" ")
      let email= ref("")
      let password = ref("")
      let links = ref()

      function login(){
        console.log(email);
        console.log(password);
        if(email.value== ""){
          alert.value = 'digite un email valido'

        }

         else if (password.value == ""){
          alert.value = 'digite una password'
        }
        

        else{ 
              links.value ='card.html'
              alert.value= 'card'
            }
           
        } 
      

      return{
        alert,
        email,
        password,
        login,
        links
      }
    }

    }

    
  
  </script>

  
  <style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
   background: url(imagen.jpg);
    background-size: cover;
    background-attachment: fixed;
}
* {
    box-sizing: border-box;
}
.contenedor{
    width: 100%;
    padding: 15px;
}
.formulario{
    background: #fff;
    margin-top: 150px;
    padding: 3px;
}
h1{
    text-align: center;
    color: #1a2537;
    font-size: 40px;
}
input[type="text"],
input[type="password"]{
    font-size: 20px;
    width: 82%;
    padding: 10px;
    border: none;
}
.input-contenedor{
    margin-bottom: 15px;
    border: 1px solid #aaa;
}
.icon{
    min-width: 50px;
    text-align: center;
    color: #999;
}
.button{
    border: none;
    width: 100%;
    color: white;
    font-size: 20px;
    background:  #1a2537;
    padding: 15px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.button:hover{
    background: cadetblue;
}
p{
    text-align: center;
}
.link{
    text-decoration: none;
      color: #1a2537;
    font-weight: 600;
}
.link:hover{
     color: cadetblue;
}
@media(min-width:768px)
{
    .formulario{
        margin: auto;
        width: 500px;
        margin-top: 150px;
        border-radius: 2%;
    }
}


    </style>
