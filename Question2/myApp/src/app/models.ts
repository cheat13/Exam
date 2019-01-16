export class Product {
    id: string
    name: string
    price: number
    amount: number
    totalPrice: number
}

export class Cart {
    products: Product[]
    totalPrice: number
    discount: number
    payments: number
}
