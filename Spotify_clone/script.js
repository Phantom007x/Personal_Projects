console.log("Welcome to this clone of Spotify")

let songIndex = 0;
let audioElement = new Audio('songs/let_it_happen.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Let It Happen", filePath: "songs\let_it_happen.mp3", coverPath: "let_it_happen.jpeg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
]

masterPlay.addEventListener('click', )

myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})