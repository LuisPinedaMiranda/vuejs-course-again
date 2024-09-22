//Esta interface se define en un solo lado 
//Para después usarla donde se requiera
// Desde ProductCard para que lo reciba como prop y desde ProductList para definir nuestro arreglo de productos

export interface Product{
    name: string;
    price: number;
    id: number;
}

export interface CartDetail{
    productId: number;
    quantity: number;
}