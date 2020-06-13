import { menu } from './elements.js';
import moment from 'moment';

export const toggleMenu = () => menu.classList.toggle('menu--open');

// If user opens mobile menu and then resizes the screen, close the mobile menu.
// Use debounce to limit how often the "resize" event trigger and to save resouces.
export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export const closeMenu = debounce(() => {
  if (window.innerWidth >= 768 && menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    console.log('window resized to >= 768 px, menu closed!');
  }
}, 250);

const currentTime = moment().format('HH:mm:ss');
