// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/


import { home } from './views/home.js';
import cardContainer from './views/card.js'
import error from './views/error.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': home,
  '/character': cardContainer,
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