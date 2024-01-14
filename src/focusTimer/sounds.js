export const buttonPressAudio = new Audio('../../assets/button-press.wav')
export const bgAudio = new Audio('../../assets/bg-audio.mp3')

export const forestSound = new Audio('../../assets/Floresta.wav')
export const rainSound = new Audio('../../assets/Chuva.wav')
export const cafeteriaSound = new Audio('../../assets/Cafeteria.wav')
export const fireplaceSound = new Audio('../../assets/Lareira.wav')

const kitchenTimer = new Audio('../../assets/kitchen-timer.mp3')

bgAudio.loop = true
forestSound.loop = true
rainSound.loop = true
cafeteriaSound.loop = true
fireplaceSound.loop = true

export function timeEnd() {
  kitchenTimer.play()
}

export function resetSounds() {
  forestSound.pause()
  rainSound.pause()
  cafeteriaSound.pause()
  fireplaceSound.pause()
}
