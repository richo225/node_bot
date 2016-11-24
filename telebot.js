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

// message /hello with params
bot.on("/hello", msg => {
  let id = msg.from.id;
  let [cmdName, firstName, lastName] = msg.text.split(" ");
  return bot.sendMessage(id, `Your name is: ${ firstName } ${ lastName }!`);
});

// On every photo upload
bot.on("photo", msg => {
  let id = msg.from.id;
  return bot.sendMessage(id, "Wow, thanks for the photo!");
});

bot.connect();
