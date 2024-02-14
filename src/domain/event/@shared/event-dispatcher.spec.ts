import SendEmailWhenProductCreatedHandler from "../procuct/handler/send-email-when-product-is-created";
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
});