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
    if(msg.content === "How are you, Victor?"){
        msg.channel.sendMessage("I'm feelin' fit as a fiddle, thank you!")
    }
    if(msg.content === "how are you, Victor?"){
        msg.channel.sendMessage("I'm feelin' fit as a fiddle, thank you!")
    }
    if(msg.content === "What are you, Victor?"){
        msg.channel.sendMessage("I'm a RobCo Securitron, and a pal of yours.")
    }
    if(msg.content === "I love you, Victor!"){
        msg.channel.sendMessage("Well now, you're so sweet you're gonna give me the honeyglows. I love ya too.")
    }
})

bot.login(process.env.token);
