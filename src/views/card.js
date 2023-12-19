import chat from "./chat.js";
import { header, footer } from "./header&footer.js";

const cardContainer = (character) => {
    const containerMain = document.createElement('main')
    console.log(character.name);

    const card = document.createElement('article');
    card.innerHTML += `
          <img src="${character.imageUrl}" alt="Fotografía de ${character.name}">
          <div>
            <h2 itemprop="name">${character.name}</h2>
            <p itemprop="yearOfBirth">${character.facts.yearOfBirth} - ${character.facts.placeOfBirth}</p>
            <p itemprop="mainPosition">${character.facts.mainPosition}</p>
            <p>${character.description}</p>
          </div>
        `

    const section = document.createElement('section');
    section.append(chat(character))
       
    containerMain.append(header(), card, section, footer())
    return containerMain;
};

export default cardContainer;