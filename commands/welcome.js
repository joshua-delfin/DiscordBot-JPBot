const mongo = require('./mongo');
const command = require('./command');
const welcomeSchema = require('schemas\welcome-schema.js');

module.exports = (client) => {
    //!setwelcome <message>

    command(client, 'setwelcome', async (message) => {
        const { member, channel, content, guild } = message

        if(!member.hasPermissions('ADMINISTRATOR')){
            channel.send('You do not have permission to run this command.');
            return;
        }
        await mongo().then(async (mongoose) =>{
        try{
            //Try something
            await new welcomeSchema({
                _id: guild.id,
                channelId: channel.id,
                text: content,
            }).save();
            console.log('Connected to mongo!');
        }finally{
            //Will always run
            mongoose.connection.close();
        }
    })

    })
}