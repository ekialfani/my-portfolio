import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ hamburgerContainer, drawer, menus }) {
    this._hamburgerContainer = hamburgerContainer;
    this._drawer = drawer;
    this._menus = menus;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburgerContainer: this._hamburgerContainer,
      drawer: this._drawer,
      menus: this._menus,
    });
  }

  renderPage() {
    
  }
}

export default App;
