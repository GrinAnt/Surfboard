let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "392",
    width: "662",
    videoId: "6CSfkB4_m78",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
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

function onPlayerReady() {
  updateProgressBar();
  clearInterval(time_update_interval);
  let time_update_interval = setInterval(function () {
    updateProgressBar();
  }, 1000);
}

const onPlayerStateChange = function () {
  content.addEventListener("click", function (e) {
    e.preventDefault();
    const btn = btnPlay.firstChild;
    if ((player.getPlayerState() === 5, 2)) {
      btn.nextSibling.setAttribute("xlink:href", "img/icons/sprite.svg#pause");
      btnPlay.removeAttribute("data-playback");
      playerBox.classList.add("player__box--active");
      player.playVideo();
    }

    if (player.getPlayerState() === 2) {
      btnPlay.setAttribute("data-playback", "1");
      btn.nextSibling.setAttribute("xlink:href", "img/icons/sprite.svg#play");
      playerBox.classList.remove("player__box--active");
      player.pauseVideo();
    }
  });
};

content.addEventListener("click", function (e) {
  e.preventDefault();
  const btn = btnPlay.firstChild;
  if ((player.getPlayerState() === 5, 2)) {
    btn.nextSibling.setAttribute("xlink:href", "img/icons/sprite.svg#pause");
    btnPlay.removeAttribute("data-playback");
    playerBox.classList.add("player__box--active");
    player.playVideo();
  } else if (player.getPlayerState() === 0) {
    btnPlay.setAttribute("data-playback", "1");
    btn.nextSibling.setAttribute("xlink:href", "img/icons/sprite.svg#play");
    playerBox.classList.remove("player__box--active");
    player.pauseVideo();
  }
});

progress.addEventListener("click", function (e) {
  e.preventDefault();

  let newTime = player.getDuration() * (e.target.value / 100);
  player.seekTo(newTime);
  if (player.getPlayerState() === 5) {
    player.pauseVideo();
  }
});

function updateProgressBar() {
  const time = Math.round((player.getCurrentTime() / player.getDuration()) * 100);
  progress.setAttribute("value", time);
  progressPoint.style.left = `${time - 1.5}%`;
  progress.style.setProperty("--value", time);
}

// function editVolume() {
//   if (player.getVolume() == 0) {
//     player.setVolume("100");
//   } else {
//     player.setVolume("0");
//   }
// }

volumePoint.style.left = 42 + "%";

volume.addEventListener("click", function (e) {
  e.preventDefault();

  let vol = 100 * (e.target.value / 100);
  player.setVolume(vol);
  volume.style.setProperty("--value", vol + 5);
  volumePoint.style.left = `${vol - 8}%`;
});

for (let e of document.querySelectorAll(".slider-progress")) {
  e.style.setProperty("--value", 50);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("value", e.value));
}

eventInit();
