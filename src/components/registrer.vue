<template>
    <form class="formulario">
    
    <h1>Registrate</h1>
     <div class="contenedor ">
     
     <div class="input-contenedor">
         <i class="fas fa-user icon"></i>
         <input type="text" placeholder="Nombre Completo">
         
         </div>
         
         <div class="input-contenedor">
         <i class="fas fa-envelope icon"></i>
         <input  v-model="email" type="text" placeholder="Correo Electronico">
         
         </div>
         
         <div class="input-contenedor">
        <i class="fas fa-key icon"></i>
         <input v-model="password" type="password" placeholder="Contraseña">
         
         </div>
         <input type="button" value="Registrate" class="button" @click="registrarse()">
         <p>¿Ya tienes una cuenta?<a class="link" href="loginvista.html">Iniciar Sesion</a></p>
     </div>
    </form>
</template>


<script>
export default {
      
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