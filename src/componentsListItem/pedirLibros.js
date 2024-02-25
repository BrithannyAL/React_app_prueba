import data from '../data/MOCK_DATA.json';

//Función que simula una petición a una API
const pedirLibros = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export default pedirLibros;