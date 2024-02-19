import SendEmailWhenProductCreatedHandler from "../../product/event/handler/send-email-when-product-is-created";
import ProductCreatedEvent from "../../product/event/product-created.event";
import EventDisapatcher from "./event-dispatcher";

describe("Domain events testes", () => {
    it("Should register an event handler", () => {
        // Arrange
        const eventDispatcher = new EventDisapatcher();
        const eventHandler = new SendEmailWhenProductCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
    });

    it("Should unregister an event handler", () => {
        // Arrange
        const eventDispatcher = new EventDisapatcher();
        const eventHandler = new SendEmailWhenProductCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregister("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
    });

    it("Should unregister all events handler", () => {
        // Arrange
        const eventDispatcher = new EventDisapatcher();
        const eventHandler1 = new SendEmailWhenProductCreatedHandler();
        const eventHandler2 = new SendEmailWhenProductCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler1);
        eventDispatcher.register("ProductCreatedEvent", eventHandler2);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][1]).toMatchObject(eventHandler2);

        eventDispatcher.unregisterAll();

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBe(undefined);
    });

    it("Should notify all event handler", () => {
        // Arrange
        const eventDispatcher = new EventDisapatcher();
        const eventHandler = new SendEmailWhenProductCreatedHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        const productCreatedEvent = new ProductCreatedEvent({
            id: 1,
            name: "Product 1",
            description: "Product 1 description",
            price: 10.0,
            createdAt: new Date()
        });

        eventDispatcher.notify(productCreatedEvent);

        expect(spyEventHandler).toHaveBeenCalled();
    });
});