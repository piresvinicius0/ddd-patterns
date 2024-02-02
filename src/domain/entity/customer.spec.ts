import Address from "./address";
import Customer from "./customer";
describe("Customer Unit Test", () => {
it("should throw an error when id is emprty", () => {
    expect(() => {
        let customer = new Customer("", "Bob");
        }).toThrowError("ID cannot be empty");        

    expect(() => {
        let customer = new Customer("123", "");
        }).toThrowError("Name cannot be empty");      
    });
    
    it("should throw an error when name is emprty", () => {
        expect(() => {
            let customer = new Customer("123", "");
            }).toThrowError("Name cannot be empty");      
        }); 
    it("should change name", () => {
        const customer = new Customer("123", "Bob Dog");
        customer.changeName("Buba");
         expect(customer.name).toBe("Buba");     
     }); 

     it("should activate customer", () => {
        const customer = new Customer("123", "Bob Dog");
        const address = new Address("123 Main St", 123, "12345", "Passo Fundo");
        customer.addAddress(address);
        customer.activate();
         expect(customer.isActive()).toBe(true);     
     });

     it("should deactivate customer", () => {
        const customer = new Customer("123", "Bob Dog");
        const address = new Address("123 Main St", 123, "12345", "Passo Fundo");
        customer.addAddress(address);
        customer.deactivate();
         expect(customer.isActive()).toBe(false);     
     });

     it("should throw error when address not set", () => {
        const customer = new Customer("123", "Bob Dog");
        expect(() => {
            customer.activate();
        }).toThrowError("Address not set");       
     });
});