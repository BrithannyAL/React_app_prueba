export const pedirLibroKey = (key) => {

    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?ket="${key}"`).then((resp) =>{
            return resp.json()
        }).then((data) =>{
            setLibro(data.docs)
        })
    }, [])

    return new Promise((resolve, reject) => {
        if (libros) {
            resolve(libros)
        } else {
            reject('No se encontró el libro')
        }
    });
}