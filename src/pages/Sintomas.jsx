import { useState } from 'react'
import SymptomCard from '../components/SymptomCard'
import SymptomForm from '../components/SymptomForm'
import { useLocalStorage } from '../hooks/useLocalStorage'

function Sintomas() {
  const [sintomas, setSintomas] = useLocalStorage('sintomas', [])
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  // null = cadastrando um sintoma novo; objeto = editando esse sintoma
  const [sintomaEmEdicao, setSintomaEmEdicao] = useState(null)

  function abrirFormulario() {
    setSintomaEmEdicao(null)
    setMostrarFormulario(true)
  }

  function iniciarEdicao(sintoma) {
    setSintomaEmEdicao(sintoma)
    setMostrarFormulario(true)
  }

  function fecharFormulario() {
    setSintomaEmEdicao(null)
    setMostrarFormulario(false)
  }

  // Create e Update: o mesmo formulário serve para os dois casos
  function salvarSintoma(dadosDoFormulario) {
    if (sintomaEmEdicao === null) {
      const novoSintoma = {
        id: Date.now(),
        ...dadosDoFormulario
      }

      setSintomas(anteriores => [...anteriores, novoSintoma])
    } else {
      setSintomas(anteriores =>
        anteriores.map(sintoma =>
          sintoma.id === sintomaEmEdicao.id
            ? { ...sintoma, ...dadosDoFormulario }
            : sintoma
        )
      )
    }

    fecharFormulario()
  }

  // Delete
  function removerSintoma(id) {
    const confirmou = window.confirm('Deseja excluir este sintoma?')

    if (!confirmou) {
      return
    }

    setSintomas(anteriores =>
      anteriores.filter(sintoma => sintoma.id !== id)
    )
  }

  const editando = sintomaEmEdicao !== null

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
                  onEditar={() => iniciarEdicao(sintoma)}
                  onExcluir={() => removerSintoma(sintoma.id)}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="formulario-container">

          <div className="pagina-header">
            <div>
              <span className="tag">
                {editando ? 'EDITAR REGISTRO' : 'NOVO REGISTRO'}
              </span>

              <h1>{editando ? 'Editar sintoma' : 'Registrar sintoma'}</h1>

              <p>
                Descreva as informações relacionadas ao sintoma.
              </p>
            </div>
          </div>

          <SymptomForm
            sintomaInicial={sintomaEmEdicao}
            onSalvar={salvarSintoma}
            onCancelar={fecharFormulario}
          />
        </div>
      )}

    </section>
  )
}

export default Sintomas
