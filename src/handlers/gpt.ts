import { Client, Message } from "whatsapp-web.js";

export async function handleMessageGPT(client: Client, message: Message, prompt: string) {
  const response = `🤖 You asked: ${prompt}`;
  await client.sendMessage(message.from, response);
}

export async function handleDeleteConversation(client: Client, message: Message) {
  await client.sendMessage(message.from, "🧹 Conversation cleared.");
}
