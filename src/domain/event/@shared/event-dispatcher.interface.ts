import EventHanlderInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default interface EventDisapatcherInterface {
    notify(event: EventInterface): void;
    register(eventName: string, eventHandler: EventHanlderInterface): void;
    unregister(eventName: string, eventHandler: EventHanlderInterface): void;
    unregisterAll(): void;

}