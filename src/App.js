import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordleGame from './Components/WordleGame';
import HomePage from './Components/WelcomePage';
import Footer from './Components/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsOfService from './Components/TermsofService';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wordle" element={<WordleGame />} />
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}/>
            <Route path='/TermsofService' element={<TermsOfService />}/>
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}


export default App;
