import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@hrylog-ticketing-ms/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
