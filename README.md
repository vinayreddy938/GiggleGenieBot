🎉 GiggleGenieBot

A fun, interactive Telegram bot that delivers jokes, humor, quotes, cat facts & more — built with Node.js.
👉 Telegram Bot Link: https://t.me/GiggleGenieBot

📌 Overview

GiggleGenieBot is a humor-powered Telegram bot designed to make your day brighter with random jokes, programming humor, dark jokes, cat facts, roasts, and inspirational quotes.

The bot uses long polling, so it works locally or on any free hosting service (Railway, Render, Replit) without needing webhooks or public URLs.

✨ Features
😂 Jokes & Humor

/joke — Random clean joke

/darkjoke — Dark humor joke

/programmingjoke — Tech/developer jokes

🐾 Fun Facts

/catfact — Random cat fact

🔥 Fun Roasts

/insult — Lighthearted, funny roast

💡 Inspiration

/quote — Random motivational quote

🧭 Bot Utility

/start — Welcome message

/help — List of all commands

🧠 How It Works

GiggleGenieBot uses Telegram Long Polling, which means:

1. User sends a command (/joke) to Telegram.
2. Telegram stores this update on its servers.
3. The bot continuously asks Telegram:
      “Do I have any new messages?”
4. Telegram responds with the update.
5. The bot reads the command & calls relevant APIs.
6. Bot sends a formatted reply back to the user.
7. Loop continues forever.


✔ No need for webhook
✔ No domain or SSL required
✔ Works locally or on cloud
✔ Simple + reliable

🛠️ Tech Stack

Node.js

node-telegram-bot-api — Telegram API wrapper

axios — Fetching jokes/quotes/facts from public APIs

dotenv — Loads environment variables from .env

Joke and fact APIs:

Official Joke API

JokeAPI.dev

CatFact API

EvilInsult API

Quotable API

📂 Project Structure
GiggleGenieBot/
│
├── index.js          # Main bot logic
├── package.json      
├── .env              # Stores TELEGRAM_TOKEN (ignored by git)
├── .gitignore        
└── README.md         # Documentation

⚙️ Setup & Installation
1️⃣ Clone the Repo
git clone https://github.com/your-username/GiggleGenieBot.git
cd GiggleGenieBot

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
TELEGRAM_TOKEN=your_telegram_bot_token_here

4️⃣ Run the Bot
node index.js


Open Telegram → find @GiggleGenieBot → send /start.

☁️ Deployment (24/7 Free Hosting)

Because the bot uses long polling, you can deploy it easily on:

✅ Railway.app (recommended)

Free

24/7 uptime

Easiest deployment

Other options:

Render

Replit

VPS (Ubuntu)

Railway Steps:

Push your project to GitHub

Create a Railway project

Add environment variable:

TELEGRAM_TOKEN = your_token


Set start command:

node index.js


Deploy — done! 🎉

🤝 Contributing

Contributions are welcome!
Feel free to submit issues, suggestions, or pull requests.

📜 License

This project is open-source and available under the MIT License.

⭐ Show Support

If you liked this bot, give the repo a ⭐ on GitHub — it helps a lot!

If you want, I can also create:

🔥 A badge section (npm, license, version)
🔥 Workflow diagrams
🔥 A bot logo
🔥 A “Deploy to Railway” button for your README

Just tell me — I’ll generate it!

You said:
but read me suppors markdwon text
ChatGPT said:

Yes — and the README I gave you IS already 100% Markdown.
GitHub supports headings (#), lists, code blocks, emojis, links, tables — all Markdown.

But if you want a strict, clean Markdown-only README (no fancy formatting), here is the final pure-Markdown README.md for your GiggleGenieBot.

Just copy → paste → save as README.md.
This is fully GitHub-compatible.

GiggleGenieBot

GiggleGenieBot is a fun Telegram bot that delivers jokes, programming humor, dark jokes, cat facts, insults, and motivational quotes using Node.js.

Telegram Bot Link: https://t.me/GiggleGenieBot

Features
Jokes

/joke – Get a clean random joke

/darkjoke – Dark humor joke

/programmingjoke – Developer joke

Fun

/catfact – Random cat fact

/insult – Funny, light-hearted roast

Inspiration

/quote – Random motivational quote

Utility

/start – Welcome message

/help – List of all commands

How It Works (Long Polling Workflow)

User sends a command (example: /joke).

Telegram stores the message on its servers.

Bot continuously sends requests to Telegram API using long polling:

GET https://api.telegram.org/bot<token>/getUpdates


Telegram responds when there is a new message.

Bot checks which command the user sent.

Bot calls the required public API (jokes, quotes, facts, insults).

Bot formats and sends the reply back to the user.

This cycle repeats continuously.

Tech Stack

Node.js

node-telegram-bot-api

axios

dotenv

Public APIs:

Official Joke API

JokeAPI.dev

CatFact API

Quotable API

EvilInsult API

Project Structure
GiggleGenieBot/
│
├── index.js          # Main bot logic
├── package.json      
├── .env              # Stores TELEGRAM_TOKEN (not committed)
├── .gitignore        
└── README.md

Installation
1. Clone the repository
git clone https://github.com/vinayreddy938/GiggleGenieBot
cd GiggleGenieBot

2. Install dependencies
npm install

3. Create a .env file
TELEGRAM_TOKEN=your_telegram_bot_token_here

4. Run the bot
node index.js


Open Telegram and send /start to your bot.

Deployment (Free Options)

Because long polling does not require HTTPS or webhooks, you can deploy anywhere:

Recommended: Railway.app

Steps:

Push your project to GitHub

Create a new Railway project

Add environment variable:

TELEGRAM_TOKEN=your_token


Set start command:

node index.js