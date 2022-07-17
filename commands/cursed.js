const fs = require("fs");

const cursedDir = 'Images'

module.exports = {
    name: 'cursed',
    description: "Sending Cursed JP Image", 
    execute(message, args){

        const img = fs.readdirSync(cursedDir);
        const chosenFile = img[Math.floor(Math.random() * img.length)]
        console.log(chosenFile);
        message.channel.send("Behold A Cursed JP: " + chosenFile.slice(0, -4));
        message.channel.send({
            files: [{attachment: 'Images/' + chosenFile}]
        });
    }
}