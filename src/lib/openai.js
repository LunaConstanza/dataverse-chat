// import axios from 'axios';
// const axios = require('axios');
// import axios from 'https://unpkg.com/axios/dist/axios.min.js';

// Configura tu clave de API de OpenAI
export const apiKey = (user, description, prompt) => {

  const key = localStorage.getItem('apiKey');
  // URL de la API de OpenAI
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  // Conversación de ejemplo
  const conversation = [
    { role: 'system', content: `Eres ${user}, ${description}. Responde a todas las preguntas que puedas, relacionadas a tu vida y tus logros.` },
    { role: 'user', content: prompt }
  ];

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      conversation,
      "temperature": 0.7,
    })
  }).then(response => response.json())
    .then(data => {
      if (data && data.choices && data.choices.length > 0) {
        return data.choices[0].message;
      } else {
        return 'La respuesta de la API no contiene opciones válidas.';
      }
    })
    .catch(error => {
      if (error && error.status === 429) {
        return 'Estás excediendo el límite de solicitudes permitido por OpenAI en un período de tiempo específico. ', error.status, error.data;
      } else {
        // Manejo de otros errores
        return 'Error al realizar la solicitud a la API de OpenAI:', error, error.status, error.data;
      }
    });

  //   // Realiza la solicitud a la API de OpenAI con AXIOS
  // return await axios.post(apiUrl, {
  //     model: 'gpt-3.5-turbo',
  //     messages: conversation,
  // }, {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${key}`,
  //     },
  // })  .then(response => {
  //         // Procesa la respuesta de la API
  //         console.log(response.data.choices[0].message);
  //         return response.data.choices[0].message;
  //     })
  //     .catch(error => {
  //         // Maneja errores
  //         console.error('Error al realizar la solicitud a la API de OpenAI:', error);
  //     });
}
