const jsonfile = require('jsonfile')

const api = {
    arch: require('../system/system_information.js').arch,
    cpu: require('../system/system_information.js').cpu,
    hostname: require('../system/system_information.js').hostname,
    plataform: require('../system/system_information.js').plataform,
    networkInterfaces: require('../system/system_information.js').networkInterfaces,
    uptime: require('../system/system_information.js').uptime_system,
    userinfo: require('../system/system_information.js').userinfo,
}

function createFile(file, txt) {
    jsonfile.writeFile(file, txt)
        .then(res => {
            console.log('Arquivo criado com sucesso!')
        })
        .catch(error => console.error(error))
}

createFile('arch.json', api.arch())

createFile('cpu.json', api.cpu())

createFile('hostname.json', api.hostname())

createFile('plataform.json', api.plataform())

createFile('networkInterfaces.json', api.networkInterfaces())

createFile('uptime.json', api.uptime())

createFile('userinfo.json', api.userinfo())