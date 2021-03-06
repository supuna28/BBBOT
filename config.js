import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['94742134288']
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'โกโ๐ต๐จ๐ฏ ๐ฃ๐ฉ๐ต ๐ซ๐ช๐ฎ๐บ๐ท๐ฉ๐ญโโก'
global.author = 'Bot'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '๐งฌ',
      limit: '๐',
      health: 'โค๏ธ',
      exp: 'โ๏ธ',
      money: '๐ต',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      trash: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      wood: '๐ชต',
      rock: '๐ชจ',
      string: '๐ธ๏ธ',
      horse: '๐',
      cat: '๐',
      dog: '๐',
      fox: '๐ฆ',
      petFood: '๐',
      iron: 'โ๏ธ',
      gold: '๐',
      emerald: '๐'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
