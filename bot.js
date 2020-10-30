

const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");

const request = require("request");
const ms = require("ms");

const Jimp = require("jimp");
require("./util/eventLoader")(client);

client.queue = new Map();

var prefix = ayarlar.prefix;

client.on("ready", () => {
  console.log("________________A_p_p_r_o_v_a_l___________________");
  console.log(`Kullanıcı İsmi     : ${client.user.username}`);
  console.log(`Sunucular          : ${client.guilds.size}`);
  console.log(`Kullanıcılar       : ${client.users.size}`);
  console.log(`Prefix             : ${ayarlar.prefix}`);
  console.log(`Durum              : Hazır! :)`);
  console.log("________________A_p_p_r_o_v_a_l___________________");
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`Approval Alt Yapısından  ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`Approval Alt Yapısından Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(aliases => {
      client.aliases.set(aliases, props.help.name);
    });
  });
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});
client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on('ready', ()=>{
 client.channels.get("756034640904454164").join()
})
client.on("guildMemberAdd", member => {
   member.setNickname('ꏢ')
   member.addRole('756034549212905522')
 })
client.on("guildMemberAdd", member => {
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let rol = "";
  let user = client.users.get(member.id);
  require("moment-duration-format");

  const mapping = {
    " ": "   ",
    "0": "<a:sifir:734406360334204999>",
    "1": "<a:bir:734406350884438016>",
    "2": "<a:iki:734406359012999239>",
    "3": "<a:uc:734406358585311344>",
    "4": "<a:dort:734406357465301146>",
    "5": "<a:bes:734406358035857448>",
    "6": "<a:alti:734406358434316309>",
    "7": "<a:yedi:734406356253147147>",
    "8": "<a:sekiz:734406361508479039>",
    "9": "<a:dokuz:734406359000285185>"
  };
  const gifler = [
    "https://cdn.discordapp.com/attachments/705086786849865840/714555960206688386/giphy.gif",
    "https://media.discordapp.net/attachments/707211868481257492/711552187800748152/1ac9ec1e6de868afb729186c751b8d3d.gif",
    "https://images-ext-1.discordapp.net/external/uyd-NzWCas-mX5Yp4hM9YeT16lTXx6gXSUhvTtSOhXQ/https/cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%252FPtema2.gif"
  ];
  const bura = `<a:mavitik:734406270445944912>`
   const onay = `<a:onay:734406226267603014>`
 const hata = `<a:hata:734406331519467560>`
 const kral = `<a:tac2:734406264439963669>`
const sonsuz = `<a:sonsuz:744495715102752778>`
const nitro = `<a:nitro:744495718701727847>`
const guzel = `<a:guzel:744495724720554035>`
const tik = `<a:ti:744495720739897415>`
const tik2 = `<a:tik2:744498324966736086>`
const hype = `<a:hype:744499042935111702>`
const tamir = `<a:tamir:744499700278886470>`
const ay = `<a:ay:734406232072388608>`

  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  const gif = Math.floor(Math.random() * (gifler.length - 0));

  var kontrol;
  if (gün < 7) kontrol = '``Güvenilir Değil!``'+ hata;

  if (gün > 7) kontrol = '``Güvenilir Gözüküyor`` ' + onay;
  let sunucu = "752561947701936128"; //sunucu id
  let afa = client.guilds.get(sunucu).memberCount;
  let toplam = `${afa}`
    .split("")
    .map(c => mapping[c] || c)
    .join(" ");
  let yetkili = "<@&728940693858287737>"; // KAYIT YETKİLİSİ ID
  let kanal = "756034617672335432"; //KANAL ID
  if (!kanal) return;

  moment.locale("tr");

  client.channels.get(kanal).send(
       kral +  " ** Dark'Sky Kayıt Alanı  ** " + kral +
    "\n"+
           guzel + " **・ Sunucumuza Hoş Geldin!** " + member + " " + tik
          + "\n\n "
          + sonsuz + " **・Seninle Beraber " + toplam +" Kişiyiz** " + tik +
          "\n\n" +
          hype + "**・Kayıt Olmak İçin İsim Ve Yaşını Söyle!** " +tik+
          "\n\n" +
          ay +
          "**・<@&756034552975196250> Rolüne sahip yetkililer seninle ilgilenecek.** " + tik +
          "\n" +
        "\n"+
        tamir + "**・Oluşturma Tarihi :** " + moment(member.user.createdAt).format("``DD MMMM YYYY, dddd  hh:mm:ss``") +  " " + sonsuz + "\n\n" +
      tamir + "**・Hesap Durumu : **" + kontrol
      )
});
client.on("message", async message => {
      if (message.content === "aprovalkatıl") {
      message.delete()
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.login(ayarlar.token);
