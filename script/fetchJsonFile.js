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


fetchJSONFile('./json/cpu.json', function(data) {
    document.getElementById('cpuJson').innerHTML = data
});

fetchJSONFile('./json/hostname.json', function(data) {
    document.getElementById('hostnameJson').innerHTML = data
});

fetchJSONFile('./json/networkInterfaces.json', function(data) {
    document.getElementById('networkInterfacesJson').innerHTML = data
});

fetchJSONFile('./json/uptime.json', function(data) {
    document.getElementById('uptimeJson').innerHTML = data
});