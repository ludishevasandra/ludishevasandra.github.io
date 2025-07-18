/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/custom-video-block/view.js ***!
  \****************************************/
if (document.querySelector(".wp-block-create-block-custom-video-block")) {
  // functions
  function startVideo(block) {
    block.querySelector(".controls").classList.add("started");
    block.querySelector("video").play();
    block.querySelector(".play-pause-button").focus();
  }
  function changeVolumeVideo(block, bar) {
    block.querySelector("video").volume = bar.value;
    changeVolumeIcon(block.querySelector(".volume-button__icon").children, bar.value);
    bar.setAttribute("data-value", bar.value);
  }
  function changeVolumeIcon(icons, volume) {
    for (let icon of icons) {
      if (!icon.classList.contains("hidden")) icon.classList.add("hidden");
    }
    if (volume == 0) icons[0].classList.remove("hidden");
    if (0 < volume && volume <= 0.33) icons[1].classList.remove("hidden");
    if (0.33 < volume && volume <= 0.66) icons[2].classList.remove("hidden");
    if (0.66 < volume && volume <= 1) icons[3].classList.remove("hidden");
  }
  function muteVideo(block) {
    const video = block.querySelector("video");
    const bar = block.querySelector(".volume-button__bar");
    if (video.volume == 0) {
      bar.value = bar.getAttribute("data-value");
    } else {
      bar.value = 0;
    }
    video.volume = bar.value;
    if (isWebkit) webkitVolumeProgress(bar);
    changeVolumeIcon(block.querySelector(".volume-button__icon").children, bar.value);
  }
  function webkitVolumeProgress(bar) {
    const percent = bar.value / bar.max * 100;
    bar.style.background = "linear-gradient{to right, #FFF " + percent + "%, rgba(255, 255, 255, .5) " + percent + "%)";
  }
  function isWebkit() {
    if (!CSS.supports('selector(::-moz-range-progress)')) {
      return true;
    } else {
      return false;
    }
  }
  function playPauseVideo(block) {
    const video = block.querySelector("video");
    const icons = block.querySelector(".play-pause-button").children;
    if (video.paused) {
      video.play();
      icons[0].classList.add("hidden");
      icons[1].classList.remove("hidden");
    } else {
      video.pause();
      icons[0].classList.remove("hidden");
      icons[1].classList.add("hidden");
    }
  }
  function updateTimelineProgress(block) {
    const video = block.querySelector("video");
    const percent = video.currentTime / video.duration * 100;
    block.querySelector(".video-timeline__progress").style.width = percent + "%";
  }
  function clickTimeline(block, event) {
    const video = block.querySelector("video");
    const timeline = block.querySelector(".video-timeline");
    video.currentTime = event.offsetX / timeline.clientWidth * video.duration;
  }
  function fullscreenVideo(block) {
    const icons = block.querySelector(".full-screen__button").children;
    if (!document.fullscreenElement) {
      block.requestFullscreen();
      icons[0].classList.add("hidden");
      icons[1].classList.remove("hidden");
    } else {
      document.exitFullscreen();
      icons[0].classList.remove('hidden');
      icons[1].classList.add('hidden');
    }
  }
  function showRepeatButton(block) {
    const icons = block.querySelector(".clickable-area").children;
    icons[0].classList.add("hidden");
    icons[1].classList.remove("hidden");
    block.querySelector(".controls").classList.remove("started");
    block.querySelector(".clickable-area").focus();
  }
  function addKeyShortcuts(block, event) {
    const video = block.querySelector("video");
    const controls = block.querySelector(".controls");
    const volumeBar = block.querySelector(".volume-button__bar");
    if (event.code == "Space") {
      event.preventDefault();
      if (controls.classList.contains("started")) {
        playPauseVideo(block);
      } else {
        startVideo(block);
      }
    }
    if (controls.classList.contains("started")) {
      if (event.code == "KeyM") muteVideo(block);
      if (event.code == "KeyF") fullscreenVideo(block);
      if (event.code == "ArrowLeft") video.currentTime -= 10;
      if (event.code == "ArrowRight") video.currentTime += 10;
      if (event.code == "ArrowUp") {
        event.preventDefault();
        volumeBar.value = +volumeBar.value + 0.1;
        changeVolumeVideo(block, volumeBar);
      }
      if (event.code == "ArrowDown") {
        event.preventDefault();
        volumeBar.value = +volumeBar.value - 0.1;
        changeVolumeVideo(block, volumeBar);
      }
    }
  }
  function init(block) {
    const video = block.querySelector("video");
    video.volume = block.querySelector(".volume-button__bar").value;
    if (screen.width <= 768) {
      if (video.getAttribute("data-mobile") !== "") {
        video.setAttribute("poster", video.getAttribute("data-mobile"));
      } else {
        video.setAttribute("poster", video.getAttribute("data-desktop"));
      }
    } else {
      video.setAttribute("poster", video.getAttribute("data-desktop"));
    }
  }

  // addEventListeners
  document.querySelectorAll(".wp-block-create-block-custom-video-block").forEach(block => {
    block.querySelector(".clickable-area").addEventListener("click", () => startVideo(block));
    block.querySelector(".volume-button__bar").addEventListener("input", event => changeVolumeVideo(block, event.target));
    block.querySelector(".volume-button__icon").addEventListener("click", () => muteVideo(block));
    block.querySelector(".play-pause-button").addEventListener("click", () => playPauseVideo(block));
    block.querySelector("video").addEventListener("timeupdate", () => updateTimelineProgress(block));
    block.querySelector(".video-timeline").addEventListener("click", event => clickTimeline(block, event));
    block.querySelector(".full-screen__button").addEventListener("click", () => fullscreenVideo(block));
    block.querySelector("video").addEventListener("ended", () => showRepeatButton(block));
    block.addEventListener("keydown", event => addKeyShortcuts(block, event));
    init(block);
    if (isWebkit) {
      const bar = block.querySelector(".volume-button__bar");
      webkitVolumeProgress(bar);
      bar.addEventListener("input", () => webkitVolumeProgress(bar));
    }
  });
}
/******/ })()
;
//# sourceMappingURL=view.js.map