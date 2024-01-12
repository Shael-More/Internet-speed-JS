let startTime, endTime;

let imageSize = "";
let image = new Image();
let bitsOutput = document.getElementById("bits");
let kbsOutput = document.getElementById("kbs");
let mbpsOutput = document.getElementById("mbps");

let imageLink = "https://source.unsplash.com/random?topic=nature";
console.log(imageLink);

image.onload = async function() {
    endTime = new Date().getTime();
    await fetch(imageLink).then(response => {
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    })
}

function calculateSpeed() {
    let timeDuration = (endTime - startTime) / 1000;

    let loadedbits = imageSize * 8;
    let speedInBps = (loadedbits / timeDuration).toFixed(2);
    let speedInKbps = (speedInBps / 1024).toFixed(2);
    let speedInMbps = (speedInKbps / 1024).toFixed(2);

    bitsOutput.innerHTML += `${speedInBps} bits`
    kbsOutput.innerHTML += `${speedInKbps} kbps`
    mbpsOutput.innerHTML += `${speedInMbps} Mbps`
}

const init = async () => {
    startTime = new Date().getTime();
    image.src = imageLink;
}

window.onload = () => init();