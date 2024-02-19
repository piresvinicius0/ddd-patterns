import Customer from "../../customer/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order Service Unit Tests", () => {
    it("Should get total of all orders", () => {
        // Arrange
        const item1 = new OrderItem("1", "Item 1", 100, "p1", 1);
        const item2 = new OrderItem("2", "Item 1", 200, "p2", 2);
        const order1 = new Order("1", "1", [item1]);
        const order2 = new Order("2", "1", [item2]);
        const orders = [order1, order2];

        // Act
        const total = OrderService.total(orders);

        // Assert
        expect(total).toBe(500);
    })

    it("Should place an order", () => {
        // Arrange
        const customer = new Customer("c1", "Cliente 1");
        const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);
       
        // Act
        const order = OrderService.placeOrder(customer, [item1]);
        
        // Assert
        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    })

    it("Should add reward pointd", () => {
        // Arrange
        const customer = new Customer("c1", "Cliente 1");
        const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);
       
        // Act
        customer.addRewardPoints(10);
        
        // Assert
        expect(customer.rewardPoints).toBe(10);

        // Act
        customer.addRewardPoints(10);
        
        // Assert
        expect(customer.rewardPoints).toBe(20);
    })
})