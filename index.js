const axios = require('axios');

const TENON_API_BASE_URL = 'https://tenon.symthoptic.com';

let apiKey = null;

function configure(config) {
  apiKey = config.apiKey;
}

async function chat({ model, history }) {
  try {
    const response = await axios.post(
      `${TENON_API_BASE_URL}/chat`,
      { model, history },
      { headers: { key: apiKey } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}

async function create({ model, message }) {
  try {
    const response = await axios.post(
      `${TENON_API_BASE_URL}/create`,
      { model, message },
      { headers: { key: apiKey } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
}

module.exports = {
  configure,
  chat,
  create,
};
