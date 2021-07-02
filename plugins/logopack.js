const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'logopack', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n\n*අනිවර්යයෙන් බැලිය යුතුය මෙය..*\nඔබ විදානය ගැසීමට පෙර * ! * type කර විදානය ගැසිය යුතුය...\n\n⚙️විධානය:**!qrcreate** \n විස්තර: \n\n⚙️විධානය:**!naruto** \n \n විස්තර: \n\n⚙️විධානය:**!avenger** \n \n විස්තර: \n\n⚙️විධානය:**!bneon** \n \n විස්තර: \n\n⚙️විධානය:**!matrix** \n \n විස්තර: \n\n⚙️විධානය:**!bwall** \n \n විස්තර: \n\n⚙️විධානය:**!dwater** \n \n විස්තර: \n\n⚙️විධානය:**!wolflogo** \n \n විස්තර: \n\n⚙️විධානය:**!harrypotter** \n \n විස්තර: \n\n⚙️විධානය:**!flower** \n \n විස්තර: \n\n⚙️විධානය:**!crossfire** \n \n විස්තර: \n\n⚙️විධානය:**!silktext** \n \n විස්තර: \n\n⚙️විධානය:**!firetext** \n \n විස්තර: \n\n⚙️විධානය:**!lovetext** \n \n විස්තර: \n\n⚙️විධානය:**!smokelogo** \n \n විස්තර: \n\n⚙️විධානය:**!pubglogo** \n \n විස්තර: \n\n⚙️විධානය:**!skylogo** \n \n විස්තර: \n\n⚙️විධානය:**!lionlogo** \n \n විස්තර: \n\n⚙️විධානය:**!cslogo** \n \n විස්තර: \n\n⚙️විධානය:**!crismeslogo** \n \n විස්තර: \n\n⚙️විධානය:**!fflogo** \n \n විස්තර: \n\n⚙️විධානය:**!3dboxlogo** \n \n විස්තර: \n\n⚙️විධානය:**!blackpink** \n \n විස්තර: \n\n⚙️විධානය:*leavest** \n \n විස්තර: \n\n \n Create by Punsith');
        
    }));

    Asena.addCommand({pattern: 'qrcreate ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/qrencode?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'avenger ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'bneon	 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'bwall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'dwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'wolflogo	 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'flower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'crossfire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'silktext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'firetext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'lovetext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'smokelogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'pubglogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'skylogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'lionlogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'cslogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'crismeslogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'fflogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: '3dboxlogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));

    Asena.addCommand({pattern: 'leavest ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'logopack', fromMe: false, desc: EFFECT_DESC}, (async (message, match) => {    

      await message.sendMessage('💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n⚙️විධානය:***!naruto** \n \n විස්තර: \n\n⚙️විධානය:***!avenger** \n \n විස්තර: \n\n⚙️විධානය:***!bneon** \n \n විස්තර: \n\n⚙️විධානය:***!matrix** \n \n විස්තර: \n\n⚙️විධානය:***!bwall** \n \n විස්තර: \n\n⚙️විධානය:***!dwater** \n \n විස්තර: \n\n⚙️විධානය:***!wolflogo** \n \n විස්තර: \n\n⚙️විධානය:***!harrypotter** \n \n විස්තර: \n\n⚙️විධානය:***!flower** \n \n විස්තර: \n\n⚙️විධානය:***!crossfire** \n \n විස්තර: \n\n⚙️විධානය:***!silktext** \n \n විස්තර: \n\n⚙️විධානය:***!firetext** \n \n විස්තර: \n\n⚙️විධානය:***!lovetext** \n \n විස්තර: \n\n⚙️විධානය:***!smokelogo** \n \n විස්තර: \n\n⚙️විධානය:***!pubglogo** \n \n විස්තර: \n\n⚙️විධානය:***!skylogo** \n \n විස්තර: \n\n⚙️විධානය:***!lionlogo** \n \n විස්තර: \n\n⚙️විධානය:***!cslogo** \n \n විස්තර: \n\n⚙️විධානය:***!crismeslogo** \n \n විස්තර: \n\n⚙️විධානය:***!fflogo** \n \n විස්තර: \n\n⚙️විධානය:***!3dboxlogo** \n \n විස්තර: \n\n⚙️විධානය:***!blackpink** \n \n විස්තර: \n\n⚙️විධානය:***!leavest** \n \n විස්තර: \n\n \n Create by Punsith');
  }));

  Asena.addCommand({pattern: 'qrcreate ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

var topText, bottomText;
  if (match[1].includes('/')) {
      var split = match[1].split('/');
      bottomText = split[1];
      topText = split[0];
}

  var webimage = await axios.get(`https://api.zeks.xyz/api/qrencode?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

 await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'avenger ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

var topText, bottomText;
  if (match[1].includes('/')) {
      var split = match[1].split('/');
      bottomText = split[1];
      topText = split[0];
}

  var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'bneon	 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'bwall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'dwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'wolflogo	 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'flower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

var topText, bottomText;
  if (match[1].includes('/')) {
      var split = match[1].split('/');
      bottomText = split[1];
      topText = split[0];
}

  var webimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'crossfire ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'silktext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'firetext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'lovetext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

 await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'smokelogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

 await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'pubglogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

var topText, bottomText;
  if (match[1].includes('/')) {
      var split = match[1].split('/');
      bottomText = split[1];
      topText = split[0];
}

  var webimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

 await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'skylogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

 await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'lionlogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

 var topText, bottomText;
  if (match[1].includes('/')) {
      var split = match[1].split('/');
      bottomText = split[1];
      topText = split[0];
}
  var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'cslogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'crismeslogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'fflogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: '3dboxlogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

 await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));

  Asena.addCommand({pattern: 'leavest ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=7h7ZbRIwJTAXtuaBAbIBltOMYQ9&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '·.★·.·´¯`·.·★ 🅶🅾🅳🆉🅸🅻🅻🅰 🅱🅾🆃 🅱🆈 🅿🆄🅽🆂🅸🆃🅷 ★·.·´¯`·.·★.·'})

  }));
}
