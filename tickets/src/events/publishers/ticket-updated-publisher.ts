import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@hrylog-ticketing-ms/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
