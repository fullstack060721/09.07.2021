
const logger = require('./logger');
console.log(`what did we import? (require):`)
console.log(logger)
console.log(`what is the end point? (require): ${logger.end_point}`)

logger.log('===== system start up')

const fs = require('fs')
const files = fs.readdirSync('./') // sync -- bad!!!!
console.log('[sync] ' + files)

fs.readdir('$', (err, files) => {
    if (err) 
        logger.log('ERROR in fs.readdir of folder $: ' + err)
    else 
       console.log(`[async] Files ${files}`)
 })

logger.log('===== system shut down')