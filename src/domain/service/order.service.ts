import Customer from "../customer";
import Order from "../order";
import OrderItem from "../order_item";
import { v4 as uuid } from "uuid";

export default class OrderService {
    static total(orders: Order[]): number {
        return orders.reduce((acc, order) => acc + order.total(), 0);
    }

    static placeOrder(customer: Customer, items: OrderItem[]): Order {
        if (items.length === 0) {
            throw new Error("Items cannot be empty");
        }

        const order = new Order("id", customer.id, items);
        customer.addRewardPoints(order.total()/2);
        return order;
    }
}