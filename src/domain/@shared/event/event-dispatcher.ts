import EventDisapatcherInterface from "./event-dispatcher.interface";
import EventHanlderInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default class EventDisapatcher implements EventDisapatcherInterface {
    
    private eventHandlers: { [eventName: string]: EventHanlderInterface[] } = {};

    get getEventHandlers(): { [eventName: string]: EventHanlderInterface[] } {
        return this.eventHandlers;
    }

    notify(event: EventInterface): void {
        const eventName = event.constructor.name;
        if (this.eventHandlers[eventName]) {
            this.eventHandlers[eventName].forEach((eventHandler) => {
                eventHandler.handle(event);
            });
        }
    }
    register(eventName: string, eventHandler: EventHanlderInterface<EventInterface>): void {
        if(!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }

        this.eventHandlers[eventName].push(eventHandler);
    }
    unregister(eventName: string, eventHandler: EventHanlderInterface<EventInterface>): void {
        if(this.eventHandlers[eventName]) {
            const index = this.eventHandlers[eventName].indexOf(eventHandler);
            if (index!== -1) {
                this.eventHandlers[eventName].splice(index, 1);
            }
        }
    }
    unregisterAll(): void {
        this.eventHandlers = {};
    }

}