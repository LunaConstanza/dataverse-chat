let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  if(!routes || typeof routes !== "object" || Array.isArray(routes)){
    throw new Error("routes are invalid, should be an object")
  }

  if(!routes["/error"]){
    throw new Error("route for '/error' is required")
  }
  ROUTES = routes;
}

const queryStringToObject = (queryString) => {
  if (!queryString) return {};
  // convert query string to URLSearchParams
  const urlParams = new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  // return the object
  return Object.fromEntries(urlParams);
}

const renderView = (pathname, props={}) => {
  // clear the root element
  const root = rootEl;
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  const view = ROUTES[pathname] ?? ROUTES["/error"];
  // render the correct view passing the value of props
  const component = view(props);
  // add the view element to the DOM root element
  root.append(component);
} 

export const navigateTo = (pathname, props={}) => {
  const url = `${window.location.origin}${pathname}${props ? `?${new URLSearchParams(props)}` : ''}`;
  // update window history with pushState
  window.history.pushState(props, "", url);
  // render the view with the pathname and props
  renderView(pathname, props);
}

export const onURLChange = ({ currentTarget: { location } } ) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location.pathname, queryStringToObject(location.search));
}