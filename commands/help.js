module.exports = {
    name: 'help',
    description: "This is a help page!", 
    execute(message, args){
        //message.channel.send("Current List of Commands: \n\n!help :: (You're here!) List of bot commands! \n!ping ::  Test command for bot to return text \n!random :: Generates a number from 0-100\n!cursed :: some cursed JP!\n");
        
        //Creating an embedded help page:
        const helpEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    
        message.channel.send({ embeds: [helpEmbed]});

    }
}