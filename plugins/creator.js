function handler(m) {
  this.sendContact(m.chat, [`6281227144597`, 'ozan'], m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
