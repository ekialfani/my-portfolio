import '../styles/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './views/app';

const app = new App({
  hamburgerContainer: document.querySelector('#hamburger-menu'),
  drawer: document.querySelector('#drawer'),
  menus: document.querySelectorAll('.menu-item a'),
});
