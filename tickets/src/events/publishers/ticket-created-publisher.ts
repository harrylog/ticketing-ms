import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@hrylog-ticketing-ms/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
