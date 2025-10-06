
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Welcome to GLA360</h2>;
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function Assessment() {
  return <h2>Assessment Page</h2>;
}

function Invite() {
  return <h2>Invite Reviewers</h2>;
}

function Dashboard() {
  return <h2>Results Dashboard</h2>;
}

function Download() {
  return <h2>Download Report</h2>;
}

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="space-x-4 mb-4">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/assessment">Assessment</Link>
          <Link to="/invite">Invite</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/download">Download</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
