const createShowDrawerButtonTemplate = () => {
  return (`
    <button id="hamburger-button" aria-label="show drawer" class="">
      <i class="fa-solid fa-bars"></i>
    </button>
  `);
}

const createHideDrawerButtonTemplate = () => {
  return (`
    <button type="button" id="hamburger-button" aria-label="hide drawer" class="">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `);
}

export {
  createShowDrawerButtonTemplate,
  createHideDrawerButtonTemplate,
}