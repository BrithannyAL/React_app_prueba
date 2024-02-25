import { useState } from 'react';
import { useEffect } from 'react';
import pedirLibros from './pedirLibros.js';
import ItemList from './ItemList.jsx';

const ItemListContainer = () => {

    const [libros, setLibros] = useState([]);


    //El useEffect se ejecuta solo una vez, cuando el componente se monta
    useEffect(() => {
        pedirLibros().then((data) => {
            setLibros(data)
        })
    }, [])

    return (
        <div>
            <ItemList libros = {libros}/>
        </div>
    )
};

export default ItemListContainer;

// Para la imagen
// <img src={libros[0].image_url} alt="imagen" />