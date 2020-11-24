const os = require('os')

module.exports = {
    cpu() {
        return JSON.stringify(os.cpus())
    },

    hostname() {
        return JSON.stringify(os.hostname())
    },

    networkInterfaces() {
        return JSON.stringify(os.networkInterfaces())
    },

    uptime_system() {
        return JSON.stringify(os.uptime())
    }
}