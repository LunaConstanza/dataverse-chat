import { header, footer } from "./header&footer.js";
import data from '../lib/dataSet.js';
// import { renderItems } from './main.js';
import { navigateTo } from '../router.js';


export const home = () => {

  const renderItems = (data) => {
    const list = document.createElement('ul')
    data.forEach(character => {
      const card = document.createElement('li');
      card.setAttribute("itemscope", "");
      card.setAttribute("itemtype", "characterScout")
      card.classList.add("card")
      card.innerHTML += `
            <img src="${character.imageUrl}" alt="Fotografía de ${character.name}">
            <h2 itemprop="name">${character.name}</h2>
            <p itemprop="yearOfBirth">${character.facts.yearOfBirth}</p>
            <p itemprop="mainPosition">${character.facts.mainPosition}</p>
          `
      list.appendChild(card)

      card.addEventListener('click', () => {
        navigateTo('/character', character)
      })
    });
    return list;
  };

  const container = document.createElement('div');
  container.id = 'container';
  // const header = document.createElement('header');
  // header.innerHTML = `<img src="./images/flor de lis.png" alt="Icono de una Flor de Lis Amarilla">
  // <h1>Data Scout</h1>
  // <img src="./images/flor de lis.png" alt="Icono de una Flor de Lis Amarilla">`;
  const main = document.createElement('main');
  const subtitle = document.createElement('h2');
  subtitle.textContent = 'Personajes Históricos';
  const selectors = document.createElement('div');
  selectors.className = 'selectors';
  selectors.innerHTML = `<div>
      <label for="name">Orden Alfabético</label>
      <select data-testid="select-sort" name="name" id="name">
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>
    <div>
      <label for="year">Orden por Año</label>
      <select data-testid="select-sort" name="year" id="year">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
    <div>
      <label for="sex">Filtrar por sexo</label>
      <select data-testid="select-filter" name="sex" id="sex">
        <option value="Femenino">Femenino</option>
        <option value="Masculino">Masculino</option>
      </select>
    </div>
    <button data-testid="button-clear" type="button" id="btnClear">Limpiar filtros</button>
    <a href="#compute">Estadística</a>`;
  const section1 = document.createElement('section');
  section1.className = 'contentCards'
  section1.appendChild(renderItems(data));
  // const footer = document.createElement('footer');
  // footer.innerHTML = '<p>Copyright &copy; 2023 - Luna González</p>';
  const script = document.createElement('script')
  script.src = "./views/main.js";
  script.type = "module";

  container.append(header(), main, footer());
  main.append(subtitle, selectors, section1, script);

  return container;
}