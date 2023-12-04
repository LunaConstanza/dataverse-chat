export const header = () => {
    const container = document.createElement('header');
    container.innerHTML = `
    <img src="./images/flor de lis.png" alt="Icono de una Flor de Lis Amarilla">
    <h1>Data Scout</h1>
    <img src="./images/flor de lis.png" alt="Icono de una Flor de Lis Amarilla">`;
    return container;
}

export const footer = () => {
    const container = document.createElement('footer');
    container.innerHTML = `<p>Copyright &copy; 2023 - Luna González</p>`;
    return container
}