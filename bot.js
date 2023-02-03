//Dotenv
require("dotenv").config();

// Import jsdom
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM("");

// Import jquery
const $ = require("jquery")(dom.window);

//Import telgraf and create the bot with the token
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);

// $.getJSON( 'https://www.etnassoft.com/api/v1/get/?id=589&callback=?').then( ( results ) => {
//     console.log( 'Search Result(s): ', results );
// });

// console.log($.ajax('https://www.googleapis.com/books/v1/volumes?q=harry potter').then((res) => {
//     console.log(res.kind)
// }));

//START
bot.start((ctx) => {
  ctx.reply(`Welcome ${ctx.from.first_name}:
You can run some commands like /music or /books  ** WORKING ** for more info type /help`);
});

// HELP
bot.help((ctx) => {
  ctx.reply("Help");
});

// SETTINGS
bot.settings((ctx) => {
  ctx.reply("Settings");
});

// COMMANDS
bot.command(["mycommand", "Mycommand", "MYCOMMAND", "test"], (ctx) => {
  ctx.reply("test");
});

// my playlists
bot
  .command(["playlist", "musica", "music"], (ctx) => {
    ctx.reply("PLAYLIST", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "HARDSTYLE⛓️", callback_data: "hardstyle" },
            { text: "POV 2010⚠️", callback_data: "pov2010" },
          ],
          [{ text: "IMAGINE DRAGONS🐉", callback_data: "imagineDragons" }],
          [
            { text: "CHILL🏖️", callback_data: "chill" },
            { text: "MOTIVATION🆙", callback_data: "motivation" },
            { text: "VIAJES🚗", callback_data: "viajes" },
          ],
        ],
      },
    });
  })
  .action((res, ctx) => {
    // Hardstyle
    if (res == "hardstyle") {
      ctx.reply(
        "https://music.youtube.com/playlist?list=PLKJuYcpJwLorIdax-PeQ0Bj-9gn-qar0H"
      );
    }
    // Pov2010
    if (res == "pov2010") {
      ctx.reply(
        "https://music.youtube.com/playlist?list=PLKJuYcpJwLorC1SLQahkozf1ZptA5rlgY&feature=share"
      );
    }
    // Imagine Dragons
    if (res == "imagineDragons") {
      ctx.reply(
        "https://music.youtube.com/playlist?list=PLKJuYcpJwLooLFLFZTcOTBYF6YvFBaxzx&feature=share"
      );
    }
    // Chill
    if (res == "chill") {
      ctx.reply(
        "https://music.youtube.com/playlist?list=PLKJuYcpJwLoo-1t11LEBlpVX1yaVt6Pay&feature=share"
      );
    }
    // Motivation
    if (res == "motivation") {
      ctx.reply(
        "https://music.youtube.com/playlist?list=PLKJuYcpJwLooHHb9eWU5b5eHZIy_B7bOc&feature=share"
      );
    }
    //Viajes
    if (res == "viajes") {
      ctx.reply(
        "https://music.youtube.com/playlist?list=PLKJuYcpJwLoon7UxBe1MCqqUlh3GEPaia&feature=share"
      );
    }
  });

//TYPE
bot.hears("hear", (ctx) => {
  ctx.reply("Hears!");
});

// bot.on('text', (ctx) => {ctx.reply('Text!');});

bot.launch();

// Enable stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
