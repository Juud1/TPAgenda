import { useState } from "react";
import { Container } from "react-bootstrap";
import "./styles/ListaDeNotas.css";

function ListaDeNotas() {
    const [nota, setNota] = useState([]);
    const [notita, setNotita] = useState("");

    const guardar = e =>{ 
        e.preventDefault(); //se usa para evitar que se recargue la pág.
        setNota([...nota, {texto:notita}]); //
        setNotita("");
    }

    const borrado = (index) => {
        const newNota = [...nota];
        newNota.splice(index, 1);
        setNota(newNota);
    }
    
    return(
        <Container className="contenedor">
           
        <h1>Agenda</h1>

        <label className="labelEstilo" id="secTitulo" >Agrege una nota</label>
        <br/>
        <input className="input" type="text" id="nota" value={notita} onChange={(e) => setNotita(e.target.value)}></input>
        <button className="boton" onClick={guardar}>Agregar</button>
        <br />
        <ul className="nota">
            {nota.map((nota, index) => (
                <li key={index}>
                    <p>{nota.texto}</p>
                    <button className="button" onClick ={() => borrado(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
        </Container>
    );
}

export default ListaDeNotas;