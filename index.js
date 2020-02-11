const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc2NjkwMDUzNDU5NjA3NTY3.XkJXpQ.WV_TSwUD1Ez1j64Ccpar1QKnmbo';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "Hello Victor!"){
        msg.channel.sendMessage("Howdy, partner!")
    }
    if(msg.content === "Hello Victor"){
        msg.channel.sendMessage("Howdy, partner!")
    }
    if(msg.content === "Hello Victor."){
        msg.channel.sendMessage("Howdy, partner!")
    }
    if(msg.content === "hello Victor!"){
        msg.channel.sendMessage("Howdy, partner!")
    }
    if(msg.content === "hello Victor."){
        msg.channel.sendMessage("Howdy, partner!")
    }
    if(msg.content === "hello Victor"){
        msg.channel.sendMessage("Howdy, partner!")
    }
    if(msg.content === "Fuck me, Victor!"){
        msg.channel.sendMessage("Save a horse, ride a Cowboy!")
    }
})

bot.login(token);