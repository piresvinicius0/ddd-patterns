import { v4 as uuid } from 'uuid';
import OrderFactory from './order.factory';

describe("Order factory unit test", () => {
    it("should create an order", () => {
        const orderProps = {
            id: uuid(),
            customerId: uuid(),
            items: [
                {
                    id: uuid(),
                    name: "Item 1",
                    price: 100,
                    productId: uuid(),
                    quantity: 1
                }
            ]
        }

        const order = OrderFactory.create(orderProps);

        expect(order.id).toBe(orderProps.id);
        expect(order.customerId).toEqual(orderProps.customerId);
        expect(order.items.length).toBe(orderProps.items.length);

    });
});