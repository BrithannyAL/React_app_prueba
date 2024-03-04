import { BrowserRouter, Routes, Route } from "react-router-dom";
import Libros from "./componentsAPI/Libros";
import Navbar from "./componentsAPI/Navbar";
import PaginaLibro from "./componentsAPI/PaginaLibro";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/buscador" element={<Libros />} />
        <Route path="/paginaLibro" element={<PaginaLibro/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
