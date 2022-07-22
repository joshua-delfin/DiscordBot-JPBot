module.exports = {
    name: 'decide',
    description: "This is a function for indecisive people", 

    
    execute(message, args){
        
        let x = Math.floor(Math.random() * args.length);
        console.log(x);
        let decision = args[x];
        message.channel.send("JP decided that we're going with " + decision + " and that is what you will choose!");
    }
}