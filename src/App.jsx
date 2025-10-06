import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SelfAssessmentPage from './pages/SelfAssessmentPage'
import InviteRatersPage from './pages/InviteRatersPage'
import ResultsPage from './pages/ResultsPage'
import DevelopmentPlanPage from './pages/DevelopmentPlanPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/self-assessment" element={<SelfAssessmentPage />} />
        <Route path="/invite-raters" element={<InviteRatersPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/development-plan" element={<DevelopmentPlanPage />} />
      </Routes>
    </Router>
  )
}

export default App
