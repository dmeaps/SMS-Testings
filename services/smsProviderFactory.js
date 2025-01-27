import { sendMessageViaTwilio } from "./twilioService.js";
import { sendMessageViaFast2SMS } from "./fastService.js";

export const smsProviderFactory = (provider) => {
  switch (provider.toLowerCase()) {
    case "twilio":
      return sendMessageViaTwilio;
    case "fast2sms":
      return sendMessageViaFast2SMS;
    default:
      throw new Error(`Unsupported SMS provider: ${provider}`);
  }
};
