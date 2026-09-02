function Navbar({ paginaAtual, onNavegar }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div
          className="logo"
          onClick={() => onNavegar('home')}
        >
          <span className="logo-icon">M</span>
          <span>Mediary</span>
        </div>

        <nav className="menu">
          <button
            className={paginaAtual === 'home' ? 'ativo' : ''}
            onClick={() => onNavegar('home')}
          >
            Início
          </button>

          <button
            className={paginaAtual === 'sintomas' ? 'ativo' : ''}
            onClick={() => onNavegar('sintomas')}
          >
            Sintomas
          </button>

          <button
            className={paginaAtual === 'sobre' ? 'ativo' : ''}
            onClick={() => onNavegar('sobre')}
          >
            Sobre
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar