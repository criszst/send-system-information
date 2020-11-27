const api = {
    arch: require('./system_information.js').arch,
    cpu: require('./system_information.js').cpu,
    hostname: require('./system_information.js').hostname,
    plataform: require('./system_information.js').plataform,
    networkInterfaces: require('./system_information.js').networkInterfaces,
    uptime: require('./system_information.js').uptime_system,
    userinfo: require('./system_information.js').userinfo,
}

module.exports = api