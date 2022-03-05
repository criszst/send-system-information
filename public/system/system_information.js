"use strict";

const os = require('os')
const checkNumber = require('../script/functions')

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

       os.type() === "Windows_NT" ? typeArch = "Windows" : typeArch = '' || 
       os.type() === "Linux" ? typeArch = "Linux" : typeArch = '' ||
       os.type() === "Darwin" ? typeArch = "Mac OS" : typeArch = ''

       return typeArch; 
    },

    totalMem() {
      checkNumber(os.totalmem())

      return os.totalmem() / 1024 / 1024 / 1024
    },

    freeMem() {
     checkNumber(os.freemem())

      return os.freemem() / 1024 / 1024 / 1024
    }
    
}