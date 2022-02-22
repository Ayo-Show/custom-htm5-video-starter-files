const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playButton = document.getElementById("play");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

const videoWorks = !!document.createElement("video").canPlayType;
if (videoWorks) {
  videoControls = false;
  videoControls.classList.remove("hidden");
}

playButton.addEventListener("click", togglePlay);
