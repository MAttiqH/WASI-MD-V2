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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdSMENrT1JNcFpVL0VZcy9qK29PTnhFK2RRT2RjYzlxMzV0LzFIa00yVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlAxUXo5N0Q5ZVd5Tm0xK1UvN0J0OXc0cDYybEpZNkhQZVAra1lJOFBHQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTnlSa09aUXRjcWlSb3QzaFhlSWI1eVlXRWlOMHRYODF2UmR2aHJ3RGw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzUGpDdjJtVUtTRnF5dTczcXhHTEprNlg5cTZLY1dETjQ0U2ZyOWpxYjJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MYTdmUUxWTnNZTW1XbFQ4Nk9FMUFjNTlHRjRBK2hCd2syY1pZT09OWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN2MXk4c1J0ZWEyMVhKNUFKQmZ4S2puZkk5WGJVWS8rZHB3RXNHdkFXMWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExNelhrcjUvYytqcHowMEsyWWM2d2hkUWo1WmxtbXFMeVBTRjZRQjdrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnRGbUg1cGxzczczNGNKcTJWb1hnNlg1K0FpeUJJRTk5aEQwM01LNTNtMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ4dXhONlRyYTA5YlBPNExoZ3NWZ2svSy9rdUhCZWN5VW0zMVF3Nk95eEswVGpKQnF6WHRLVlVGbTdYR1d6Y1FIQjc5VGVUR2hVM1V4L2o1dzI0WWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IlVNWlE3RTF1a0dHQnRNZjZtcmJ0bWpwM3ZqLzNGcVFWZ1pLeit0VWlFQ1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZsU0luc292VEJxeTJxdHh0ZlFBN1EiLCJwaG9uZUlkIjoiZDVjNGNlOGYtODJiNS00NWNlLTgzMDYtZDMzMzJiNWY2ODcwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE3MjBnSFhxbUZTcWladXVUMk13bHA2OUdmMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJaDVyckdJNnJjS3duUC9ReDJ5MG54bm1kM289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzZCNVpTUjYiLCJtZSI6eyJpZCI6IjkyMzQyMDAwNTEzMToyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdWhhbW1hZCBBdHRpcSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0t1d1p3QkVMbjh4YlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU2JqVEsxbEVzRG5ibjI0eHpwMHdYMG8wK28xWVlEd0Z3aEFCTnBRZmNrZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRVIveHh4L25aVUJndjhETUphT1drMmt0emJKczltV0d1QXRsSW51ZUJHMFd2ZHdreklSYklKbzNpeHJjbGRMSVRaaXV3M0FlWTM4dlRvRHV6S3lmRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImpxSk04eHNrbUhhM3hwRDVIVThrczRGZTIvcWxUb1ljQi94QnFQYmlMenR5MjhWSVI4bWtaNFE2UmJlNjJjakRRcG5DaDJzWFZZUWRGY3UxVWRJTWpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDIwMDA1MTMxOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVtNDB5dFpSTEE1MjU5dU1jNmRNRjlLTlBxTldHQThCY0lRQVRhVUgzSkkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4MTEwNzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRVZkIn0="
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
