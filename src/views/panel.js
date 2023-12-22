import { header, footer } from "./header&footer.js";
import { apiKey } from "../lib/openai.js";
import data from '../lib/dataSet.js';

export const panel = () => {

    const container = document.createElement('div');
    const main = document.createElement('main');
    const chatName = document.createElement('div');
    chatName.classList.add('chatNames');
    const names = document.createElement('h3');
    data.forEach(character => {
        names.textContent += `${character.name} | `;
    })
    const chatContent = document.createElement('div');
    chatContent.classList.add('chatContent');
    const chatText = document.createElement('div');
    chatText.classList.add('chatText');
    const message1 = document.createElement('p');
    message1.classList.add('message1');
    const message2 = document.createElement('p');
    message2.classList.add('message2');
    const formChat = document.createElement('form');
    const text = document.createElement('textarea');
    text.setAttribute("maxlength", "150");
    text.setAttribute("required", "")
    text.placeholder = 'Escribe un mensaje';
    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'button';
    btnSubmit.textContent = 'Enviar';

    formChat.append(text, btnSubmit)
    chatText.append(formChat);
    chatName.append(names, 'en línea');
    main.append(chatName, chatContent, chatText)

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('doble click');
        const message1 = document.createElement('p');
        message1.classList.add('message1');
        message1.textContent = text.value;

        chatContent.append(message1)

        const chatSystem = document.createElement('div');
        chatSystem.classList.add('chatSystem');

        const chatCharacters = data.forEach(character => {
            apiKey(character.name, character.shortDescription, text.value)
                .then((res) => {
                    const nameSystem = document.createElement('h4');
                    nameSystem.textContent = character.name;
                    const message2 = document.createElement('p');
                    message2.classList.add('message2');
                    message2.textContent = res;
                    chatSystem.append(nameSystem, message2)
                    chatContent.append(chatSystem)
                })
                .catch((rej) => {
                    const nameSystem = document.createElement('h4');
                    nameSystem.textContent = character.name;
                    const message2 = document.createElement('p');
                    message2.classList.add('message2');
                    message2.textContent = rej;
                    chatSystem.append(nameSystem, message2)
                    chatContent.append(chatSystem)
                })
        })

        text.value = '';
        return Promise.all(chatCharacters);
    })


    container.append(header(), main, footer());

    return container
}