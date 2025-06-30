import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordleGame from './Components/WordleGame'
import HomePage from './Components/WelcomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wordle" element={<WordleGame />} />
        
      </Routes>
    </Router>
  );
}

export default App;
