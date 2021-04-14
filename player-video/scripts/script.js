
let video = document.querySelector("#video");

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stopv() {
  video.pause()
  video.currentTime = 0;
}

function aumentar_vel() {
  video.playbackRate += 0.1
}

function diminuir_vel() {
  video.playbackRate -= 0.1
}

function replay10() {
  video.currentTime -= 10;
}

function forward10() {
  video.currentTime += 10
}

function fulscreen() {
  video.requestFullscreen();
}
