const chat = (character) => {
    const containerChat = document.createElement('div')
    console.log(character.name);

    const chatName = document.createElement('div');
    chatName.innerHTML += `
        <img src="${character.imageUrl}" alt="Fotografía de ${character.name}">
        <h2 itemprop="name">${character.name}</h2>`
    const chatContent = document.createElement('div');
    const chatText = document.createElement('div')
    chatText.innerHTML = `<textarea type="text" placeholder="Escribe un mensaje"></textarea>
        <button type="submit">Enviar</button>`
       
    containerChat.append(chatName, chatContent, chatText)
    return containerChat;
};

export default chat;