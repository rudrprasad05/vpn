import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';

import icon from '../../assets/icon.svg';
import Hello from './components/Hello';

import './App.css';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
