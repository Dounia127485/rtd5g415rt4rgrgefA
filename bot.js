 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
    console.log("connected as " + client.user.tag)
})

client.login("التوكن");
