import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@hrylog-ticketing-ms/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
