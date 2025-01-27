import { smsProviderFactory } from "../services/smsProviderFactory.js";
export const sendSms = async (req, res) => {
  const { provider, to, message } = req.body;

  if (!provider || !to || !message) {
    return res
      .status(400)
      .json({ error: "Provider, recipient, or message is missing" });
  }
  try {
    const sendMessage = smsProviderFactory(provider);
    const response = await sendMessage(message, to);
    res.status(200).json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
