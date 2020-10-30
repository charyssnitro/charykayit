
const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async ( bot, message, args) => {
  const bura = `<a:mavitik:734406270445944912>`
	     const onay = `<a:onay:734406226267603014>`
	   const hata = `<a:hata:734406331519467560>`
	   const kral = `<a:tac2:734406264439963669>`
    if(message.author.id !== ayarlar.sahip)  return message.channel.send(bura+ " **Geliştiricim Değilsin Bu Komutu kullanamazsın. **" + hata)

    message.channel.sendMessage(bura + ' ``Başarılı! Bot yeniden başlatılıyor...`` ' + onay)
      message.delete(60).then(msg => {

    console.log(`Bot yeniden başlatılıyor...`);

    process.exit(0);
  })


}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'orascoder',
  usage: 'reboot'
};
