import audios from "./data.js"
import { path } from "./utils.js"

const cover = document.querySelector('.card-img')
const title = document.querySelector(".card-content h1")
const artist = document.querySelector(".artist")

export function Player() {
  let audioData = audios
  let currentPlaying = 0
  let currentAudio = audioData[currentPlaying]
  console.log(audioData[1])
  let audio = new Audio(path(currentAudio.file))
  
  creatingTheMusicCard()
  function creatingTheMusicCard() {
    cover.style.background = `url(${path(currentAudio.cover)}) no-repeat center center / cover`
    title.innerText = currentAudio.title
    artist.innerText = currentAudio.artist
    audio
  }
  
  function nextEnd() {
    currentPlaying++
    currentAudio = audioData[currentPlaying]
    creatingTheMusicCard()
    play()
    if(currentPlaying == audioData.length) {
      restart()
    }
  }
  
  function next() {
    currentPlaying++
    currentAudio = audioData[currentPlaying]
    creatingTheMusicCard()
    if(currentPlaying == audioData.length) {
      restart()
    }
  }

  function play() {
    audio.play()
  }

  function restart() {
    currentPlaying = 0
    creatingTheMusicCard()

  }
  

  return {
    audio,
    next,
    nextEnd,
  }
}