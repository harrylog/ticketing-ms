import { Message } from "node-nats-streaming";
import {
  Subjects,
  Listener,
  TicketUpdatedEvent,
} from "@hrylog-ticketing-ms/common";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEvent["data"], msg: Message) {
    const ticket = await Ticket.findByEvent(data);
    if (!ticket) {
      throw new Error("Ticket not found");
    }

    // const { title, price, version } = data;
    // ticket.set({ title, price , version });  //optional:no need for the plugin if we add the "version"

    const { title, price } = data;

    ticket.set({ title, price }); //optional:no need for the plugin if we add the "version"

    await ticket.save();

    msg.ack();
  }
}
