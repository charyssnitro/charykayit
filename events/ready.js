const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const settings = require('../ayarlar.json');

var prefix = settings.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ONLİNE`);

  client.user.setStatus("online");
  var game = [

'Approval ❤️ DarkSky'

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(game.length));

        client.user.setGame(game[random]);
        }, 4000); // 4000ms = 3.5 saniye istediğiniz gibi hızını değisebilirsiniz
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT ONLİNE.`);


};
