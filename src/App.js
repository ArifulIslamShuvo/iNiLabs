import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Features from './pages/Features/Features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Features />} />
      </Routes>
    </div>
  );
}

export default App;
