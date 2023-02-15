<template>
  <div>

    <div class="container-fluid ">
        <div class="row justify-content-center text-center" style="margin: 120px">
            <div class="card d-flex p-0 justify-content-center text-center rounded-3"  id="cita"  style="width: 20rem; ">
                <div class="card-img-top mb-5 " id="card-img" >                    
                    <img  :src="img" alt=""  id="img" > 
                </div>
                
         <div class="card-body  mt-5">
            <div class="row mt-2">
            <div class="col-2"></div>
            <div class="col-5"> <h6><strong> {{ names }}</strong> </h6></div>
            <div class="col-3"> <h5 > </h5> {{ life }}</div>
            <div class="col-2"></div>
        </div>
        <div class="row mt-2">
            <h6 >{{ xp }}</h6>
            <hr >
        </div>
            <div class="row mt-2">
                <div class="col"> <h6 >{{ ataque }}</h6> </div> 
                <div class="col"> <h6 >{{ especial }}</h6> </div>  
                <div class="col"> <h6 >{{ defensa }}</h6> </div>
            </div>   
            
            <div class="row">
                <div class="col"> <h6 >Ataque</h6> </div> 
                <div class="col"> <h6 >Especial</h6> </div>  
                <div class="col"> <h6 >Defensa</h6> </div>
            </div>
            <button @click="changePoke()" class="mt-2 bg bg-danger" >Pokemon</button>
        </div>
    </div>
    </div>
    </div>

  
  </div>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';
export default {
  setup() {
    let names = ref();
    let life = ref();
    let xp = ref();
    let ataque = ref();
    let especial = ref();
    let defensa = ref();
    let img = ref('')
    let poke = 0


    function getPokemon(poke) {
      console.log("Procesando solicitud");
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then((res) => {
          console.log(res.data);
          createCardPoke(res.data);
        })

        .catch((error) => {
          createCardPoke();
        });

      console.log("Solicitud procesada");
    }

    function createCardPoke(data = null) {
      if (data !== null) {
        
        img.value=data.sprites.other.dream_world.front_default;
        names.value = data.name;
        life.value = data.stats[0].base_stat ;
        xp.value = data.base_experience ;
        ataque.value = data.stats[1].base_stat ;
        especial.value = data.stats[3].base_stat;
        defensa.value = data.stats[2].base_stat ;
      } else {
       names.value = 'no se encuentra'
      }
    }
    function changePoke() {
        poke = Math.floor(Math.random() * 500) + 1;
      getPokemon(poke);
    }
    return{
  
        names,life,xp,ataque,especial,defensa,ataque,changePoke,getPokemon,createCardPoke,poke,img
    }
  },
};
</script>

<style>
#img{
  height:"10px";
   width:"10px" ; 
   border-radius:50% ;
   z-index:1 ;
   border:5px solid rgb(255, 255, 255);
    position: relative;
    top:100px;

}

</style>