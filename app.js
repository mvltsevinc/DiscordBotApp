const Discord = require("discord.js"); 
const client = new Discord.Client();
const axios = require("axios"); // for http requests

client.login("NDk4MTI5OTI4ODE1MTE2Mjk5.DppQvg.l6MFVzuR4k6cUWmN7dns_S3-S_M"); // Bot Token

/*client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});*/


client.on("message", msg => {
  if (msg.content === "!yas") {
    msg.reply("21");
  }
});

/*client.on("message", msg => {
  axios
    .get("https://translate.yandex.net/api/v1.5/tr.json/translate", {
      params: {
        key: "trnsl.1.1.20181006T143043Z.b116670229fcd3ec.3dd4cdad67471f1d5a7b2033aefb8536f3f3163a", // yandex API key
        text: msg.content,
        lang: "tr"
      }
    })
    .then(res => {
      if (res.data.text[0] !== msg.content) { // when we send in turkish it won't be translate our message
        msg.reply(res.data.text[0]);
      }
    });
});*/


