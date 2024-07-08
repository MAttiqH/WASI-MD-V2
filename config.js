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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/72989e75dc918918d47e9.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923420005131";
global.owner = process.env.OWNER_NUMBER || "923420005131";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pyMG9BSm9mSDBWK2lqZUhRVnJiWk94SFVYT2NtUjNZczdLM3pzWkxrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzFCVERqdE5wa3pOWjlmUXpGKzZjZW1YcGdyYjVFdE5kZENDczR1WGdIOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRG13OGwzbkV4SGFSYlVybzd1TDlnUzlDOFkzU3NjWE1rRzMybkxvYUZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Y0VPUHZXT1FhbUtuMmE2RFBtVWdJeXBjOFdNT1l5Z0RpL1ZJWmRsMkhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFUVRBVU94ZTJLSTZRWUR4TmVGMi92NGhMSWcxdm1Pc3k4UWVBRjBhbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNQlorS3QvZWswUThRclVhdjZobU1mZHBmandsZmRkZVVTbEdTVGNaeUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hmd25lT0NUYlE1UEFMczY5OXp1RVBhMlZkU1NGVjdYeEc5SDZmMFBYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnpIekpnSkE5WFhVZzJzd3RjNjI4cWZwenhiaStLMWtaMURZV1RyVk5qST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjltVUdIeUNZUmh3M1hIRnU2T0U4bWVQV3hOSTVkbzBPL2k1djZMemlFaE4xYmlGQmgxcW8zbm1TNlhRWHpvMlBaT3VNbUlsd1RUOGYxY01WbGhyUGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJVQnlZbUUzbk5hTXMxWXRQdjYzNEJpVEtWamJpbk5PTFB0SEgyQ3E1V0FjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2WGFUQXN0bFJxaWNRRWNOYkNEdXBBIiwicGhvbmVJZCI6IjZiZGEwYjY4LWIzODEtNDM4OC05NmMyLTQ1NjJiMWU4NDRmMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1aXpMTVJlN2oyd0p3OEhlM1ZzVWIwaXpyRlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic00yWWpzYU1OM0FCYWo1blArNmRpWWtCL2NNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY5UVcyWlRLIiwibWUiOnsiaWQiOiI5MjM0MjAwMDUxMzE6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXVoYW1tYWQgQXR0aXEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDdXdad0JFSUx3c0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNialRLMWxFc0RuYm4yNHh6cDB3WDBvMCtvMVlZRHdGd2hBQk5wUWZja2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFHZDhRZlBSSVNkdFEyOWU3V2JyeENuK2FOWFlJY2dHOTFHWGdMQVE5b0lxRGU0SzBRcHdPMkVLaGJwQUJpaDk0eFhyYkRmczBwRjJOZlNUZFNjbkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGQTZ1VXNFenREODU3VVpHMlBuVlhsNGpVbHVhdmJ5ZzYvaElRNFlGbklBS3Z1UVJyZ2I3Z2JFZk82dkNGTy9PbjZkdko3dTcrMzJkRHRsazRONlVnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQyMDAwNTEzMToyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVbTQweXRaUkxBNTI1OXVNYzZkTUY5S05QcU5XR0E4QmNJUUFUYVVIM0pJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDY1NDIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVWZCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "",
  author: process.env.PACK_AUTHER || "A",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TLp WorkingG",
  ownername: process.env.OWNER_NAME || "Attiq-Ur-Rehman",
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
