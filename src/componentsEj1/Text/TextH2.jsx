import React, { useEffect, useState } from "react";

const TextH2 = () => {

    const [text, setText] = useState("");

    function handleText(event) {
        setText(event.target.value);
    }

    useEffect(() => {
        console.log("El componente se ha montado");
        return () => {
            console.log("El componente se ha desmontado");
        };
    }, []);

    useEffect(() => {
        console.log("El texto ha cambiado");
    }, [text]);

  return (
    <div>
        <input type="text" onChange={handleText} />
        <h2>{text}</h2>
    </div>
  )
};

export default TextH2;