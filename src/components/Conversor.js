import { useState } from "react";

function Conversor(){
    const [pesos, setPesos] = useState("");
    const [monto, setMonto] = useState(0);

    const convertir = ()=> {
        let precio = valorDelDolar.value;
        setMonto(pesos/precio);
    }

    return(
        <>
            <h1>Convertir de pesos a dolares</h1>
            <h2>Monto en pesos</h2>
            <label>Valor del dolar</label>
            <input type="text" id="valorDelDolar"></input>
            <br/>
            <label>Cantidad de pesos</label>
            <input type="text" onChange={e => setPesos(e.target.value)}/>
            <button onClick={convertir}>Convertir a dolares</button>
            <p>Los {pesos} equivalen a {monto.toFixed(2)}</p>
        </> 
    );
}
export default Conversor;