const title = document.getElementById("onePieceTitle");
const themeSong = document.getElementById("themeSong");

title.addEventListener("click", () => {
    if (themeSong.paused) {
        themeSong.play();
    } else {
        themeSong.pause();
    }
});
