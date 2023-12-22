import { apiKey } from "../lib/openai.js";

const chat = (character) => {

    // let key;

    // const body = document.querySelector('body');

    const containerChat = document.createElement('div')
    containerChat.classList.add('containerChat');
    console.log(character.name);

    const chatName = document.createElement('div');
    chatName.classList.add('chatName');
    chatName.innerHTML += `
        <img src="${character.imageUrl}" alt="Fotografía de ${character.name}">
        <h2 itemprop="name">${character.name}</h2>`
    const chatContent = document.createElement('div');
    chatContent.classList.add('chatContent');
    const chatText = document.createElement('div');
    chatText.classList.add('chatText');
    const message1 = document.createElement('p');
    message1.classList.add('message1');
    const message2 = document.createElement('p');
    message2.classList.add('message2');
    // const inputSubmitKey = document.createElement("input");
    // inputSubmitKey.setAttribute("id", "userEmail");
    // inputSubmitKey.setAttribute("type", "text");
    // inputSubmitKey.setAttribute("placeholder", "Ingresa aquí la llave.");
    // inputSubmitKey.setAttribute("size", "30");
    // inputSubmitKey.setAttribute("maxlength", "80");
    // inputSubmitKey.setAttribute("required", "");
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
    containerChat.append(chatName, chatContent, chatText)

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('doble click');
        apiKey(character.name, character.shortDescription, text.value)
            .then((res) => {
                console.log(res);
                const message1 = document.createElement('p');
                message1.classList.add('message1');
                message1.textContent = text.value;
                const message2 = document.createElement('p');
                message2.classList.add('message2');
                message2.textContent = res;
                chatContent.append(message1, message2)
                text.value = '';
            })
            .catch((rej) => {
                console.log(rej);
            })

    })

    return containerChat;
};

export default chat;