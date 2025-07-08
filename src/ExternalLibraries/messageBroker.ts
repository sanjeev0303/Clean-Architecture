import { IMessageBroker } from "../interfaces/IMessageBroker";

export class MessageBroker implements IMessageBroker{
    NotifyToPromitionService(product: unknown) {
        // do some checks
        console.log("calling message broker");
        return true
    }
}
