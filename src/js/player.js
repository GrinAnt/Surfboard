const btnPlayback = document.querySelector(".player__button-playback");
const btnPlay = document.querySelector(".player__playback-icon");
const content = document.querySelector(".player__content");
const playerBox = document.querySelector(".player__box");
const volume = document.querySelector(".player__sound-line");

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "392",
    width: "662",
    videoId: "6CSfkB4_m78",
    events: {
      onReady: initialize,
      //   onStateChange: onPlayerStateChange,
    },
    playerVars: {
      controls: 0,
      disablekb: 1,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 1,
    },
  });
}

// function onPlayerReady(event) {
//   event.playVideo();
// }

// let eventInit = function () {
//   const btn = btnPlay.firstChild;
//   btnPlay.addEventListener("click", function (e) {
//     e.preventDefault();

//     // const btn = btnPlay.firstChild;

//     if (btnPlay.hasAttribute("data-playback")) {
//       btn.nextSibling.setAttribute("xlink:href", "img/icons/sprite.svg#pause");
//       btnPlay.removeAttribute("data-playback");
//       content.classList.add("player__content--active");
//       player.playVideo();
//     } else {
//       btnPlay.setAttribute("data-playback", "1");
//       btn.nextSibling.setAttribute("xlink:href", "img/icons/sprite.svg#play");
//       content.classList.remove("player__content--active");
//       player.pauseVideo();
//     }
//   });
// };

function editVolume() {
  if (player.getVolume() == 0) {
    player.setVolume("100");
  } else {
    player.setVolume("0");
  }
}

const progress = document.querySelector(".player__time-line");

// function initialize() {
//   updateProgressBar();
//   clearInterval(time_update_interval);
//   let time_update_interval = setInterval(function () {
//     updateProgressBar();
//   }, 1000);
// }

// progress.addEventListener("click", function (e) {
//   e.preventDefault();
//   let newTime = player.getDuration() * (e.target.value / 100);
//   player.seekTo(newTime);
// });

// volume.addEventListener("click", function (e) {
//   e.preventDefault();
//   const vol = player.getVolume();
//   //   const vom = volume.setAttribute("value", vol);

//   player.setVolume(vol);
// });

// console.log(volume);

// function updateProgressBar() {
//   const time = Math.round((player.getCurrentTime() / player.getDuration()) * 100);
//   progress.setAttribute("value", time);
//   progress.style.setProperty("--value", time);
// }

// for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
//   e.style.setProperty("--value", e.value);
//   e.style.setProperty("--min", e.min == "" ? "0" : e.min);
//   e.style.setProperty("--max", e.max == "" ? "100" : e.max);
//   e.addEventListener("input", () => e.style.setProperty("--value", e.value));
// }

// eventInit();
// updateProgressBar();
// // onPlayerReady();
