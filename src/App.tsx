import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PainClinic from './pages/PainClinic';
import QRGenerator from './pages/QRGenerator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pain-clinic" element={<PainClinic />} />
        <Route path="/qr" element={<QRGenerator />} />
        <Route path="/" element={<Navigate to="/pain-clinic" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
