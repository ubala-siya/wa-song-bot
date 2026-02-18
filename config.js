/*
Base Whatsapp Bot
By DanuZz
 
Site: https://www.movanest.xyz
*/

//~~~~~Setting Global~~~~~//

global.session_id = "DanuXxxii=6E0BiRyJ#VCKZ2pf7UPGaZw5kPjKsPk16IIcJ9Oo_B3P0Uj2_tnY" //session id 
global.prefix = '.' // bot prefix
global.owner = ["94766911711"] // Owner number
global.bot = "94766911711" // Bot number
global.namabot = "Base-Dxz" // Bot name
global.namaown = "DanuZz" // Bot owner

//~~~~~Status Updated~~~~~//
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
