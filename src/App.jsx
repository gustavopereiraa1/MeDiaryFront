import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sintomas from './pages/Sintomas'
import Sobre from './pages/Sobre'
import './App.css'

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home')

  function renderizarPagina() {
    if (paginaAtual === 'home') {
      return <Home onNavegar={setPaginaAtual} />
    }

    if (paginaAtual === 'sintomas') {
      return <Sintomas />
    }

    if (paginaAtual === 'sobre') {
      return <Sobre />
    }

    return <Home onNavegar={setPaginaAtual} />
  }

  return (
    <div className="app">
      <Navbar
        paginaAtual={paginaAtual}
        onNavegar={setPaginaAtual}
      />

      <main className="conteudo">
        {renderizarPagina()}
      </main>

      <footer className="footer">
        <p>© 2026 Mediary — Diário de Sintomas</p>
      </footer>
    </div>
  )
}

export default App