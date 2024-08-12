import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'; // Importar el archivo con el nombre y ruta correctos
import Register from './components/Register'; // Asegúrate de tener el archivo de registro en la misma carpeta
import Usuarios from './components/usuarios';

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
