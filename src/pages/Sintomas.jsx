import { useState } from 'react'
import SymptomCard from '../components/SymptomCard'

function Sintomas() {
  const [sintomas, setSintomas] = useState([])
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const [nome, setNome] = useState('')
  const [intensidade, setIntensidade] = useState('Leve')
  const [horario, setHorario] = useState('')
  const [descricao, setDescricao] = useState('')

  function abrirFormulario() {
    setMostrarFormulario(true)
  }

  function cancelarCadastro() {
    setMostrarFormulario(false)

    setNome('')
    setIntensidade('Leve')
    setHorario('')
    setDescricao('')
  }

  function cadastrarSintoma(event) {
    event.preventDefault()

    if (!nome || !horario || !descricao) {
      return
    }

    const novoSintoma = {
      id: Date.now(),
      nome,
      intensidade,
      horario,
      descricao
    }

    setSintomas([...sintomas, novoSintoma])

    cancelarCadastro()
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

          <form
            className="formulario-sintoma"
            onSubmit={cadastrarSintoma}
          >

            <div className="campo">
              <label htmlFor="nome">
                Sintoma
              </label>

              <input
                id="nome"
                type="text"
                placeholder="Ex.: Dor de cabeça"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="intensidade">
                Intensidade
              </label>

              <select
                id="intensidade"
                value={intensidade}
                onChange={(event) =>
                  setIntensidade(event.target.value)
                }
              >
                <option value="Leve">Leve</option>
                <option value="Moderada">Moderada</option>
                <option value="Forte">Forte</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="horario">
                Horário
              </label>

              <input
                id="horario"
                type="time"
                value={horario}
                onChange={(event) => setHorario(event.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="descricao">
                Descrição
              </label>

              <textarea
                id="descricao"
                placeholder="Descreva como você está se sentindo..."
                value={descricao}
                onChange={(event) =>
                  setDescricao(event.target.value)
                }
                rows="5"
              />
            </div>

            <div className="formulario-acoes">

              <button
                type="button"
                className="btn-secundario"
                onClick={cancelarCadastro}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="btn-principal"
              >
                Salvar sintoma
              </button>

            </div>

          </form>
        </div>
      )}

    </section>
  )
}

export default Sintomas
