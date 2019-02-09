const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("دوز دوز,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("543453906982928385");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**# WeLCoMe To , Magic ' Server :rose: ${member}  **`), 4000)        
}
});
client.login(process.env.TOKEN);
 
