import Product from "../entity/product";
import ProductService from "./product.service";

describe("Product Tests Unit Tests", () => {
    it("Should change the price of all products", () => {
        // Arrange
        const product1 = new Product("1", "1", 100);
        const product2 = new Product("2", "1", 200);
        const products = [product1, product2];

        //act
        ProductService.increasePrice(products, 100);

        // Assert
        expect(product1.price).toBe(200);
        expect(product2.price).toBe(400);

    })
})