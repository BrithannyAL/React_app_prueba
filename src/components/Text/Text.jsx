import React, { useState } from 'react';
import TextH2 from './TextH2';

const Text = () => {

    const [show, setShow] = useState(false); //La variable empieza en true

    //La función se puede hacer de manera:
    function handleShow() {
        setShow(!show); //Cambia el valor de show al contrario
    }

    return (
        <div>
            <button onClick={handleShow}>{show === true ? "Ocultar" : "Mostrar"}</button>
            {show === true && <TextH2/>}
        </div>
    );
}

export default Text;