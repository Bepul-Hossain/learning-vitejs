// Import our custom CSS
import '../../assets/css/style.scss';

import { setupCounter } from './components/counter';

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })


import { compile} from 'handlebars';

var content = {
  "header" : "Header Title",
}

var template = compile(document.querySelector('#title').innerHTML);
var header = template(content, {noEscape: true});
console.log(header);

document.querySelector('#titleOutput').innerHTML = header;
