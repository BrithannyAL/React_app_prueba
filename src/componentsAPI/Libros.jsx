import { useEffect, useState } from "react";
import Libro from "./Libro";


const Libros = () => {

    const [libros, setLibro] = useState([]);

    //El fetch se hace una sola vez, cuando se monta el componente
    useEffect(() => {
        fetch('https://openlibrary.org/search.json?title="hujan"').then((resp) =>{
            return resp.json()
        }).then((data) =>{
            setLibro(data.docs)
        })
    }, [])

    return (
        <div>
            {
                libros.length > 0 &&

                libros.map((libro) => {
                    return (
                        <div>
                            <Libro key={libro.key} libro={libro} />
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Libros;