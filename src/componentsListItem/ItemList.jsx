import Item from "./Item";


const ItemList = ({libros}) => {


    return (
        <div>
            {
                libros.length > 0 &&

                libros.map((libro) => {
                    return (
                        <div>
                            <Item key={libro.title} libro = {libro} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;