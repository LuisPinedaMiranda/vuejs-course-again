<script  lang="ts"> 
// la etiqueta setup se usa solamente cuando se trabaja con composition API
// si se trabaja con composition API se elimina
   export default{
    data(){
        return{
            count: 0
        }
    },
    methods: {
        increase(){
            this.count += 1; //this.count = this.count + 1
        }
    },
    mounted(){
        console.log('El valor inicial del contador es ' + this.count)
    }
   }
</script>


<template>
    <p>Objetivo: Tienes que llegar a 20 clicks</p>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">
        Aumentar contador
    </button>

    <p v-if="count <= 10">Vamos tu puedes</p>
    <p v-else>Ya te falta muy poco...</p>
</template>