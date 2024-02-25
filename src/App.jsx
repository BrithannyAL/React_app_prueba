import Libros from "./componentsAPI/Libros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentsAPI/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Libros />
    </BrowserRouter>
  );
}

export default App;
