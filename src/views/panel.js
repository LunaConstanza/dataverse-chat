import { header, footer } from "./header&footer.js";

export const panel = () => {
    const container = document.createElement('div');
    const main = document.createElement('div');
    main.innerHTML = `<p>Aqui va un chat grupal</p>`;

    container.append(header(), main, footer());

    return container
}