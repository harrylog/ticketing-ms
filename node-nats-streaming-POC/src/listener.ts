import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/ticket-created-listener";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "nats://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS");

  stan.on("close", () => {
    console.log("NATS connection closed!");
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

// Graceful shutdown handlers
process.on("SIGINT", () => {
  stan.close();
});
process.on("SIGTERM", () => {
  stan.close();
});

//docker run -p 4222:4222 -p 8222:8222 nats-streaming:latest -cid ticketing
