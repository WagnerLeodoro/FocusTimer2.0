import * as actions from './actions.js'
import {
  controls,
  musicOptions,
  forest,
  cloudRain,
  cafeteria,
  fireplace,
  minutes,
} from './elements.js'
import * as sounds from './sounds.js'
import state from './state.js'
import { updateDisplay } from './timer.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })

  musicOptions.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}

function clearSelection() {
  forest.classList.remove('active')
  cloudRain.classList.remove('active')
  cafeteria.classList.remove('active')
  fireplace.classList.remove('active')
}

function addSelection(element) {
  clearSelection()
  element.classList.add('active')
}

forest.addEventListener('click', (e) => {
  e.preventDefault()
  sounds.resetSounds()
  if (!forest.classList.contains('active')) {
    addSelection(forest)
    sounds.forestSound.play()
    return
  }
  clearSelection()
})

cloudRain.addEventListener('click', (e) => {
  e.preventDefault()
  sounds.resetSounds()
  if (!cloudRain.classList.contains('active')) {
    addSelection(cloudRain)
    sounds.rainSound.play()
    return
  }
  clearSelection()
})

cafeteria.addEventListener('click', (e) => {
  e.preventDefault()
  sounds.resetSounds()

  if (!cafeteria.classList.contains('active')) {
    addSelection(cafeteria)
    sounds.cafeteriaSound.play()
    return
  }
  clearSelection()
})

fireplace.addEventListener('click', (e) => {
  e.preventDefault()
  sounds.resetSounds()

  if (!fireplace.classList.contains('active')) {
    addSelection(fireplace)
    sounds.fireplaceSound.play()
    return
  }
  clearSelection()
})

export function setMinutes() {
  minutes.addEventListener('focus', () => {
    minutes.textContent = ''
  })
  minutes.onkeypress = (e) => /\d/.test(e.key)
  minutes.addEventListener('blur', (e) => {
    let time = e.currentTarget.textContent
    time = time > 60 ? 60 : time
    state.minutes = time
    state.seconds = 0

    updateDisplay()
    minutes.removeAttribute('contenteditable')
  })
}
