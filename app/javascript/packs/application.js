// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// External imports
import "bootstrap";
import { initMapbox } from '../plugins/init_mapbox';
// import { findISS } from '../plugins/init_iss_json';
import { findISS } from '../plugins/init_findiss';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  initMapbox();
  findISS();
  // setInterval(findISS, 2000);
});
