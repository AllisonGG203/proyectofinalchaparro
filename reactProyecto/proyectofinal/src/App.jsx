import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login.jsx'; 
import Register from './components/Register.jsx'; 
import Usuarios from './components/usuarios.jsx'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
