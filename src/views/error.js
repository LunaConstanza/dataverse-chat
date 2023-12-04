const error = () => {
    const container = document.createElement('p');
    container.innerHTML = `Error, esta ruta no existe.`;
    return container
};

export default error;