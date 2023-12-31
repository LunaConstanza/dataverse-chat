import { home } from './views/home.js';
import cardContainer from './views/card.js'
import { panel } from './views/panel.js';
import error from './views/error.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': home,
  '/character': cardContainer,
  '/panel': panel,
  '/error': error,
  // ...
};

// Assign the routes
setRoutes(routes);

const root = document.getElementById('root');
// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", (e) => {
  setRootEl(root);
  onURLChange(e);
});

window.onpopstate = onURLChange;