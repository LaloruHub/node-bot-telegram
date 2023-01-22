require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

//START
bot.start((ctx) => {
    ctx.reply(`Welcome ${ctx.from.first_name}`);
});

// HELP
bot.help((ctx) => {
    ctx.reply('Help');
});

// SETTINGS
bot.settings((ctx) => {
    ctx.reply('Settings');
});

// COMMANDS
bot.command(['mycommand', 'Mycommand', 'MYCOMMAND', 'test'], (ctx) => {
    ctx.reply('test');
})

//TYPE
bot.hears('hear', (ctx) => {
    ctx.reply('Hears!');
});

// bot.on('text', (ctx) => {ctx.reply('Text!');});

bot.launch();


// Enable stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));