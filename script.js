const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");
const currentTimeDisplay = document.getElementById("currentTime");
const songSelect = document.getElementById("songSelect");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const forwardBtn = document.getElementById("forwardBtn");
const backwardBtn = document.getElementById("backwardBtn");

const songs = [
    "Audio files/CIZA - ISAKA (6AM) ft. Jazzworx _ Thukuthela (Official Music Video) - CIZA.mp3",
    "Audio files/Goon Flavour, Master KG _ Eemoh - Ngishutheni (Official Music Video) - Wanitwa Mos Entertainment.mp3",
    "Audio files/ZENZELE MUSIC VIDEO - DATAPROD112.mp3"
];

let currentIndex = 0;

audio.src = songs[currentIndex];
songSelect.selectedIndex = currentIndex;

songSelect.addEventListener("change", () => {
    currentIndex = songSelect.selectedIndex;
    audio.src = songs[currentIndex];
    audio.play();
});

playBtn.addEventListener("click", () => audio.play());

pauseBtn.addEventListener("click", () => audio.pause());

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    updateSong();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    updateSong();
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
});

audio.addEventListener("timeupdate", () => {
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    if (seconds < 10) seconds = "0" + seconds;

    currentTimeDisplay.textContent = `${minutes}:${seconds}`;
});

function updateSong() {
    audio.src = songs[currentIndex];
    songSelect.selectedIndex = currentIndex;
    audio.play();
}
