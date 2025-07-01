import { Client, Message } from "whatsapp-web.js";
import config from "../config";
import * as cli from "../cli/ui";
import { startsWithIgnoreCase } from "../utils";
import { handleMessageGPT, handleDeleteConversation } from "./gpt";
import { handleMessageDALLE } from "./dalle";
import { handleMessageAIConfig, getConfig, executeCommand } from "./ai-config";
import { botReadyTimestamp } from "../index";

export async function handleIncomingMessage(client: Client, message: Message) {
  const messageString = message.body;

  if (message.timestamp != null) {
    const messageTimestamp = new Date(message.timestamp * 1000);
    if (!botReadyTimestamp || messageTimestamp < botReadyTimestamp) {
      cli.print("Ignoring old message: " + messageString);
      return;
    }
  }

  if ((await message.getChat()).isGroup && !config.groupchatsEnabled) return;

  const selfNotedMessage = message.fromMe && !message.hasQuotedMsg && message.from === message.to;

  if (config.whitelistedEnabled) {
    const whitelist = getConfig("general", "whitelist");
    if (!selfNotedMessage && whitelist.length > 0 && !whitelist.includes(message.from)) {
      cli.print(`Ignoring message from ${message.from} (not whitelisted).`);
      return;
    }
  }

  if (startsWithIgnoreCase(messageString, config.resetPrefix)) {
    await handleDeleteConversation(client, message);
    return;
  }

  if (startsWithIgnoreCase(messageString, config.aiConfigPrefix)) {
    const prompt = messageString.substring(config.aiConfigPrefix.length + 1);
    await handleMessageAIConfig(client, message, prompt);
    return;
  }

  if (startsWithIgnoreCase(messageString, config.gptPrefix)) {
    const prompt = messageString.substring(config.gptPrefix.length + 1);
    await handleMessageGPT(client, message, prompt);
    return;
  }

  if (!config.prefixEnabled || (config.prefixSkippedForMe && selfNotedMessage)) {
    await handleMessageGPT(client, message, messageString);
  }
}
