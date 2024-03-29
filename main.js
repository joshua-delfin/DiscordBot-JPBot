const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const mongoose = require('mongoose');

const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

require('dotenv').config();

client.commands = new Discord.Collection();


for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//Setting up Command Prefix 
const prefix = '!'

client.on('ready', async () => {
    console.log("JPBot has come online!")
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

//CONNECTING MONGODB
mongoose.connect(process.env.MONGODB_SRV, {
    /*useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false*/
}).then(()=>{
    console.log('Connected to the database')
}).catch((err)=>{
    console.log(err);
});

//KEEP THIS AS THE LAST LINE OF THE FILE
client.login(process.env.BOT_TOKEN);