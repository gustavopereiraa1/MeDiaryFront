import { useState } from 'react'
import SymptomCard from '../components/SymptomCard'
import SymptomForm from '../components/SymptomForm'
import {useLocalStorage} from '../hooks/useLocalStorage'

function Sintomas() {
  const [sintomas, setSintomas] = useLocalStorage('sintomas', [])
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  function abrirFormulario() {
    setMostrarFormulario(true)
  }

  function fecharFormulario() {
    setMostrarFormulario(false)
  }

  function cadastrarSintoma(dadosDoFormulario) {
    const novoSintoma = {
      id: Date.now(),
      ...dadosDoFormulario
    }

    setSintomas(anteriores => [...anteriores, novoSintoma])

    fecharFormulario()
  }

  return (
    <section className="pagina">

      {!mostrarFormulario ? (
        <>
          <div className="pagina-header">
            <div>
              <span className="tag">REGISTROS</span>

              <h1>Meus sintomas</h1>

              <p>
                Aqui serão exibidos os sintomas que você registrar.
              </p>
            </div>

            <button
              className="btn-principal"
              onClick={abrirFormulario}
            >
              + Registrar sintoma
            </button>
          </div>

          {sintomas.length === 0 ? (
            <div className="estado-vazio">
              <div className="estado-vazio-icon">+</div>

              <h2>Nenhum sintoma registrado</h2>

              <p>
                Clique em "Registrar sintoma" para adicionar
                seu primeiro registro.
              </p>
            </div>
          ) : (
            <div className="sintomas-grid">
              {sintomas.map((sintoma) => (
                <SymptomCard
                  key={sintoma.id}
                  nome={sintoma.nome}
                  intensidade={sintoma.intensidade}
                  horario={sintoma.horario}
                  descricao={sintoma.descricao}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="formulario-container">

          <div className="pagina-header">
            <div>
              <span className="tag">NOVO REGISTRO</span>

              <h1>Registrar sintoma</h1>

              <p>
                Descreva as informações relacionadas ao sintoma.
              </p>
            </div>
          </div>

          <SymptomForm
            onSalvar={cadastrarSintoma}
            onCancelar={fecharFormulario}
          />
        </div>
      )}

    </section>
  )
}

export default Sintomas
