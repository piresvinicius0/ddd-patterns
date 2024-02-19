import ProductFactory from "./product.factory";

describe("Product factory unit test", () => {

    it("Should create a product type A", () => {
        //Arrange
        const product = ProductFactory.create("a", "Product A", 10);

        // Act

        //Assert
        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product A");
        expect(product.price).toBe(10);
        expect(product.constructor.name).toBe("Product");
    });

    it("Should create a product type A", () => {
        //Arrange
        const product = ProductFactory.create("b", "Product B", 20);

        // Act

        //Assert
        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product B");
        expect(product.price).toBe(10);
        expect(product.constructor.name).toBe("ProductB");
    });

    it("Should throw an error when creating a product with an invalid type", () => {
        //Arrange
        const product = ProductFactory.create("c", "Product C", 30);
        // Act
        //Assert
        expect(() => {
            product.constructor.name;
        }).toThrowError("Invalid product type");
    });
});