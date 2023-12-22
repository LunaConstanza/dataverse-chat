import { navigateTo } from "../router.js";

export const header = () => {
    const body = document.querySelector('body');

    const container = document.createElement('header');
    const div1 = document.createElement('div');
    div1.classList.add('divHeader');
    div1.innerHTML = `
        <img src="./images/flor de lis.png" alt="Icono de una Flor de Lis Amarilla">
        <h1>Data Scout</h1>
        <img src="./images/flor de lis.png" alt="Icono de una Flor de Lis Amarilla">`;
    const div2 = document.createElement('nav');
    const btnHome = document.createElement('button');
    btnHome.textContent = 'Home';
    const btnKey = document.createElement('button');
    btnKey.textContent = 'Mi llave';
    const btnPanel = document.createElement('button');
    btnPanel.textContent = 'Panel';
    div2.append(btnHome, btnKey, btnPanel);
    container.append(div1, div2);

    // POP UP -----------------------------
    let divOverlay = document.createElement("div");
    divOverlay.classList.add("overlay");
    divOverlay.setAttribute("id", "overlay");
    let divPopup = document.createElement("div");
    divPopup.classList.add("popup");
    divPopup.setAttribute("id", "popup");
    const btnClose = document.createElement("i");
    btnClose.classList.add("fa-solid");
    btnClose.classList.add("fa-xmark");
    const h3Popup = document.createElement("h3");
    h3Popup.innerHTML = `Ingresa tu APIkey por favor.`;
    const formKey = document.createElement("form");
    const inputKey = document.createElement("input");
    inputKey.setAttribute("id", "userEmail");
    inputKey.setAttribute("type", "text");
    inputKey.setAttribute("placeholder", "Ingresa aquí tu llave.");
    inputKey.setAttribute("size", "30");
    inputKey.setAttribute("maxlength", "80");
    inputKey.setAttribute("required", "");
    const submitKey = document.createElement("button");
    submitKey.classList.add("btnSubmitKey");
    submitKey.textContent = 'Guardar';
    const deleteKey = document.createElement('button');
    deleteKey.textContent = 'Borrar'

    body.appendChild(divOverlay);
    divOverlay.appendChild(divPopup);
    divPopup.append(btnClose, h3Popup, formKey);
    formKey.append(inputKey, submitKey, deleteKey);

    btnKey.addEventListener('click', (e) => {
        e.preventDefault()
        divOverlay.classList.add("active");
        divPopup.classList.add("active");
        if (localStorage.getItem('apiKey')) {
            inputKey.value = localStorage.getItem('apiKey');
            inputKey.setAttribute('disabled', '')
        }
    })

    submitKey.addEventListener('click', (e) => {
        e.preventDefault()
        const key = inputKey.value;
        if (key) {
            localStorage.setItem('apiKey', key);
            inputKey.setAttribute('disabled', '');
        } else {
            inputKey.placeholder = 'Agrega una llave por favor.'
        }
    })

    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        divOverlay.classList.remove("active");
        divPopup.classList.remove("active");
    })

    deleteKey.addEventListener('click', (e)=>{
        e.preventDefault();
        if (localStorage.getItem('apiKey')) {
            localStorage.removeItem('apiKey');
            inputKey.removeAttribute('disabled', '');
            inputKey.value = '';
        }
    })


    btnHome.addEventListener('click', ()=> {
        navigateTo('/');
    })

    btnPanel.addEventListener('click', () => {
        navigateTo('/panel')
    })

    return container;
}

export const footer = () => {
    const container = document.createElement('footer');
    container.innerHTML = `<p>Copyright &copy; 2023 - Luna González</p>`;
    return container
}