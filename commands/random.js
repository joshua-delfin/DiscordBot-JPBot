module.exports = {
    name: 'random',
    description: "This command generates a random number", 
    execute(message, args){
        let x = Math.floor(Math.random() * 100);
        let string = 'Random Number: ' + x.toString();
        message.channel.send(string);
    }
}