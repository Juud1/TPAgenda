import { useState } from "react";

function ListaDeNotas() {
    const [nota, setNota] = useState([]);
    const [notita, setNotita] = useState("");

    const guardar = e =>{ 
        e.preventDefault(); //se usa para evitar que se recargue la pág.
        setNota([...nota, notita]); //
        setNotita("");
    }

    const borrado = (index) => {
        const newNota = [...nota];
        newNota.splice(index, 1);
        setNota(newNota);
    }
    
    return(
        <>
        <h1>Agenda</h1>
        <label>Agrege una nota</label>
        <br/>
        <input type="text" id="nota" value={notita} onChange={(e) => setNotita(e.target.value)}></input>
        <button onClick={guardar}>Agregar una nota</button>
        <br />
        <ul>
            {nota.map((nota, index) => (
                <li key={index}>
                    <p>{nota}</p>
                    <button onClick ={() => borrado(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
        </>
    );
}

export default ListaDeNotas;