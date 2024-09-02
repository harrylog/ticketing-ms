import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@hrylog-ticketing-ms/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
