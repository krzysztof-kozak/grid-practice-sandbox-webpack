import '../scss/main.scss';

import { toggleMenu, closeMenu } from './functions.js';
import { button } from './elements.js';

const init = () => {
  console.log('DOM succesfuly parsed and loaded');

  window.addEventListener('resize', closeMenu);
  button.addEventListener('click', toggleMenu);
};
document.addEventListener('DOMContentLoaded', init);
