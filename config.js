//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va7lbQmAojZ1iLmyL52D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va7lbQmAojZ1iLmyL52D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/65b65ca62bb0b79a07d3a.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398,923420005131";
global.owner = process.env.OWNER_NUMBER || "923192173398,923420005131";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/65b65ca62bb0b79a07d3a.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZDaFBxaXdERVNDYWVoNHRNN3NPOCtvdERycWFQQ25PVmxLa0tSenZVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2hJSEh4S2JGcm5mR05tZm9YKzlRcEZmOHp2R1FkM3hPd2c5UkRaT25qVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR2trWkFkZ1RFbU51ZXp0UFltTFgvN09QWm44TTRMbmljQmJ1YzVHb2trPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5STFNSWNnV2VSSWczSWxlSTltSGcvYncvcGJLMmZlam9kTmNiVCt5aFVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHbnRLTGxaSkxLTGhsaXZ4a0hKck9qR3FuZUE2a1NuY1JyTWhoYWJpMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhWNUlWMCtWdkpKbHptK055VDlWTFlUdFFscGZqaUVIcVBkdVU3V1Rya3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNIT1BEcmNhcWkxRHRQYmx2eERjMzUzL2huM1pKQXBnK2FvM0NYUDZuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRm5aQzRaZmYvdGZCaHBhZVQ0T05UQWlSRkVnaGpTTTZQbVZyaXhqTnlBdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEzSHlXS01jRFRydzBWRE1LNFF6SkFSc00vR0J5WDJOb1ZEUTVDanZCZ2lxQjFLSVR2OGtJSDZ1OG1WL1Q2QUVvVlRKeFRHQkxsUXdPYWVkblczRGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiIvRzFOTVdIQTFXd2xHdjJ3bDBTWW9ENStzOUhEaXVPZlBrWDByS2RDUGc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpVHdtUmNna1JuLUVieWF2WWZfMHdnIiwicGhvbmVJZCI6ImMwZGVjY2NiLWUyMTktNGI5Yi05MmQ2LWVlNmFkZDdiNDkyYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0V09jdEhEMVAxdUdXQUVWZFpoZGZVL3NqcUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmxQTThjUFBld1dZQlhUNDFlOUtYNnJDMllZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlMzUFhGUjdMIiwibWUiOnsiaWQiOiI5MjM0MjAwMDUxMzE6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXVoYW1tYWQgQXR0aXEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ordXdad0JFTjZWaWJRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNialRLMWxFc0RuYm4yNHh6cDB3WDBvMCtvMVlZRHdGd2hBQk5wUWZja2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJRYlpleGl6S2puZXc2dEV5TFplSHhDVEUrTnNqOW9UOWRkdnU1ODloSmJhUXo4dHlTdTdQcFlTb0ZONS95bEJnWC9jTUlTZ2pINUFOVnJQNG42T0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRWHF2cklrVkFrNnM4TFduNGtTd1hJTWpnU1JJZVZkRWVCQlZucVFoc2M2aURFS21YWld6MldoOVN0YjRvQXF4SGVLSUZvSWZaalIwKytybHFmL01qUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQyMDAwNTEzMToxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVbTQweXRaUkxBNTI1OXVNYzZkTUY5S05QcU5XR0E4QmNJUUFUYVVIM0pJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODE0ODkyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "TLP",
  author: process.env.PACK_AUTHER || "A",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TLP",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923420005131",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
