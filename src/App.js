import './App.css';

import { BrowserRouter, Link, Routes, Route} from "react-router-dom";

import SplashPage from './SplashPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CreateAccount from './CreateAccount';
import Profile from './Profile'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage/>} />
          <Route path="HomePage" element={<HomePage/>} />
          <Route path="LoginPage" element={<LoginPage/>} />
          <Route path="CreateAccount" element={<CreateAccount/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
