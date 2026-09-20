const songs = [
    { title: "Song 1", artist: "Artist 1", file: "songs/song1.mp3" },
    { title: "Song 2", artist: "Artist 2", file: "songs/song2.mp3" },
    { title: "Song 3", artist: "Artist 3", file: "songs/song3.mp3" }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const play = document.getElementById("play");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const volume = document.getElementById("volume");

function loadSong() {
    audio.src = songs[index].file;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        play.textContent = "⏸";
    } else {
        audio.pause();
        play.textContent = "▶";
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
    play.textContent = "⏸";
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
    play.textContent = "⏸";
}

audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    current.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", nextSong);

function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
}

loadSong();