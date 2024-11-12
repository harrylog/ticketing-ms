import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

console.clear();

const stan = nats.connect("ticketing", "publisher-1", {
  url: "nats://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: "123",
      title: "concert",
      price: 20,
    });
    console.log("Event published successfully");
    // Remove the automatic disconnection
    // Instead, wait for manual termination
  } catch (err) {
    console.error("Publishing error:", err);
  }
});

// Graceful shutdown handlers
process.on("SIGINT", () => {
  stan.close();
  process.exit();
});
process.on("SIGTERM", () => {
  stan.close();
  process.exit();
});

//docker run -p 4222:4222 -p 8222:8222 nats-streaming:latest -cid ticketing
