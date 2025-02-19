/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/custom-video-block/view.js ***!
  \****************************************/
const video = document.querySelector('.wp-block-create-block-custom-video-block video');
const volume = document.querySelector('.wp-block-create-block-custom-video-block .volume-button__bar');
const startButton = document.querySelector('.wp-block-create-block-custom-video-block .clickable-area');
const timeline = document.querySelector('.wp-block-create-block-custom-video-block .video-timeline');
const bottomControls = document.querySelector('.wp-block-create-block-custom-video-block .bottom-controls');
const mute = document.querySelector('.wp-block-create-block-custom-video-block .volume-button__icon');
const play = document.querySelector('.wp-block-create-block-custom-video-block .play-pause-button');
const fullscreen = document.querySelector('.wp-block-create-block-custom-video-block .full-screen__button');
function checkPrefix() {
  if (!CSS.supports('selector(::-moz-range-progress)')) {
    return 'webkit';
  }
}
function startVideoPlayer() {
  startButton.classList.add('hidden');
  timeline.classList.remove('hidden');
  bottomControls.classList.remove('hidden');
  video.volume = volume.value;
  video.play();
  play.focus();
}
function updateTimelineProgress() {
  let progress = document.querySelector('.video-timeline__progress');
  let percent = video.currentTime / video.duration * 100;
  progress.style.width = percent + '%';
}
function clickTimeline(event) {
  video.currentTime = event.offsetX / timeline.clientWidth * video.duration;
}
function playPauseVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  for (let icon of play.children) {
    icon.classList.toggle('hidden');
  }
}
function webkitVolumeProgress() {
  let percentage = volume.value / volume.max * 100;
  volume.style.background = `linear-gradient(to right, #fff ${percentage}%, rgba(255, 255, 255, .5) ${percentage}%)`;
}
if (checkPrefix() == 'webkit') {
  webkitVolumeProgress();
  volume.addEventListener('input', webkitVolumeProgress);
}
function changeVolumeIcon() {
  let icons = document.querySelector('.volume-button__icon').children;
  for (let icon of icons) {
    if (!icon.classList.contains('hidden')) icon.classList.add('hidden');
  }
  if (volume.value == 0) icons[0].classList.remove('hidden');
  if (0 < volume.value && volume.value <= 0.33) icons[1].classList.remove('hidden');
  if (0.33 < volume.value && volume.value <= 0.66) icons[2].classList.remove('hidden');
  if (0.66 < volume.value && volume.value <= 1) icons[3].classList.remove('hidden');
}
function changeVolumeVideoPlayer() {
  video.volume = volume.value;
  changeVolumeIcon();
  volume.setAttribute('data-value', volume.value);
}
function muteVideo() {
  if (video.volume == 0) volume.value = volume.getAttribute('data-value');
  if (video.volume !== 0) volume.value = 0;
  video.volume = volume.value;
  if (checkPrefix() == 'webkit') {
    webkitVolumeProgress();
  }
  changeVolumeIcon();
}
function fullscreenVideoPlayer() {
  if (!document.fullscreenElement) {
    document.querySelector('.wp-block-create-block-custom-video-block').requestFullscreen();
    fullscreen.children[0].classList.add('hidden');
    fullscreen.children[1].classList.remove('hidden');
  } else {
    document.exitFullscreen();
    fullscreen.children[0].classList.remove('hidden');
    fullscreen.children[1].classList.add('hidden');
  }
}
function showRepeatButton() {
  startButton.classList.remove('hidden');
  startButton.children[0].classList.add('hidden');
  startButton.children[1].classList.remove('hidden');
  timeline.classList.add('hidden');
  bottomControls.classList.add('hidden');
  startButton.focus();
}
function addKeyShortcuts(event) {
  if (event.code == 'Space') {
    event.preventDefault();
    playPauseVideo();
  }
  if (event.code == 'KeyM') muteVideo();
  if (event.code == 'KeyF') fullscreenVideoPlayer();
  if (event.code == 'ArrowLeft') video.currentTime -= 10;
  if (event.code == 'ArrowRight') video.currentTime += 10;
  if (event.code == 'ArrowUp') {
    event.preventDefault();
    volume.value = +volume.value + 0.1;
    changeVolumeVideoPlayer();
  }
  if (event.code == 'ArrowDown') {
    event.preventDefault();
    volume.value = +volume.value - 0.1;
    changeVolumeVideoPlayer();
  }
}
startButton.addEventListener('click', startVideoPlayer);
volume.addEventListener('input', changeVolumeVideoPlayer);
mute.addEventListener('click', muteVideo);
play.addEventListener('click', playPauseVideo);
video.addEventListener('timeupdate', updateTimelineProgress);
timeline.addEventListener('click', clickTimeline);
fullscreen.addEventListener('click', fullscreenVideoPlayer);
video.addEventListener('ended', showRepeatButton);
document.querySelector('.wp-block-create-block-custom-video-block').addEventListener('keydown', addKeyShortcuts);
/******/ })()
;
//# sourceMappingURL=view.js.map