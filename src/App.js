import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" />
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
