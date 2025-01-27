import express from "express";
import cors from "cors";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.post("/send-sms", (req, res) => {
  console.log("Route Hit");
  console.log("Request Body", req.body);

  const { to, message } = req.body;
  if (!to || !message) {
    return res
      .status(400)
      .send({ error: "Recipient or Message, something was missing" });
  }
  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    })
    .then((msg) => res.send({ success: true, sid: msg.sid }))
    .catch((err) => res.status(500).send({ success: false, error: err }));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
