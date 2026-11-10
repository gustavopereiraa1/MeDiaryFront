import axios from 'axios'

// Em desenvolvimento a URL fica vazia e o proxy do Vite encaminha /api para o Flask.
// Em produção, defina VITE_API_URL no arquivo .env (ex.: https://minha-api.com).
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '',
  timeout: 10000,
  withCredentials: true, // envia o cookie de sessão do login
})

// Transforma qualquer erro do axios em uma mensagem que o usuário entende
export function mensagemDeErro(erro, mensagemPadrao = 'Algo deu errado. Tente novamente.') {
  if (erro.code === 'ECONNABORTED') {
    return 'O servidor demorou para responder. Tente novamente.'
  }

  if (!erro.response) {
    return 'Não foi possível conectar ao servidor. Verifique se a API está rodando.'
  }

  if (erro.response.status >= 500) {
    return 'O servidor encontrou um erro. Tente novamente em instantes.'
  }

  // Erros de validação da API vêm no formato { "error": "mensagem" }
  return erro.response.data?.error ?? mensagemPadrao
}

export function ehErroDeSessao(erro) {
  return erro.response?.status === 401
}

export default api
