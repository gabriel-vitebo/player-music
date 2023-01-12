import { Player } from "./player.js";
const player = Player()

const retro = document.querySelector(".retro-control")
const advance = document.querySelector(".advence-control")
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
    play.classList.remove("hide")
    pause.classList.add("hide")
  })

  previousMusic.addEventListener('click', () => {
    player.previous()
    play.classList.remove("hide")
    pause.classList.add("hide")
  })

  player.seekbar.addEventListener("input", () => {
    player.setSeek(seekbar.value)
  })

  player.seekbar.addEventListener("change", () => {
    player.setSeek(seekbar.value)
  })

}