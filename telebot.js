const dotenv = require("dotenv");
dotenv.load();

const TeleBot = require("telebot");
const bot = new TeleBot(process.env.TELEGRAM_API_KEY);

// On every text message
bot.on("text", msg => {
  let id = msg.from.id;
  let text = msg.text;
  return bot.sendMessage(id, `You said: ${ text }`);
});

bot.connect();
