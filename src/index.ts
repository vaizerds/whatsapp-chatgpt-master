import qrcode from "qrcode";
import { Client, Message, Events, LocalAuth } from "whatsapp-web.js";

import constants from "./constants";
import * as cli from "./cli/ui";
import { handleIncomingMessage } from "./handlers/message";
import { initAiConfig } from "./handlers/ai-config";
import { initOpenAI } from "./providers/openai";

let botReadyTimestamp: Date | null = null;

const start = async () => {
  const wwebVersion = "2.2412.54";
  cli.printIntro();

  const client = new Client({
    puppeteer: { args: ["--no-sandbox"] },
    authStrategy: new LocalAuth({ dataPath: constants.sessionPath }),
    webVersionCache: {
      type: "remote",
      remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`
    }
  });

  client.on(Events.QR_RECEIVED, (qr: string) => {
    qrcode.toString(qr, { type: "terminal", small: true, margin: 2, scale: 1 }, (err, url) => {
      if (err) throw err;
      cli.printQRCode(url);
    });
  });

  client.on(Events.LOADING_SCREEN, (percent) => {
    if (percent == "0") cli.printLoading();
  });

  client.on(Events.AUTHENTICATED, () => cli.printAuthenticated());
  client.on(Events.AUTHENTICATION_FAILURE, () => cli.printAuthenticationFailure());

  client.on(Events.READY, () => {
    cli.printOutro();
    botReadyTimestamp = new Date();
    initAiConfig();
    initOpenAI();
  });

  client.on(Events.MESSAGE_RECEIVED, async (message: any) => {
    if (message.from == constants.statusBroadcast || message.hasQuotedMsg) return;
    await handleIncomingMessage(client, message);
  });

  client.on(Events.MESSAGE_CREATE, async (message: Message) => {
    if (message.from == constants.statusBroadcast || message.hasQuotedMsg || !message.fromMe) return;
    await handleIncomingMessage(client, message);
  });

  client.initialize();
};

start();
export { botReadyTimestamp };
