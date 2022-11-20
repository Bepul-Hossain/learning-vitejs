import '../scss/styles.scss'

// // Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

import { setupCounter } from './counter'

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
        new Popover(popover)
    })



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <button id="counter" type="button"></button>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
