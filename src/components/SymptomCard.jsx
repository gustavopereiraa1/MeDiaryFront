function SymptomCard({
  nome,
  intensidade,
  horario,
  descricao,
  onEditar,
  onExcluir
}) {
  return (
    <article className="symptom-card">

      <div className="symptom-top">

        <div className="symptom-icon">
          +
        </div>

        <span
          className={`intensidade ${intensidade.toLowerCase()}`}
        >
          {intensidade}
        </span>

      </div>

      <h2>{nome}</h2>

      <p>{descricao}</p>

      <div className="symptom-footer">

        <span>Horário</span>

        <strong>{horario}</strong>

      </div>

      <div className="symptom-acoes">

        <button
          type="button"
          className="btn-card"
          onClick={onEditar}
        >
          Editar
        </button>

        <button
          type="button"
          className="btn-card btn-card-excluir"
          onClick={onExcluir}
        >
          Excluir
        </button>

      </div>

    </article>
  )
}

export default SymptomCard
