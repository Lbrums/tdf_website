import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Store from './pages/Store';
import Trekkings from './pages/Trekkings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trekkings" element={<Trekkings />} />
        <Route path="/Loja" element={<Store />} />
        <Route path="/SobreNos" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
