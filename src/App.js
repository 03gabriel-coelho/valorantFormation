import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cards" />
      <Route path="/arms" />
      <Route path="/agents" />
      <Route path="/maps" />
      <Route path="/sprays" />
      <Route path="/titles" />
    </Routes>
  );
}

export default App;
