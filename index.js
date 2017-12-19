const Discord = require('discord.js');
const bot = new Discord.Client();
var count = 0;
var user_array = [];
var roll_array = [];
var num;
var cheatflag = 0;

bot.on('message', function(message) {
    // Don't forget to log the message!
    var mes = message.content.split(" ");
    if(mes == '!enter')
    {
        cheatflag = 0;
        var person = message.author.username;
        for (var i = 0; i < user_array.length; i++){
            if(person == user_array[i]) {
                message.reply('You already entered!');
                cheatflag = 1;
                break;
                }
        }
        if (cheatflag == 0)
        {
            message.reply('You have been entered!');
            count++;
            num = Math.floor((Math.random() * 1000) + 1);
            user_array.push(person);
            roll_array.push(num);
        }
    }
    if(mes == '!roll')
    {
        if (count == 0)
        {
            message.channel.send('Nobody has entered yet!');
        }
        else {
        message.channel.send('3');
        message.channel.send('2');
        message.channel.send('1');
        for (var i = 0; i < roll_array.length; i++) {
            message.channel.send(user_array[i] + ' rolled ' + roll_array[i]);
        }
        var max = 0;
        for (var i = 0; i < roll_array.length; i++){
            if(roll_array[i] > roll_array[max]) {
                    max = i;
                }
        }
        message.channel.send('------------------------------');
        message.channel.send(user_array[max] + ' won with ' + roll_array[max] + '!');
        user_array.splice(0,user_array.length);
        roll_array.splice(0,roll_array.length);
        count = 0;
    }
}
    if (mes == '!clear')
    {
        message.channel.send('All entries have been cleared.');
        user_array.splice(0,user_array.length);
        roll_array.splice(0,roll_array.length);
        count = 0;
    }
});






bot.login('MzkyNzAzNDM3MTE4MTExNzU1.DRrFFw.3lcYYBosMwgpfOw1fmGWZsKMjOc');