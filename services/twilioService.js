import twilio from "twilio";

const twClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendMessageViaTwilio = async (message, to) => {
  try {
    const response = await twClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    });
    console.log("Twilio response:", response);
    return response;
  } catch (error) {
    console.error("Error sending Twilio message:", error);
    throw error;
  }
};
