import { Card } from './components/Card/Card';
import { Usuario } from './components/Usuario/Usuario';

function App() {
  return (
    <div>
      <Usuario nombre="Brithanny" correo="barguello@gmail.com" />
      <Usuario nombre="Fabricio" correo="frodroguez@gmail.com" />
      <Card />
    </div>
  );
}

export default App;
