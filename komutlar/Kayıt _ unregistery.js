	const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
	const bura = `<a:mavitik:734406270445944912>`
		const onay = `<a:onay:734406226267603014>`
	const hata = `<a:hata:734406331519467560>`
	const kral = `<a:tac:734406370283094017>`
    let yk = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setTitle(bura  + ' Oww Yapmamalısın !')
.setDescription(bura +'Bu Komutu Kullanman İçin <@&756034552975196250> Role Sahip Değilsin'  + kral )

   .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL}`
    )
.setColor("#f0f8ff")
  if(!message.member.roles.array().filter(r => r.id === "756034552975196250")[0]) return message.channel.send(yk)

  let Memo = message.mentions.users.first();
  if(!Memo) return message.reply(`Kullanıcı Etiketle`)


	const Memo2 = message.guild.roles.find(r => r.id === "756034546176098307") || message.guild.roles.find(r => r.id === "756034547186925588"); //Erkek/Kız Rol ID
		const Memo1 = message.guild.roles.find(r => r.id === "756034549212905522"); //Register Rol ID
		let kullanıc1 = message.guild.members.get(Memo.id);

		setTimeout(function(){
	     kullanıc1.addRole(Memo2)
	       },2000)
	      setTimeout(function(){
	     kullanıc1.removeRole(Memo1)
	   },2000)
    let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
.setDescription('** Kayıtlı Kullanıcının Kaydı İptal Edildi.**')
   .setFooter(`${message.author.tag}`,`${message.author.displayAvatarURL}`)
.setColor("#f0f8ff")
  message.channel.send(embed)

kullanıc1.setNickname(`ꏢ İsim | Yaş `)
}
exports.conf = {
  enabled: true,
guildOnly: false,
   aliases: [],
permLevel: 0
}
exports.help = {
  name: 'unregister'
}
