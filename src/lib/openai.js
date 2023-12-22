
// Configura tu clave de API de OpenAI
export const apiKey = (character, description, prompt) => {
  return new Promise((resolve, reject) => {

    const key = localStorage.getItem('apiKey');

    // URL de la API de OpenAI
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    // Conversación de ejemplo
    const conversation = [
      { role: 'system', content: `Eres ${character}, ${description}. Responde a todas las preguntas que puedas, relacionadas a tu vida y tus logros, con un límite de 100 palabras aproximadamente.` },
      { role: 'user', content: prompt }
    ];

    // Realiza la solicitud a la API de OpenAI con AXIOS
    axios.post(apiUrl, {
      model: 'gpt-3.5-turbo',
      messages: conversation,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      },
    }).then(response => {
      // Procesa la respuesta de la API
      resolve(response.data.choices[0].message.content);
    }).catch(error => {
      // Maneja errores
      reject('Error al realizar la solicitud a la API de OpenAI:', error);
    });
  });

}
