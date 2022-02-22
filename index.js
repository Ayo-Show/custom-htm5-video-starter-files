const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playButton = document.getElementById("play");
const playbackIcons = document.querySelectorAll(".playback-icons use");

const videoWorks = !!document.createElement("video").canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove("hidden");
}

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

// updatePlayButton updates the playback icon and tooltip
// depending on the playback state
function updatePlayButton() {
  playbackIcons.forEach((icon) => icon.classList.toggle("hidden"));

  if (video.paused) {
    playButton.setAttribute("data-title", "Play (k)");
  } else {
    playButton.setAttribute("data-title", "Pause (k)");
  }
}

playButton.addEventListener("click", togglePlay);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("play", updatePlayButton);
