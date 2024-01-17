import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
  sounds.buttonPressAudio.play()
}

export function increaseTime() {
  let newTime = timer.plusTime()
  timer.updateDisplay(newTime, 0)
  sounds.buttonPressAudio.play()
}

export function shortenTime() {
  let newTime = timer.subtractTime()
  timer.updateDisplay(newTime, 0)
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
}
