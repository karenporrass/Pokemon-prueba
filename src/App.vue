<template>
  <div class="container-fluid">
    <div class="row bg-dark p-0 text-white">
      <div class="col-1"></div>
      <div class="col-10 m-2">Pokemones</div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1">
      </div>
       <div class="col-10">
        <table>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id ">
              <td><a href="login.html" >{{ todo.name }}</a></td>
            </tr>
          </tbody>
        </table>

       </div>
   
      <div class="col-1"></div>
    </div>

    <div class="row fixed-bottom bg bg-dark text-white">
      <div class="col-1"></div>
      <div class="col-10">Karen Natalia Cardenas Porras</div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import{ref} from "vue"
// export default{
//  setup(){
//   let datas = ref()

//   function  getTodos(){
//       axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
//       .then(response =>{
//         console.log(response);
//         datas.value = response
//       })
// }
// return{
//   datas,getTodos
// }
// }
// }
export default {
  data(){
    return{

      todos:null
    }
  },
  mounted(){
    this.gettodos();
  },
  methods: {
    gettodos(){
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then( response =>{
        this.todos = response.data.results
      })
      .catch(e=> console.log(e))
    }
  } 
}
</script>

<style>

</style>