import audios from "./data.js"
import { path } from "./utils.js"

const cover = document.querySelector('.card-img')
const title = document.querySelector(".card-content h1")
const artist = document.querySelector(".artist")

export function Player() {
  let audioData = audios
  let currentPlaying = 0
  console.log(currentPlaying)
  let currentAudio = audioData[currentPlaying]
  let audio = new Audio(path(currentAudio.file))
  
  function start() {
    creatingTheMusicCard()
  }

  function creatingTheMusicCard() {
    cover.style.background = `url(${path(currentAudio.cover)}) no-repeat center center / cover`
    title.innerText = currentAudio.title
    artist.innerText = currentAudio.artist
    audio
  }

  function next() {
    currentPlaying++
    creatingTheMusicCard()
    if(currentPlaying == audioData.length) {
      restart()
      creatingTheMusicCard()
    }
    console.log(creatingTheMusicCard())
  }
  next()

  function restart() {
    currentPlaying = 0
    creatingTheMusicCard()
  }

  return {
    start,
    audio,
    next,
  }
}