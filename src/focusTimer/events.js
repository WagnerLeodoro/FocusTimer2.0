import * as actions from './actions.js'
import * as el from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import state from './state.js'
import { updateDisplay } from './timer.js'

export function registerControls() {
  el.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })

  el.musicOptions.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}

function clearSelection() {
  document.querySelectorAll('#music-options .ph').forEach((element) => {
    if (element.classList.contains('active')) element.classList.remove('active')
  })
}

el.forest.addEventListener('click', (e) => {
  if (!state.isMute) {
    e.preventDefault()
    clearSelection()
    document.querySelector('.ph-tree').classList.add('active')
    sounds.forestSound.play()
    return
  }
  clearSelection()
  sounds.resetSounds()
})

el.cloudRain.addEventListener('click', (e) => {
  if (!state.isMute) {
    e.preventDefault()
    clearSelection()
    document.querySelector('.ph-cloud-rain').classList.add('active')
    sounds.rainSound.play()
    return
  }
  clearSelection()
  sounds.resetSounds()
})

el.cafeteria.addEventListener('click', (e) => {
  if (!state.isMute) {
    e.preventDefault()
    clearSelection()
    document.querySelector('.ph-storefront').classList.add('active')
    sounds.cafeteriaSound.play()
    return
  }
  clearSelection()
  sounds.resetSounds()
})

el.fireplace.addEventListener('click', (e) => {
  if (!state.isMute) {
    e.preventDefault()
    clearSelection()
    document.querySelector('.ph-fire').classList.add('active')
    sounds.fireplaceSound.play()
    return
  }
  clearSelection()
  sounds.resetSounds()
})

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ''
  })
  el.minutes.onkeypress = (e) => /\d/.test(e.key)
  el.minutes.addEventListener('blur', (e) => {
    let time = e.currentTarget.textContent
    time = time > 60 ? 60 : time
    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}
