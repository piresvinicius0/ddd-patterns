import { Sequelize } from "sequelize-typescript";
import ProductModel from "../sequilize/product.model";
import Product from "../../../domain/product/entity/product";
import ProductRepository from "./product.repository";

describe("ProductRepository Test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });
        await sequelize.authenticate();
        sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should create product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product(
            "1",
            "Product 1",
            100
        );
        
        productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel.toJSON()).toStrictEqual({"id": "1", "name": "Product 1", "price": 100});
    });

    it("should update a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product(
            "1",
            "Product 1",
            100
        );
        
        productRepository.create(product);

        product.changeName("Product 2");
        product.changePrice(200);

        await productRepository.update(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });
        expect(productModel.toJSON()).toStrictEqual({"id": "1", "name": "Product 2", "price": 200});


    });

    it("find a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product(
            "1",
            "Product 1",
            100
        );
        
        productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });
        const foundProduct = await productRepository.findById(product.id);

        expect(productModel.toJSON()).toStrictEqual({id: foundProduct.id, name: foundProduct.name, price: foundProduct.price});
    });

    it("find all products", async () => {
        const productRepository = new ProductRepository();
        const product = new Product(
            "1",
            "Product 1",
            100
        );

        const product2 = new Product(
            "2",
            "Product 2",
            200
        );
        
        productRepository.create(product);
        productRepository.create(product2);

        const products = [product, product2];
        const foundProducts = await productRepository.findAll();

        expect(products).toEqual(foundProducts);
    });
});