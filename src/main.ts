import OrderItem from "./domain/entity/order_item";
import Order from "./domain/entity/order";
import Customer from "./domain/entity/customer";
import Address from "./domain/entity/address";

let customer = new Customer("John", "Doe");
const address = new Address("Street", 123, "12345", "City");
customer.addAddress(address);
customer.activate();

const order = new Order("123", "John", [new OrderItem("123", "Item 1", 10, "1", 1), new OrderItem("1234", "Item 2", 15, "2", 2)]);




