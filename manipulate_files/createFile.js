const jsonfile = require('jsonfile')

const api = {
    cpu: require('../system/system_information.js').cpu,
    hostname: require('../system/system_information.js').hostname,
    networkInterfaces: require('../system/system_information.js').networkInterfaces,
    uptime: require('../system/system_information.js').uptime_system,
}

function createFile(file, txt) {
    jsonfile.writeFile(file, txt)
        .then(res => {
            console.log('Arquivo criado com sucesso!')
        })
        .catch(error => console.error(error))
}

createFile('cpu.json', api.cpu())
createFile('hostname.json', api.hostname())
createFile('networkInterfaces.json', api.networkInterfaces())
createFile('uptime.json', api.uptime())