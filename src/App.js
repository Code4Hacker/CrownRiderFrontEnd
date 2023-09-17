import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sponsor from './components/Process/Sponsor/Sponsor';
import Welcome from './components/Home/Welcome';
import Applicants from './components/Process/Applicants/Applicants';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Welcome />} path='/' />
          <Route element={<Sponsor />} path='/sponsor' />
          <Route element={<Applicants />} path='/applicant' />
          <Route element={<Dashboard/>} path='/Dashboard' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
