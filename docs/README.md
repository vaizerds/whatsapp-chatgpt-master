# 🤖 ZapGPT - AI Assistant on WhatsApp with GPT & DALL·E 🚀

![Docker](https://github.com/vaizerds/zapgpt/actions/workflows/docker.yml/badge.svg)
![Code Style: Prettier](https://github.com/vaizerds/zapgpt/actions/workflows/prettier.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Educational project by [vaizerds](https://github.com/vaizerds) using **Node.js**, **whatsapp-web.js**, **OpenAI (GPT + DALL·E)** and **Docker**.

---

## 📱 About the Project

**ZapGPT** is a WhatsApp bot that can reply to text messages, voice messages, and even generate images using OpenAI's artificial intelligence.

✨ Main features:

- Responds to questions using **ChatGPT** 🧠  
- Generates images with **DALL·E 2** 🎨  
- Transcribes audio messages using **Whisper API** 🔊  
- Uses **WhatsApp Web + Puppeteer** in the backend 💻

<p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/6507938/220681521-17a12a41-44df-4d51-b491-f6a83871fc9e.png" />
</p>

---

## ⚙️ Requirements

Before getting started, make sure you have:

- Node.js 18+  
- An updated version of npm  
- A WhatsApp account  
- [OpenAI API key](https://platform.openai.com/signup)  
- (Optional) Docker for isolated execution 🐳

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/vaizerds/zapgpt.git

# Enter the project folder
cd zapgpt

# Install dependencies
npm install

# Copy the example environment file
cp .env.example .env

# Edit the .env file with your OpenAI key and settings
nano .env

# Start the bot
npm start
```

---

## 🧪 Main Technologies

- [Node.js](https://nodejs.org)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [OpenAI API (GPT & DALL·E)](https://platform.openai.com/)
- [Whisper](https://openai.com/research/whisper)
- [Puppeteer](https://pptr.dev/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## ⚠️ Disclaimer

- OpenAI charges for each API usage (messages and image generation).
- This project uses automation with WhatsApp Web, which is **not officially supported** by WhatsApp.
- Use at your own risk.

---

## 📚 Documentation

You can check the original project documentation here:  
👉 **https://askrella.github.io/whatsapp-chatgpt**

---

## 🧑‍💻 Contributing

This is an educational project, but contributions are welcome!

```bash
# Fork it
# Create your branch: git checkout -b my-feature
# Commit your changes: git commit -m 'feat: new feature'
# Push it: git push origin my-feature
```

---

## 👥 Credits

Based on the open-source project by [@askrella](https://github.com/askrella/whatsapp-chatgpt).

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 💬 Contact

- GitHub: [vaizerds](https://github.com/vaizerds)  
- LinkedIn: [Daniel Lucas C. Rodrigues](https://www.linkedin.com/in/dlcrodrigues/)  
- Email: daniel.l.c.rodrigues@gmail.com  

---
