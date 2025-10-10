import { useLocation, Link } from 'react-router-dom'

export default function ResultsPage() {
  const { state } = useLocation() || {}
  const res = state

  if (!res) {
    return (
      <section>
        <h1>Results</h1>
        <p>Nerasta rezultatų. <Link to="/self-assessment">Atlik vertinimą</Link>.</p>
      </section>
    )
  }

  return (
    <section>
      <h1>Results</h1>
      <p><strong>Bendras balas:</strong> {res.overall}</p>

      <h3>Dimensijų vidurkiai</h3>
      <ul>
        {Object.entries(res.dimScores).map(([dim, val]) => (
          <li key={dim}>
            <strong>{dim}:</strong> {val}
          </li>
        ))}
      </ul>
    </section>
  )
}
