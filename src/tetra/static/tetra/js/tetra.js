import Tetra from './tetra.core.js'

window.Tetra = Tetra;
window.document.addEventListener('alpine:init', () => {
  Tetra.init();
})
