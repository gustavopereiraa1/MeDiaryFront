function SymptomCard({
  nome,
  intensidade,
  horario,
  descricao
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

    </article>
  )
}

export default SymptomCard
