<script setup lang="ts">
    import {onMounted,ref} from 'vue'
    const count = ref(0);

    //Definición de una función o el equivalente a Methods de options API
    function aumentar() {
        count.value += 1;
    }    

    //Hooks para composition
    onMounted(() => {
        console.log('El valor inicial del contador es ' + count.value);
    });
</script>
<template>
    <p>Hola soy la versión de Composition API</p>
    <h1>Contador: {{ count }}</h1>
    <button @click="aumentar">
        Incrementar contador
    </button>
</template>