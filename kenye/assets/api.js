// URL da API do Kanye
const apiUrl = 'https://api.kanye.rest/';

// Função para fazer a requisição à API e atualizar o conteúdo HTML
async function updateQuote() {
  try {
    // Fazendo a requisição GET para a API
    const response = await fetch(apiUrl);

    // Verifica se a requisição foi bem sucedida (status 200)
    if (!response.ok) {
      throw new Error('Erro ao buscar citação de Kanye');
    }

    // Transforma a resposta em JSON
    const data = await response.json();

    // Obtém a citação de Kanye
    const quote = data.quote;

    // Atualiza o elemento HTML com a citação
    document.getElementById('quote').innerHTML = ('"') + quote + ('"');
  } catch (error) {
    console.error('Erro:', error);
    // Em caso de erro, exibe uma mensagem de erro
    document.getElementById('quote').innerHTML = 'Não foi possível obter a citação de Kanye';
  }
}

// Chamando a função para atualizar a citação
updateQuote();

