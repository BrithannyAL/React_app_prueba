const Libro = ({libro}) => {

    return (
        <div>
            <h2>Título: {libro.title}</h2>
            <p>Autor: {libro.author_name}</p>
            <p>Editor: {libro.publisher}</p>
            <p>Lenguaje: {libro.language}</p>
            <p>Año de publicación: {libro.first_publish_year}</p>
            <p>Cantidad de páginas: {libro.number_of_pages_median}</p>
            <p>Putaje: {libro.ratings_average}</p>
            <hr />
        </div>
    )
};

export default Libro;


// Te amo
// Fabri R.