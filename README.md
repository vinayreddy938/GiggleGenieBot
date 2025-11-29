# 🎉 GiggleGenieBot

A fun, interactive Telegram bot that delivers jokes, humor, quotes, cat facts & more — built with **Node.js**.

👉 **Telegram Bot Link:** https://t.me/GiggleGenieBot

---

## 📌 Overview

**GiggleGenieBot** is a humor-powered Telegram bot designed to brighten your day with:

- 😂 Random jokes  
- 💻 Programming humor  
- 😈 Dark jokes  
- 🐱 Cat facts  
- 🔥 Funny roasts  
- 💬 Inspirational quotes  

The bot uses **Telegram Long Polling**, so it works locally or on any free hosting service (Railway, Render, Replit) **without webhooks or public URLs**.

---

## ✨ Features

### 😂 Jokes & Humor
- `/joke` — Random clean joke  
- `/darkjoke` — Dark humor joke  
- `/programmingjoke` — Developer jokes  

### 🐾 Fun Facts
- `/catfact` — Random cat fact  

### 🔥 Fun Roasts
- `/insult` — Lighthearted, funny roast  

### 💡 Inspiration
- `/quote` — Random motivational quote  

### 🧭 Utility
- `/start` — Welcome message  
- `/help` — List of all commands  

---

## 🧠 How It Works

GiggleGenieBot uses **Telegram Long Polling**:

```
1. User sends a command (/joke).
2. Telegram stores the message on its servers.
3. Bot continuously sends:
      GET https://api.telegram.org/bot<token>/getUpdates
4. Telegram responds with new messages (if any).
5. Bot checks which command was sent.
6. Bot calls required public API (joke, quote, fact…)
7. Bot formats and sends the reply back to user.
8. Repeat forever.
```

✔ No webhook required  
✔ No domain or SSL required  
✔ Works locally and in cloud  
✔ Simple & reliable  

---

## 🛠️ Tech Stack

- **Node.js**
- **node-telegram-bot-api**
- **axios**
- **dotenv**

### External APIs Used
- Official Joke API  
- JokeAPI.dev  
- CatFact API  
- EvilInsult API  
- Quotable API  

---

## 📂 Project Structure

```
GiggleGenieBot/
│
├── index.js            # Main bot code
├── package.json
├── .env                # Contains TELEGRAM_TOKEN (ignored by git)
├── .gitignore
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vinayreddy938/GiggleGenieBot.git
cd GiggleGenieBot
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```
TELEGRAM_TOKEN=your_telegram_bot_token_here
```

### 4️⃣ Run the Bot

```bash
node index.js
```

Open Telegram → search **@GiggleGenieBot** → send `/start`.

---

## ☁️ Deployment (Free Hosting – 24/7)

Because long polling doesn’t need webhooks, you can deploy anywhere.

### ✅ **Railway (Recommended)**

Free  
Easy  
24/7 uptime  

### Steps:

1. Push your project to GitHub  
2. Create a **Railway project**  
3. Add Environment Variable:

```
TELEGRAM_TOKEN=your_token
```

4. Set start command:

```
node index.js
```

5. Deploy — Done 🎉

### Other Hosting Options
- Render  
- Replit  
- VPS (Ubuntu)  

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to submit Issues, PRs, or suggestions.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you liked this bot, please ⭐ the GitHub repo — it helps a lot!
