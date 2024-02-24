import React, { useState } from 'react';

const Counter = (props) => {

    //Los estados son para guardar valores que pueden cambiar en el tiempo
    const [number, setNumber] = useState(0); //La variable empieza en 0

    const sumar = () => {
        setNumber(number + 1);
    }

    const restar = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <button onClick={restar}>Restar</button>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <hr />
        </div>
    );
}

export default Counter;