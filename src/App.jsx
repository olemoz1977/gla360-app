import TailwindTest from './TailwindTest';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div className="p-4">Welcome to GLA360 Home</div>;
const Profile = () => <div className="p-4">Profile Page</div>;
const Assessment = () => <div className="p-4">Assessment Page</div>;
const Invite = () => <div className="p-4">Invite Page</div>;
const Dashboard = () => <div className="p-4">Dashboard Page</div>;
const Download = () => <div className="p-4">Download Page</div>;

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
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
    </Router>
  );
}

export default App;
