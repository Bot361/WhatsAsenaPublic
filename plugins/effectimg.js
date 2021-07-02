const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST 
const EFFECT_DESC = "Set of commands to convert text into effective images."
const NEED_WORD = "*You Must Enter a Word*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'logopack2', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    

      await message.sendMessage('💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n\n*අනිවර්යයෙන් බැලිය යුතුය මෙය..*\nඔබ විදානය ගැසීමට පෙර * ! * type කර විදානය ගැසිය යුතුය...\n\n⚙️විධානය:*pubglogo* \n විස්තර: \n\n⚙️විධානය:*battleflogo* \n \n විස්තර: \n\n⚙️විධානය:*mugflower* \n \n විස්තර: \n\n⚙️විධානය:*lovemsg* \n \n විස්තර: \n\n⚙️විධානය:*shadowlogo* \n \n විස්තර: \n\n⚙️විධානය:*rainbow* \n \n විස්තර: \n\n⚙️විධානය:*glowneon* \n \n විස්තර: \n\n⚙️විධානය:*pencil* \n \n විස්තර: \n\n⚙️විධානය:*nightbeach* \n \n විස්තර: \n\n⚙️විධානය:*underwater* \n \n විස්තර: \n\n⚙️විධානය:*hpotter* \n\n \n Create by Punsith');

    }));

    Asena.addCommand({pattern: 'pubglogo ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'mugflower ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'rainbow ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'shadowlogo ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'glowneon ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'pencil ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'nightbeach ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'underwater ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/underwater/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'battleflogo ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

    }));

    Asena.addCommand({pattern: 'hpotter ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

}));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'logopack2', fromMe: false, desc: EFFECT_DESC}, (async (message, match) => {    

      await message.sendMessage('💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n\n*අනිවර්යයෙන් බැලිය යුතුය මෙය..*\nඔබ විදානය ගැසීමට පෙර * ! * type කර විදානය ගැසිය යුතුය...\n\n⚙️විධානය:*pubglogo* \n විස්තර: \n\n⚙️විධානය:*battleflogo* \n \n විස්තර: \n\n⚙️විධානය:*mugflower* \n \n විස්තර: \n\n⚙️විධානය:*lovemsg* \n \n විස්තර: \n\n⚙️විධානය:*shadowlogo* \n \n විස්තර: \n\n⚙️විධානය:*rainbow* \n \n විස්තර: \n\n⚙️විධානය:*glowneon* \n \n විස්තර: \n\n⚙️විධානය:*pencil* \n \n විස්තර: \n\n⚙️විධානය:*nightbeach* \n \n විස්තර: \n\n⚙️විධානය:*underwater* \n \n විස්තර: \n\n⚙️විධානය:*hpotter* \n\n \n Create by Punsith');

  }));

  Asena.addCommand({pattern: 'pubglogo ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

var topText, bottomText;
  if (match[1].includes('/')) {
      var split = match[1].split('/');
      bottomText = split[1];
      topText = split[0];
}

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

 await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.xteam.xyz/photooxy/wolfmetal?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'mugflower ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'lovemsg ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'rainbow ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowshine?text=${match[1]}&APIKEY=e54e1ba7d7df547a`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'shadowlogo ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'glowneon ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'pencil ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${match[1]}`, { responseType: 'arraybuffer' })

 await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'nightbeach ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'underwater ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/underwater/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'battleflogo ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

var topText, bottomText;
  if (match[1].includes('/')) {
      var split = match[1].split('/');
      bottomText = split[1];
      topText = split[0];
}

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

  }));

  Asena.addCommand({pattern: 'hpotter ?(!*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsenaPublic'})

}));

}
