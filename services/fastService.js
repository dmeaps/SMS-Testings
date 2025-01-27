export const sendMessageViaFast2SMS = async (message, to) => {
  try {
    console.log("Fast2SMS response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending message via Fast2SMS:", error);
    throw error;
  }
};
