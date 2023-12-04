const axios = require('axios');

// Configura tu clave de API de OpenAI
const apiKey = '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';

// URL de la API de OpenAI
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// Texto para completar
const prompt = 'Escribe aquí tu prompt para completar.';

// Realiza la solicitud a la API de OpenAI
axios.post(apiUrl, {
  prompt: prompt,
  max_tokens: 150,  // Puedes ajustar este valor según tus necesidades
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
})
  .then(response => {
    // Procesa la respuesta de la API
    console.log(response.data.choices[0].text);
  })
  .catch(error => {
    // Maneja errores
    console.error('Error al realizar la solicitud a la API de OpenAI:', error);
  });