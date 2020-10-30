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
  const nick = args[1]
	const yas = args[2];

  let Memo = message.mentions.users.first();
  if(!Memo) return message.reply(`Kullanıcı Etiketle`)
  if(!nick) return message.reply(`İsim Gir!`)
  if(nick.length > 32) return message.reply(`İsimler 32 Karekteri Aşamaz!`)
	 if(!yas) return message.reply(`yaş Gir!`)
		const Memo2 = message.guild.roles.find(r => r.id === "756034547186925588"); //Erkek/Kız Rol ID
			const Memo1 = message.guild.roles.find(r => r.id === "756034549212905522"); //Register Rol ID
	let kullanıc1 = message.guild.members.get(Memo.id);

		setTimeout(function(){
	     kullanıc1.addRole(Memo2)
	       },2000)
	      setTimeout(function(){
	     kullanıc1.removeRole(Memo1)
	   },2000)
    let embed = new Discord.RichEmbed()
	.setDescription(kullanıc1+` **Adlı Kullanıcıya ${Memo2} Rolü Verildi. ${Memo1} Rolü Alındı. \n İsmi \`ꏢ ${nick} | ${yas} \` Olarak Güncellendi.**  `)
   .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL}`)
.setColor("#f0f8ff")
  message.channel.send(embed)
	let kanal = "756034662681280613"
			let kanal1 = message.guild.channels.get(kanal)
			kanal1.send(embed)
kullanıc1.setNickname(`ꏢ ${nick} | ${yas}`)
}
exports.conf = {
  enabled: true,
guildOnly: false,
   aliases: ['man','e'],
permLevel: 0
}
exports.help = {
  name: 'erkek'
}
