import React, {useState} from "react";

function Contador({numero}){
    const [valor, setValor] = useState(numero);

    const contar = () => {
        setValor(valor + 1);
}

return(
    <>
    <h1>Aplicacioni para contar . Valor inicial</h1>
    <h2>{valor}</h2>
    <button onClick={contar}>boton Contar</button>
    </>

);

}

export default Contador;