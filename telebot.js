const dotenv = require("dotenv");
dotenv.load();

const TeleBot = require("telebot");
const bot = new TeleBot("TELEGRAM_API_KEY");

bot.connect();
