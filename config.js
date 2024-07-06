const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917810936026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_07_23_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDc1LFxuICAgICAgICAzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDM0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibVlWOUpUbnVWNndiSnExdStOMldTOEgwaG1QSXdVN1JDclp2dm1DVHI1Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTgzODg4OTIyNzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU5MjY1QzQzOUUxRTM5RjE0MjM5MkNDRDlCMEIzRTUxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI1MDU4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODM4ODg5MjI3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkQ0MkVENDZEMkQzNDZFNzAxRkJEMTM2RkZERDQ0RDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjUwNTkwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi0zZkFJLUszUWFhaTY3ZEZtc1ozdXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTA2NmVjY2MtOWZlNS00NTZjLWE0NjItODhkODVhNmRlMmMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDkwLFxuICAgICAgMzAsXG4gICAgICAyMjEsXG4gICAgICA1MCxcbiAgICAgIDExNCxcbiAgICAgIDMxLFxuICAgICAgMTE3LFxuICAgICAgMjA5LFxuICAgICAgMjUwLFxuICAgICAgOTksXG4gICAgICAwLFxuICAgICAgMTcwLFxuICAgICAgNjgsXG4gICAgICAxNzUsXG4gICAgICAyNDQsXG4gICAgICAxMixcbiAgICAgIDIyOSxcbiAgICAgIDE5OCxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAxMTgsXG4gICAgICA4OSxcbiAgICAgIDI0NCxcbiAgICAgIDczLFxuICAgICAgMjUsXG4gICAgICAyMDIsXG4gICAgICAxNSxcbiAgICAgIDE4NyxcbiAgICAgIDEwLFxuICAgICAgODQsXG4gICAgICA1LFxuICAgICAgMTc0LFxuICAgICAgMjMyLFxuICAgICAgMTQ4LFxuICAgICAgMjUxLFxuICAgICAgNTksXG4gICAgICAyMjgsXG4gICAgICAxOTEsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFYzMUVNQThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODM4ODg5MjI3OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzY4Mzc0MDExOTA0NTc6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XlvCdmILwnZiB8J2XsiDwnZea8J2XtvCdl7/wnZe5IPCdl6XwnZe28J2YgfCdmIIg8J+YqeKdpO+4j+KAjfCfqbnwn6SMXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDNPMGVRRUVOVGhvN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQcGdNSms0SXNpc3JzeGJ5Tkh5bU5WNEVKdWVPQ09KZHZSVzdabFdSY1ZnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlxQ2kwSk5OTHlGWGpldVhxQmVXY0x6TWlIYlpwQUNvbWlqT1Q2ZDNHb0hXeDJvM0luQzBiUGZCYjdTTnE3K2FLZmwwWm03T0ducTlHV2Q4b1dMUUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInU1aWxwb2F0VVdxdko4RkdGNExJU1FBcHpybEdmeXdEUVFjZWlpOFU3T0xrY243MzBCSGdGRVJHUzQ1aDV3U2ptRWxEaEp2eDNERDdPQzhJYjNGRGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODM4ODg5MjI3OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI1MDU4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJZb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQllvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXRIZjhxdmpaNm5sWWQ5bWszOGN6SkFpRW04ZE42czVlOUVWMWxDVmdiWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg0Nzk0MjM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
