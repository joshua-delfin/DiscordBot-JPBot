const Discord = require('discord.js');

const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



//Setting up Command Prefix
const prefix = '!'


client.once('ready', () => {
    console.log("JPBot has come online!");
});

//Commands
client.on('messageCreate', message =>{

    //First check if it starts with prefix, and is not the bot's message
    if(!message.content.startsWith(prefix) || message.author.bot) return; 

    //Slicing the prefix off the message
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Test command
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    //Random Number Generator
    if(command === 'random'){
        client.commands.get('random').execute(message, args);
    }
    //Testing if I have to turn off the bot to save info (DOES NOT: AKA must turn off bot first and relaunch to use saved code)
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }

    //Send JP Image
    if(command === 'cursed'){
        client.commands.get('cursed').execute(message, args);
    }

    //Indecisive help
    if(command === 'decide'){
        client.commands.get('decide').execute(message, args);
    }

    //Quote of the day (Via brainyquote.com)
    if(command === 'dailyquote' || command === 'dq'){
        client.commands.get('dailyQuote').execute(message, args);
    }
});

//KEEP THIS AS THE LAST LINE OF THE FILE
client.login('OTk2OTM2OTQ3MjI4NDc5NTk4.GZeYOv.Wgboy615ltyat-5krD8pGoQf9bcBqBcglnweHc');