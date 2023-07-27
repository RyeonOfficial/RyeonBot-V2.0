// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : Ryeon
${htjava} *♂️ Gender* : Cowok
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : 8 September 2023
${htjava} *🎨 Umur* : 5
${htjava} *🧮 Kelas* : IX
${htjava} *🧩 Hobby* : Nothing
${htjava} *💬 Sifat* : Nothing
${htjava} *🗺️ Tinggal* : Indonesia
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *💌 TY:* ${syt}
•·––––––––––––––––––––––––––·•
`
await conn.sendFile(m.chat, pu, 'menu.jpg', biooo, false, m, adReply)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner)$/i

export default handler
