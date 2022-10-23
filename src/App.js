import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Arms from './Pages/Arms';
import Cards from './Pages/Cards';
import Agents from './Pages/Agents';
import Maps from './Pages/Maps';
import Sprays from './Pages/Sprays';
import Titles from './Pages/Titles';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cards" element={ <Cards /> } />
      <Route path="/arms" element={ <Arms /> } />
      <Route path="/agents" element={ <Agents /> } />
      <Route path="/maps" element={ <Maps /> } />
      <Route path="/sprays" element={ <Sprays /> } />
      <Route path="/titles" element={ <Titles /> } />
    </Routes>
  );
}

export default App;
