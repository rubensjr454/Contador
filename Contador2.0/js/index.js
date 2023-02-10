import { mais, menos } from './numero.js'

document.getElementById('mais').addEventListener('click', mais)

document.getElementById('menos').addEventListener('click', menos)

document.getElementById('extra').addEventListener('click', mais)

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      mais()
      break
    case 'ArrowDown':
      menos()
      break
  }
})
