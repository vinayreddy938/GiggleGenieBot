const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const axios = require("axios");

const TOKEN = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });
bot.setMyCommands([
    { command: "start", description: "Start the bot" },
    { command: "help", description: "Show help menu" },
    { command: "joke", description: "Get a random joke" },
    { command: "darkjoke", description: "Get a dark humor joke" },
    { command: "programmingjoke", description: "Get a programming joke" },
    { command: "catfact", description: "Get a cat fact" },
    { command: "quote", description: "Get an inspirational quote" },
    { command: "insult", description: "Get a funny roast" }
]);
bot.on('message', (msg) => {
    const text = msg.text;

   
    if (text.startsWith('/')) return;

   
    bot.sendMessage(
        msg.chat.id,
        "😅 I didn’t understand that!\nTry /help to see all my commands."
    );
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        `😄 Welcome to Joke-Bot!

Type /help to see everything I can do.`
    );
});


bot.onText(/\/help/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        `🤖 *Available Commands:*

/joke - Get a random joke  
/darkjoke - Get a dark humor joke  
/programmingjoke - Get a developer joke  
/catfact - Get a random cat fact  
/insult - Funny roast  
/quote - Inspirational quote  

Enjoy! 😆`,
        { parse_mode: "Markdown" }
    );
});


bot.onText(/\/joke/, async (msg) => {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    const setup = response.data.setup;
    const punchLine = response.data.punchline;

    bot.sendMessage(msg.chat.id, `😂 ${setup}\n\n🤣 ${punchLine}`);
});


bot.onText(/\/darkjoke/, async (msg) => {
    try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Dark");
        let joke;

        if (response.data.type === "twopart") {
            joke = `${response.data.setup}\n\n${response.data.delivery}`;
        } else {
            joke = response.data.joke;
        }

        bot.sendMessage(msg.chat.id, `😈 Dark Joke:\n${joke}`);
    } catch (err) {
        bot.sendMessage(msg.chat.id, "❌ Error fetching dark joke.");
    }
});

bot.onText(/\/programmingjoke/, async (msg) => {
    try {
        const res = await axios.get("https://v2.jokeapi.dev/joke/Programming");
        let joke;

        if (res.data.type === "twopart") {
            joke = `${res.data.setup}\n\n${res.data.delivery}`;
        } else {
            joke = res.data.joke;
        }

        bot.sendMessage(msg.chat.id, `💻 Programming Joke:\n${joke}`);
    } catch {
        bot.sendMessage(msg.chat.id, "❌ Couldn't fetch programming joke.");
    }
});

bot.onText(/\/catfact/, async (msg) => {
    const res = await axios.get("https://catfact.ninja/fact");
    bot.sendMessage(msg.chat.id, `🐱 Cat Fact:\n${res.data.fact}`);
});


bot.onText(/\/insult/, async (msg) => {
    const res = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json");
    bot.sendMessage(msg.chat.id, `🔥 Roast:\n${res.data.insult}`);
});

bot.onText(/\/quote/, async (msg) => {
    const res = await axios.get("https://api.quotable.io/random");
    bot.sendMessage(msg.chat.id, `📖 Quote:\n"${res.data.content}"\n— ${res.data.author}`);
});
