
import React, { useState } from 'react'

const questions = [
  'Aš aiškiai komunikuoju savo mintis ir idėjas.',
  'Aš aktyviai klausausi kitų nuomonės.',
  'Aš gebu efektyviai spręsti konfliktus.',
  'Aš rodau iniciatyvą komandoje.',
  'Aš nuolat siekiu tobulėti profesinėje srityje.'
]

function SelfAssessmentPage() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))

  const handleChange = (index, value) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Savęs vertinimas</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            <p className="mb-2 font-medium">{question}</p>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="flex flex-col items-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={value}
                    checked={answers[index] === value}
                    onChange={() => handleChange(index, value)}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
      <pre className="mt-8 bg-gray-100 p-4 rounded">
        Atsakymai: {JSON.stringify(answers, null, 2)}
      </pre>
    </div>
  )
}

export default SelfAssessmentPage
