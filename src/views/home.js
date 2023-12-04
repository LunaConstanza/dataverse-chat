// import { header, footer } from "./header&footer.js";


export const home = () => {
    const container = document.createElement('div');
    container.id = 'container';
    container.innerHTML = `<header><img src="./images/flor de lis.png" alt="Icono de una Flor de Lis Amarilla">
    <h1>Data Scout</h1>
    <img src="./images/flor de lis.png" alt="Icono de una Flor de Lis Amarilla"></header>
    <main>
    <h2>Personajes históricos</h2>
    <div class="selectors">
      <div>
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
      <a href="#compute">Estadística</a>
    </div>
    <section id="rooot"></section>
    <section id="compute"></section>
    </main>
    <footer>
    <p>Copyright &copy; 2023 - Luna González</p>
    </footer`;

    return container;
}