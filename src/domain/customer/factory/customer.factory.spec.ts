import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit test", () => {

    it("should create a customer", () => {
        let customer = CustomerFactory.create( "John");

        expect(customer.name).toBe("John");
        expect(customer.id).toBeDefined();
        expect(customer.constructor.name).toBe("Customer");
        expect(customer.address).toBeUndefined();
    });

    it("Should create a customer with adress", () => {
        const adress = new Address("Street",1256, "1456-420", "São Paulo");
        let customer = CustomerFactory.createWithAddress("John", adress);

        expect(customer.name).toBe("John");
        expect(customer.id).toBeDefined();
        expect(customer.constructor.name).toBe("Customer");
        expect(customer.address.street).toBe("Street");
        expect(customer.address.number).toBe(1256);
        expect(customer.address.zipCode).toBe("1456-420");
        expect(customer.address.city).toBe("São Paulo");

    });
   

});