import { useState } from 'react'

function SymptomForm({ onSalvar, onCancelar }) {
  const [nome, setNome] = useState('')
  const [intensidade, setIntensidade] = useState('Leve')
  const [horario, setHorario] = useState('')
  const [descricao, setDescricao] = useState('')

  function enviarFormulario(event) {
    event.preventDefault()

    const nomeLimpo = nome.trim()
    const descricaoLimpa = descricao.trim()

    if (!nomeLimpo || !horario || !descricaoLimpa) {
      return
    }

    onSalvar({
      nome: nomeLimpo,
      intensidade,
      horario,
      descricao: descricaoLimpa
    })
  }

  return (
    <form
      className="formulario-sintoma"
      onSubmit={enviarFormulario}
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
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="intensidade">
          Intensidade
        </label>

        <select
          id="intensidade"
          value={intensidade}
          onChange={(event) => setIntensidade(event.target.value)}
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
          required
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
          onChange={(event) => setDescricao(event.target.value)}
          rows="5"
          required
        />
      </div>

      <div className="formulario-acoes">

        <button
          type="button"
          className="btn-secundario"
          onClick={onCancelar}
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
  )
}

export default SymptomForm
