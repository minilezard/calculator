const Discord = require("discord.js");

var bot = new  Discord.Client();

bot.on("ready",function() {
    bot.user.setGame("calcul !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NTY4ODg3MTUyNDY5OTk5NjU4.XLprfw.BclLOOt0MqYOOZmlye2QkyZ9u1I");
