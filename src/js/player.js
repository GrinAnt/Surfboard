//переменные плеера
// const btnPlayback = document.querySelector(".player__button-playback");
const btnPlay = document.querySelector(".player__playback-icon");
// const content = document.querySelector(".player__content");
const playerBox = document.querySelector(".player__box");
// const volume = document.querySelector(".player__sound-line");

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "392",
    width: "662",
    videoId: "6CSfkB4_m78",
    events: {
      //   onReady: onPlayerReady,
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

let eventInit = function () {
  btnPlay.addEventListener("click", function (e) {
    e.preventDefault();

    const btn = btnPlay.firstChild;

    if (btnPlay.hasAttribute("data-playback")) {
      btn.nextSibling.setAttribute("xlink:href", "img/icons/sprite.svg#pause");
      btnPlay.removeAttribute("data-playback");
      playerBox.classList.add("player__box--active");
      player.playVideo();
    } else {
      btnPlay.setAttribute("data-playback", "1");
      btn.nextSibling.setAttribute("xlink:href", "img/icons/sprite.svg#play");
      playerBox.classList.remove("player__box--active");
      player.pauseVideo();
    }
  });
};

// let interval = setInterval(() => {
//   const completedPercent = (player.getCurrentTime() / player.getDuration()) * 100;
//   //   console.log(completedPercent);

//   $(".player__playback-button").css({ left: `${completedPercent}` });
// });

// $(".slider-progress").on("click", (e) => {
//   const bar = $("e.currentTarget");
//   //   const bar = e.offWidth;
//   const clickPos = e.originalEvent.layerX;

//   const newButtonPosition = (clickPos / bar.width()) * 100;
//   const newPlaybackPosition = (player.getDuration() / 100) * newButtonPosition;

//   console.log(newButtonPosition);
//   $(".player__playback-button").css({
//     left: `${newButtonPosition}%`,
//   });
//   //   console.log(clickPos);
//   player.seekTo(newPlaybackPosition);
// });

function editVolume() {
  if (player.getVolume() == 0) {
    player.setVolume("100");
  } else {
    player.setVolume("0");
  }
}

eventInit();

//
//

// Обновляем прогресс
// function updateProgressBar() {
//   //   const line_width = $(".player__playback").width();
//   const persent = (player.getCurrentTime() / player.getDuration()) * 100;
//   //   $(".player__playback").css("width", persent * line_width);
//   //   per = persent * 100;
//   $(".player__playback-button").css("left", persent + "%");
//   console.log(persent);
// }
// // updateProgressBar();

// /*Линия прогресса*/
// function progress(event) {
//   var line_width = $(".player__playback").width();
//   // положение элемента
//   var pos = $(".player__playback").offset();
//   var elem_left = pos.left;
//   // положение курсора внутри элемента
//   var Xinner = event.pageX - elem_left;
//   var newTime = player.getDuration() * (Xinner / line_width);
//   // Skip video to new time.
//   player.seekTo(newTime);
//   console.log(newTime);
// }

//
//
//
//
//

// function onPlayerReady(event) {
//   event.playVideo();
// }

// const progress = document.querySelector(".player__playback");

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
// //   let newTime = player.getDuration() - player.getCurrentTime() / 100;
//   player.seekTo(newTime);
//   console.log(newTime);
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

// for (let e of document.querySelectorAll(".slider-progress")) {
//   e.style.setProperty("--value", e.value);
//   e.style.setProperty("--min", e.min == "" ? "0" : e.min);
//   e.style.setProperty("--max", e.max == "" ? "100" : e.max);
//   e.addEventListener("input", () => e.style.setProperty("width", e.width));
// }

// updateProgressBar();
// onPlayerReady();
