const os = require('os')

module.exports = {
    arch() {
        return JSON.stringify(os.arch())
    },

    cpu() {
        return JSON.stringify(os.cpus())
    },

    hostname() {
        return JSON.stringify(os.hostname())
    },

    plataform() {
        return JSON.stringify(os.platform())
    },

    networkInterfaces() {
        return JSON.stringify(os.networkInterfaces())
    },

    uptime_system() {
        return JSON.stringify(os.uptime())
    },

    userinfo() {
        return JSON.stringify(os.userInfo())
    },
}