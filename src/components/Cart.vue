<script lang="ts">
import type { CartDetail } from './types';
import type { PropType } from 'vue';
export default {
    props:{
        details: {
            type: Object as PropType<Array<CartDetail>>,
            required: true 
        }   
    },
    
    
   /* data(){ //Como arriba ya recibimos los detail con props, ya podemos borrar esta variable de estado
        return {
            details: <Array<CartDetail>>[]
        };
    }*/

}
</script>

<template>
    <v-card class="mt-4">
        <v-card-title>
            Productos agregados al carrito
        </v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item v-for="detail in details" :value="detail.productId">
                    <v-list-item-title>
                        Product: {{ detail.productId }}
                        (Qty: {{ detail.quantity }})
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>

  <!---  <ul>   
        <li v-for="detail in details">
            {{ detail.productId }} (Qty: {{ detail.quantity }})
        </li>
    </ul>-->   <!--Este código fue metido a un componente <v-list> como se ve en la parte de arriba-->

</template>