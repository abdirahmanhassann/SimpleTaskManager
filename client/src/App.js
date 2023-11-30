import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router';
import Home from './Routes/Home';
import Login from './Routes/Login';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './authentication';

function App() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
     <BrowserRouter>
   <Routes>  
   <Route  path='/' element={ isLoggedIn?<Home/>:<Login />}exact/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
