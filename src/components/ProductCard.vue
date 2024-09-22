<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types';
// la etiqueta setup se usa solamente cuando se trabaja con composition API
// si se trabaja con composition API se elimina
export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
    emits:['addProduct'],
    methods: {
         onAddButtonClick(){
            //console.log('Agregando producto ' + this.product.id);
            //Vamos a emitir un evento del componente hijo al componente padre

            this.$emit('addProduct')
         }
    }
}
    //Antes de definir una interfaz para los props que vienen de p de ProductList
    //Esto forza a que se exija un tipo de dato en particular y para eso se ocupará una interfaz con Typescript
    //props:['product']

    //Ya no se va a ocupar este estado para pasar esta data a las etiquetas p como product.name o product.price, ahora se ocuparán props
    /*data(){ 
        return{
            product: 
                {
                    name:'Silla',
                    price: 56 ,
                },
        }
    }*/

</script>


<template>
    <v-card> <!--a title hay que agregarle : para que se interprete como codigo js y no literal :title="product.name" pero fue pasado a v-card-title-->
        <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
        <v-card-title>
            {{ product.name }}
        </v-card-title>
        <v-card-text>
            <p class="mb-4">Esta es una descripción de ejemplo</p>
            <v-chip>
                ${{ product.price }}
            </v-chip>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="onAddButtonClick">
                Agregar al carrito
            </v-btn>
        </v-card-actions>
    </v-card>




    <!---<v-card text="">
        <p>Nombre: {{ product.name }}</p>
        <p>Precio: {{ product.price }}</p>
        <button @click="onAddButtonClick">
            Agregar al carrito
        </button>
    </hr>
    </v-card>-->
</template>