const fetch = require("./node_modules/node-fetch");

function getReops(githubUsername) {
    return new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/' + githubUsername + '/repos')
            .then(res => resolve(res.json()))
            .catch(err => reject("odrzucono " + err));
    });
}

getReops('balinskia')
    .then(body => {
        console.log("mam " + body.length + "repozytoriow:");
        for (v of body) {
            console.log(v.name);
        }
    })
    .catch(err => console.log("Blad polaczenia z githubem"));