let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ ABOUT OWNER ]───────*
*💌 Name* : Potato
*✉️ Name RL* : Ahmed
*♂️ Gender* : male - male
*🕋 Religion* : Islam
*⏰ Birthday* : 23 April 2005
*🎨 Age* : 17
*🧮 Class* : 6th preparatory
*🧩 Hobby* : Gaming, Chatting, script bot
*💬 Nature* : Idiot, Not friendly
*🗺️ live* : Basrah,Iraq
*───────[ SOCIAL MEDIA ]───────*
*📷 instagram* : @lhjj_56
*F.  Facebook* : AĦMED ALHUJAJ
*D. Discord* : I_A7med_XD#3168

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
