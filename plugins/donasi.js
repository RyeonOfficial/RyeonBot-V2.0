let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 DONASI 𝐁𝐎𝐓 』––––––❏*

⏣ ᴛᴇʟᴋᴏᴍsᴇʟ: [ 0823 5110 8031 ]
⏣ xʟ : [ 08878 4517 7978 ]

⫹⫺ ᴅᴏɴᴀsɪ • ɴᴏɴ ᴘᴜʟsᴀ ⫹⫺
⏣ ᴅᴀɴᴀ: [ 0823 5110 8031 ] 
⏣ ᴏᴠᴏ: [ 0823 5110 8031 ]
⏣ ɢᴏᴘᴀʏ: [ 0852 4575 9983 ]
⏣ sᴀᴡᴇʀɪᴀ: [ https://saweria.co/RyeonOfficial ]

𝚃𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑 𝙱𝚊𝚐𝚒 𝚈𝚐 𝙱𝚎𝚛𝚍𝚘𝚗𝚊𝚜𝚒 😁

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
         ❨ ${namebot} ❩

${botdate}
`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/3026ef0c942c6b495fec8.jpg', null, caption, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(donasi|dns)$/i;

handler.register = false
export default handler