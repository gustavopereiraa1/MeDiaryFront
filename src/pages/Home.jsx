function Home({ onNavegar }) {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-text">
          <span className="tag">DIÁRIO DE SINTOMAS</span>

          <h1>
            Cuide das suas informações.
            <span> Organize seus sintomas.</span>
          </h1>

          <p>
            O Mediary é uma proposta de aplicação para
            organizar registros de sintomas de forma simples
            e facilitar o acompanhamento das informações.
          </p>

          <button
            className="btn-principal"
            onClick={() => onNavegar('sintomas')}
          >
            Ver sintomas
          </button>
        </div>

        <div className="hero-card">
          <div className="hero-icon">♥</div>
          <h2>Mediary</h2>
          <p>Seu diário de sintomas</p>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <span>01</span>
          <h3>Organização</h3>
          <p>
            Centralize seus registros em um único lugar.
          </p>
        </div>

        <div className="info-card">
          <span>02</span>
          <h3>Acompanhamento</h3>
          <p>
            Visualize os sintomas registrados de maneira simples.
          </p>
        </div>

        <div className="info-card">
          <span>03</span>
          <h3>Simplicidade</h3>
          <p>
            Uma interface pensada para facilitar a utilização.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home