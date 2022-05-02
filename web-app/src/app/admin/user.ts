import { Coupon } from "./coupon";
import { Product } from "./restaurant";

export interface Order {
    id: string;
    products: Product[];
    amount: number;
    coupon: Coupon;
    restaurant: string;
}

export interface User {
    name: string;
    id: string;
    orders: Order[];
    paymentMethods: String[] // tem que adicionar metodo de pagamento aqui
}