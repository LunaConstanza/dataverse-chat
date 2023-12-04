import { filterBySex, sortByName, sortByYear, computeStats } from '../lib/dataFunctions.js';
import data from '../lib/dataSet.js';

const sectionRoot = document.querySelector('#rooot');

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
            //cardContainer(character);  
            console.log('holis')
        })
    });
    return list;
};

window.addEventListener("DOMContentLoaded", () => {
    sectionRoot.appendChild(renderItems(data));
});

let newData = data;

const order = document.querySelector('select[name="name"]');
order.addEventListener('change', () => {
    newData = sortByName(newData, 'name', order.value)
    sectionRoot.innerHTML = "";
    sectionRoot.appendChild(renderItems(newData));
})

const orderYear = document.querySelector('select[name="year"]');
orderYear.addEventListener('change', () => {
    newData = sortByYear(newData, 'facts', 'yearOfBirth', orderYear.value)
    sectionRoot.innerHTML = "";
    sectionRoot.appendChild(renderItems(newData));
})

const filter = document.querySelector('select[name="sex"]');
filter.addEventListener('change', () => {
    newData = filterBySex(data, 'facts', 'sexOfPerson', filter.value)
    sectionRoot.innerHTML = "";
    sectionRoot.appendChild(renderItems(newData));
})

const btnReset = document.getElementById('btnClear');
btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    filter.value = 0;
    order.value = 0;
    orderYear.value = 0;
    sectionRoot.innerHTML = "";
    newData = data;
    sectionRoot.appendChild(renderItems(newData));
})

const compute = document.getElementById('compute');
compute.innerHTML = `<h2>Estádistica de personas nacidas entre 1800 y 1900</h2>
      <table>
        <tr>
          <th>&lt 1899</th>
          <th>&gt 1900</th>
        </tr>
        <tr id="computeStats">
        </tr>
      </table>`;

const computes = document.getElementById('computeStats');
computeStats(data, 1899, 1900).map(year => {
    computes.innerHTML += `<td>${year}%</td>`;
});