import { Popover, Tooltip } from 'bootstrap';
// import * as bootstrap from 'bootstrap';

document.querySelectorAll('[data-bs-toggle="tooltip"]')
.forEach(tooltip => {
    new Tooltip(tooltip)
})
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })