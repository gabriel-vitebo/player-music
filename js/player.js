import audios from "./data.js"
import { path, secondsToMinutes } from "./utils.js"

const cover = document.querySelector('.card-img')
const title = document.querySelector(".card-content h1")
const artist = document.querySelector(".artist")
const currentDuration = document.querySelector("#current-duration")
const totalDuration = document.querySelector("#total-duration")
const seekbar = document.querySelector("#seekbar")

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
  }

  function retry() {
    currentPlaying--
    currentAudio = audioData[currentPlaying]
    audio.pause()
    audio = new Audio(path(currentAudio.file))
    creatingTheMusicCard()
    
  }
  
  
  function play() {
    seekbar.max = audio.duration
    totalDuration.innerText = secondsToMinutes(audio.duration)
    audio.play()
    audio.addEventListener("timeupdate", () => {
      timeUpdate()
    })
  }
  function pause() {
    audio.pause() 
  }

  function restart() {
    currentPlaying = 0
    creatingTheMusicCard()
  }

  function setSeek(value) {
    audio.currentTime = value
  }

  function timeUpdate() {
    currentDuration.innerText = secondsToMinutes(audio.currentTime)
    seekbar.value = audio.currentTime
  }

  return {
    next,
    play,
    pause,
    previous,
    timeUpdate,
    setSeek,
    audio,
    seekbar,
    totalDuration,
    secondsToMinutes,
  }
}