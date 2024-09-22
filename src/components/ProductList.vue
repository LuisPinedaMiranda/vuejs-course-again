<script lang="ts">
import ProductCard from "./ProductCard.vue"
import Cart from "./Cart.vue"
import Theme from "../components/Theme.vue"
import type { CartDetail, Product } from '../model/types'
import { useTheme } from 'vuetify'
export default {


    components: {
        ProductCard,
        Cart,
        Theme
    },
    data() {
        return {
            products: <Array<Product>>[
                { name: 'Silla', price: 56, id: 5 },
                { name: 'Monitor', price: 450, id: 7 },
                { name: 'Microfono', price: 120, id: 20 },
                { name: 'Mouse', price: 20, id: 25 },

            ],
            details: <Array<CartDetail>>[],
        }
    },
    methods: {
        onProductAdded(productId: number) {
            //console.log('Agregar Producto ' + productId);
            const detailFound = this.details.find(d => d.productId === productId)
            if (detailFound) {
                //+1
                detailFound.quantity += 1;
            } else {
                this.details.push({
                    productId,
                    quantity: 1
                });
            }
        },
    }
}
</script>


<template>

    
        <Theme class="mb-4"></Theme>

        <v-row>
            <v-col v-for="p in products" cols="4">
                <ProductCard :product="p" @addProduct="onProductAdded(p.id)" />
            </v-col>
        </v-row>
        <Cart :details="details" />
    

    <!--<ProductCard 
    v-for="p in products"
    :product="p"
    @addProduct="onProductAdded(p.id)"
    />-->
    <!--Este componente ProductCart se pasó a v-col de Vuetify con su v-for en v-col para una columna por cada producto p-->


    <!--<Cart :details="[{productId: 3, quantity: 100}]"/>-->

    <!-- <ul>  //Se hizo un v-for para un elemento de html normal como ul pero se puede hacer para otro elemento como una card de vuetify
        <li v-for="product in products">
            {{ product.name }} ($ {{ product.price }})
        </li>
    </ul> -->


</template>