const {readFileSync, writeFileSync} = require('fs')

const hi = require('./names')
const say = require('./function')

say(hi.joshwa)
say(hi.rahul)

const alt = require('./alternative-module')
require('./mind-grenade')

const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`The System uptime is ${os.uptime} seconds`)

const currentOs = {
  name : os.type(),
  freemem : os.freemem(),
  totalmem : os.freemem(),
  release : os.release()
}
console.log(currentOs)
