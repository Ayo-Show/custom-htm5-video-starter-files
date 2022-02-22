const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");

const videoWorks = !!document.createElement("video").canPlayType;
if (videoWorks) {
  videoControls = false;
  videoControls.classList.remove("hidden");
}
