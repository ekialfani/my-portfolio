import { createShowDrawerButtonTemplate, createHideDrawerButtonTemplate } from '../views/templates/template-creator';

const DrawerInitiator = {
  init({ hamburgerContainer, drawer, menus }) {
    this._hamburgerContainer = hamburgerContainer;
    this._drawer = drawer;
    this._menus = menus;

    this._drawerShowButton();
    this._renderButton();

    this._menus.forEach((menu) => {
      menu.addEventListener('click', () => {
        this._makeAllMenusInactive();
        this._makeClickedMenuActive(menu);
      });
    });
  },

  _renderButton() {
    if (this._isDrawerShow()) {
      this._drawerHideButton();
    } else {
      this._drawerShowButton();
    }
  },

  _isDrawerShow() {
    return this._drawer.classList.contains('show');
  },

  _drawerHideButton() {
    this._hamburgerContainer.innerHTML = createHideDrawerButtonTemplate();

    const hamburgerButton = document.querySelector('#hamburger-button');
    hamburgerButton.addEventListener('click', () => {
      this._showDrawer();
      this._renderButton();
    });
  },

  _drawerShowButton() {
    this._hamburgerContainer.innerHTML = createShowDrawerButtonTemplate();

    const hamburgerButton = document.querySelector('#hamburger-button');
    hamburgerButton.addEventListener('click', () => {
      this._hideDrawer();
      this._renderButton();
    });
  },

  _showDrawer() {
    this._drawer.classList.replace('show', 'hide');
  },

  _hideDrawer() {
    this._drawer.classList.replace('hide', 'show');
  },

  _makeAllMenusInactive() {
    this._menus.forEach((menu) => menu.classList.remove('active'));
  },

  _makeClickedMenuActive(menu) {
    menu.classList.add('active');
  }
}

export default DrawerInitiator;
