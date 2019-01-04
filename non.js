const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("دوز دوز,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("529732648533491722");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**# WeLCoMe To , Magic ' Server :1_: **`), 4000)        
}
});
client.login(process.env.TOKEN);