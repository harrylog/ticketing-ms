import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@hrylog-ticketing-ms/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
