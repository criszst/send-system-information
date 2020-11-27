const os = require('os')

module.exports = {
    arch() {
        return os.arch()
    },

    cpu() {
        return os.cpus()
    },

    hostname() {
        return os.hostname()
    },

    plataform() {
        return os.platform()
    },

    networkInterfaces() {
        return os.networkInterfaces()
    },

    uptime_system() {
        return os.uptime()
    },

    userinfo() {
        return os.userInfo()
    },
}