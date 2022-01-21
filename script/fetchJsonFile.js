function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}


fetchJSONFile('./json/arch.json', function(data) {
    document.getElementById('archJson').innerHTML = `<br class="text">Windows Arch: ${data}</br>`
});


fetchJSONFile('./json/cpu.json', function(data) {
    document.getElementById('cpuJson').innerHTML = `<br class="text">${data}</br>`
});/*  */


fetchJSONFile('./json/hostname.json', function(data) {
    document.getElementById('hostnameJson').innerHTML = `<br class="text">${data}</br>`
});

fetchJSONFile('./json/homedir.json', function(data) {
    document.getElementById('homedir').innerHTML = `<br class="text">${data}</br>`
});


fetchJSONFile('./json/plataform.json', function(data) {
    document.getElementById('plataformJson').innerHTML = `<br class="text">Plataforma: ${data}</br>`
});


fetchJSONFile('./json/networkInterfaces.json', function(data) {
    document.getElementById('networkInterfacesJson').innerHTML = `<br class="text">${data}</br>`
});


fetchJSONFile('./json/uptime.json', function(data) {
    const moment = require('moment')
    moment.locale('pt-br')

    const date = moment(723386).format('LTS')

    document.getElementById('uptimeJson').innerHTML = `<br class="text">Uptime: desde </br> <br> ${date} || ${data} </br>`
});


fetchJSONFile('./json/userinfo.json', function(data) {
    document.getElementById('userinfoJson').innerHTML = `<br class="text">System Userinfo: ${data}</br>`
});
