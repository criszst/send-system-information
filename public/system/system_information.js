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

    homedir() {
        return os.homedir()
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

    type() {
       let typeArch = String

       if(os.type() === 'Windows_NT') typeArch = 'Windows'

       else if(os.type() !== 'Windows_NT' && os.type() === 'Darwin') typeArch = 'Mac OS'

       return typeArch;
    }
    
}
