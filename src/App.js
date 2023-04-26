import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import About from './Components/About';

import './Components/style.css'

export function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;