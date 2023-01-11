import audios from "./data.js"
import { path } from "./utils.js"

const cover = document.querySelector('.card-img')
const title = document.querySelector(".card-content h1")
const artist = document.querySelector(".artist")

export function Player() {
  let audioData = audios
  let currentPlaying = 0
  let currentAudio = audioData[currentPlaying]
  let audio = new Audio(path(currentAudio.file))
  
  creatingTheMusicCard()
  function creatingTheMusicCard() {
    cover.style.background = `url(${path(currentAudio.cover)}) no-repeat center center / cover`
    title.innerText = currentAudio.title
    artist.innerText = currentAudio.artist
  }
  
  function next() {
    update()
    if(currentPlaying == audioData.length) {
      restart()
    }
  }

  function previous() {
    retry()
  }

  function update() {
    currentPlaying++
    currentAudio = audioData[currentPlaying]
    audio.pause()
    audio = new Audio(path(currentAudio.file))
    creatingTheMusicCard()
    play()
  }

  function retry() {
    currentPlaying--
    currentAudio = audioData[currentPlaying]
    audio.pause()
    audio = new Audio(path(currentAudio.file))
    creatingTheMusicCard()
    play()
  }

  function play() {
    audio.play()
  }
  function pause() {
    audio.pause() 
  }

  function restart() {
    currentPlaying = 0
    creatingTheMusicCard()
  }

  return {
    next,
    play,
    pause,
    previous
  }
}