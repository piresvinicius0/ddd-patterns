import EventDisapatcherInterface from "./event-dispatcher.interface";
import EventHanlderInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default class EventDisapatcher implements EventDisapatcherInterface {
    
    private eventHandlers: { [eventName: string]: EventHanlderInterface[] } = {};

    get getEventHandlers(): { [eventName: string]: EventHanlderInterface[] } {
        return this.eventHandlers;
    }

    notify(event: EventInterface): void {
        throw new Error("Method not implemented.");
    }
    register(eventName: string, eventHandler: EventHanlderInterface<EventInterface>): void {
        if(!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }

        this.eventHandlers[eventName].push(eventHandler);
    }
    unregister(eventName: string, eventHandler: EventHanlderInterface<EventInterface>): void {
        throw new Error("Method not implemented.");
    }
    unregisterAll(): void {
        throw new Error("Method not implemented.");
    }

}