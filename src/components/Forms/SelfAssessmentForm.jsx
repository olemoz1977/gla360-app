import { useMemo, useState } from 'react'

// Pavyzdinis klausimynas (vėliau pakeisime į realų GLA360 banką)
const QUESTIONS = [
  { id: 'q1', text: 'Aiškiai komunikuoju strateginę kryptį.', dimension: 'Strategic',     reverse: false },
  { id: 'q2', text: 'Dažnai priimu sprendimus be duomenų.',     dimension: 'Strategic',     reverse: true  },
  { id: 'q3', text: 'Kuriu aplinką, kur žmonės noriai bendradarbiauja.', dimension: 'Collaboration', reverse: false },
  { id: 'q4', text: 'Linkęs(-usi) mikromenedžinti.',             dimension: 'Collaboration', reverse: true  },
  { id: 'q5', text: 'Duodu aiškų, savalaikį grįžtamąjį ryšį.',   dimension: 'Communication', reverse: false },
  { id: 'q6', text: 'Dažnai nutyliu sunkias temas.',             dimension: 'Communication', reverse: true  },
]

const SCALE = [1, 2, 3, 4, 5]

export default function SelfAssessmentForm({ onSaved }) {
  const [answers, setAnswers] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const allAnswered = useMemo(
    () => QUESTIONS.every(q => answers[q.id] != null),
    [answers]
  )

  function handleChange(qid, val) {
    setAnswers(prev => ({ ...prev, [qid]: Number(val) }))
  }

  function computeScores() {
    // Reverse-scoring: jei reverse=true, 1->5, 2->4, 3->3...
    const scored = QUESTIONS.map(q => {
      const v = answers[q.id]
      const adj = q.reverse ? 6 - v : v
      return { ...q, value: v, adj }
    })

    const byDim = scored.reduce((acc, q) => {
      acc[q.dimension] = acc[q.dimension] || []
      acc[q.dimension].push(q.adj)
      return acc
    }, {})

    const dimScores = Object.fromEntries(
      Object.entries(byDim).map(([dim, arr]) => [dim, Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2))])
    )

    const overall = Number((scored.reduce((a, b) => a + b.adj, 0) / scored.length).toFixed(2))

    return { dimScores, overall, raw: scored }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!allAnswered) return
    setSubmitting(true)
    try {
      const res = computeScores()
      setResult(res)

      // (pasirinktinai) Išsaugojimas (Firebase ar kt.) – kai pridėsime backendą
      // onSaved callback — leidžia tėviniam komponentui/navigatoriui reaguoti
      onSaved?.(res)
    } catch (err) {
      console.error(err)
      alert('Nepavyko apdoroti rezultatų. Patikrink Console.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 760 }}>
      <p>Įvertink save 1–5 skalėje (1 – visiškai nesutinku, 5 – visiškai sutinku).</p>
      <div style={{ height: 8 }} />

      {QUESTIONS.map(q => (
        <div key={q.id} style={{ marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #eee' }}>
          <div style={{ marginBottom: 8, fontWeight: 600 }}>
            [{q.dimension}] {q.text}{' '}
            {q.reverse && <em style={{ color: '#888', fontWeight: 400 }}>(invertuotas)</em>}
          </div>

          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {SCALE.map(n => (
              <label key={n} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input
                  type="radio"
                  name={q.id}
                  value={n}
                  checked={answers[q.id] === n}
                  onChange={e => handleChange(q.id, e.target.value)}
                />
                <span>{n}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        type="submit"
        disabled={!allAnswered || submitting}
        style={{
          padding: '10px 16px',
          borderRadius: 8,
          border: '1px solid #ddd',
          background: allAnswered ? '#111' : '#999',
          color: '#fff',
          cursor: allAnswered ? 'pointer' : 'not-allowed',
        }}
      >
        {submitting ? 'Skaičiuojama...' : 'Pateikti'}
      </button>

      {/* Palieku „debug“ režimui – kol nepradėjome naviguoti į Results */}
      {result && (
        <div style={{ marginTop: 24 }}>
          <h3>Rezultatai (debug)</h3>
          <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 8 }}>
            {JSON.stringify(result, null, 2)}
          </pre>
          <p><strong>Bendras balas:</strong> {result.overall}</p>
        </div>
      )}
    </form>
  )
}
