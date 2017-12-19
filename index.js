const Discord = require('discord.js');
const bot = new Discord.Client();
var first = 0;
var user_array = [];
var roll_array = [];
var num;

bot.on('message', function(message) {
    // Don't forget to log the message!
    var mes = message.content.split(" ");
    var person = message.author.username;
    if(mes == '!enter')
    {
        message.channel.send(person + ' is rolling');
        num = Math.floor((Math.random() * 100) + 1);
        user_array.push(person);
        roll_array.push(num);
    }
    if(mes == '!roll')
    {
        message.channel.send(user_array[0] + ' rolled a ' + roll_array[0]);
    }
});






bot.login('MzkyNzAzNDM3MTE4MTExNzU1.DRrFFw.3lcYYBosMwgpfOw1fmGWZsKMjOc');