import { Player } from "./player.js";
const player = Player()

const play = document.querySelector(".play-control")
const pause = document.querySelector(".pause-control")
const nextMusic = document.querySelector(".next-control")
const previousMusic = document.querySelector(".back-control")

export function PlayerControls() {

  play.addEventListener('click', () => {
    player.audio.play()
    play.classList.add('hide')
    pause.classList.remove('hide')
  })
  
  pause.addEventListener('click', () => {
    player.audio.pause()
    play.classList.remove("hide")
    pause.classList.add("hide")
  })

  nextMusic.addEventListener('click', () => {
    player.next()
    
  })

  player.audio.addEventListener('ended', () => {
    player.next()
    player.audio.play()
  })
  

}