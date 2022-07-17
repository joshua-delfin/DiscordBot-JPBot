module.exports = {
    name: 'help',
    description: "This is a help page!", 
    execute(message, args){
        message.channel.send("Current List of Commands: \n\n!help :: (You're here!) List of bot commands! \n!ping ::  Test command for bot to return text \n!random :: Generates a number from 0-100\n!cursed :: some cursed JP!\n");
    }
}