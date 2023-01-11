import { Player } from "./player.js";
const player = Player()

const play = document.querySelector(".play-control")
const pause = document.querySelector(".pause-control")
const nextMusic = document.querySelector(".next-control")
const previousMusic = document.querySelector(".back-control")

export function PlayerControls() {

  play.addEventListener('click', () => {
    player.play()
    play.classList.add('hide')
    pause.classList.remove('hide')
  })
  
  pause.addEventListener('click', () => {
    player.pause()
    play.classList.remove("hide")
    pause.classList.add("hide")
  })

  nextMusic.addEventListener('click', () => {
    player.next()
    play.classList.add("hide")
    pause.classList.remove("hide")
  })

  previousMusic.addEventListener('click', () => {
    player.previous()
  })

}