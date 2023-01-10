import audios from "./data.js"
import { path } from "./utils.js"

const cover = document.querySelector('.card-img')
const title = document.querySelector(".card-content h1")
const artist = document.querySelector(".artist")

export function Player() {
  let audioData = audios
  let currentAudio = {}
  let currentPlaying = 0
  
  function start() {
    creatingTheMusicCard()
  }
  
  function createAudioElement(audio) {
    audio = new Audio(audio)
  }


  function creatingTheMusicCard() {
    currentAudio = audioData[currentPlaying]
    cover.style.background = `url(${path(currentAudio.cover)}) no-repeat center center / cover`
    title.innerText = currentAudio.title
    artist.innerText = currentAudio.artist
    createAudioElement(path(currentAudio.file))
  }

  return {
    start,
  }
}