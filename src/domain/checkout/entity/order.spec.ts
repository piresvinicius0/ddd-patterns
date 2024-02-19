import Address from "../../customer/value-object/address";
import Customer from "../../customer/entity/customer";
import Order from "./order";
import OrderItem from "./order_item";
describe("Order Unit Test", () => {
    it("should throw an error when id is empty", () => {
        expect(() => {
            let order = new Order("","123", []);
        }).toThrowError("ID cannot be empty");           
    });

    it("should throw an error when customerId is empty", () => {
        expect(() => {
            let order = new Order("Bob","", []);
        }).toThrowError("CustomerId cannot be empty");           
    });

    it("should throw an error when orderitem is zero", () => {
        expect(() => {
            let order = new Order("Bob","123", []);
        }).toThrowError("Item qtd must be greater than zero");                      
    });

    it("should calculate total", () => {
        const item = new OrderItem("123", "1", 100, "456", 2);
        const item2 = new OrderItem("456", "2", 200, "789", 2);
        const order = new Order("Bob","123", [item, item2]);
        const total = order.total();
        expect(total).toBe(600);                      
    });

    it("should check item quantity is greater than zero", () => {
        expect(() => {
            const item = new OrderItem("123", "1", 100, "456", 0);
            const order = new Order("Bob","123", [item]);
        }).toThrowError("Quantity must be greater than zero");                                        
    });
});