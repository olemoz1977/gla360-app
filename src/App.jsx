import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SelfAssessmentPage from './pages/SelfAssessmentPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'

export default function App() {
  return (
    <BrowserRouter basename="/gla360-app">
      <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', gap: '1rem', fontFamily: 'system-ui' }}>
          <Link to="/">Home</Link>
          <Link to="/self-assessment">Self Assessment</Link>
          <Link to="/results">Results</Link>
        </nav>
      </header>

      <main style={{ padding: '1.25rem', fontFamily: 'system-ui' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/self-assessment" element={<SelfAssessmentPage />} />
          <Route path="/results" element={<ResultsPage />} />
          {/* 404 SPA viduje (jei kelias neatitinka) */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
