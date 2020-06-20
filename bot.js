 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
    console.log("connected as " + client.user.tag)
})

client.login("NzIzNjY1OTUxMTY1MjUxNjk0.Xu3lCw.CtZ71gHKPYRV0nrJphx_tWnA4v0");
