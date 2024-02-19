import Product from "./product";

describe("Product Unit Test", () => {
    it("should throw an error when id is empty", () => {
        expect(() => {
            let product = new Product("","Product 1", 100);
        }).toThrowError("ID cannot be empty");           
    });

    it("should throw an error when name is empty", () => {
        expect(() => {
            let product = new Product("1","", 100);
        }).toThrowError("Name cannot be empty");           
    });

    it("should throw an error when price is empty", () => {
        expect(() => {
            let product = new Product("1","Product 1", null);
        }).toThrowError("Price cannot be empty");           
    });

    it("should price be greater than 0", () => {
        expect(() => {
            let product = new Product("1","Product 1", -200);
        }).toThrowError("Price must be greater than zero");                      
    });

    it("should change name", () => {
        const product = new Product("1","Product 1", 100);
        product.changeName("Product 2");
        expect(product.name).toBe("Product 2");                     
    });

    it("should change price", () => {
        const product = new Product("1","Product 1", 100);
        product.changePrice(150);
        expect(product.price).toBe(150);                     
    });
});