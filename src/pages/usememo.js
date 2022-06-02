import Header from "../components/adhoc/header";
import { useEffect, useState, useRef} from "react";
import { procesoPesado } from "../helpers/procesoPesado";
import { useCouter } from "../components/generic/useCouter";
import { useMemo } from "react";


/* Conectamos con 2 archivos  useCouter y el proceso pesado
Guarda en una variable para que la utilizemos sino cambia el hook [] no tira la función del medio: 
const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);. 
Esto nos permite que no tire la funcion si alguien no setea el hook desde otro lado
*/

const UseMemo = () => {
    const { counter, increment } =  useCouter( 5000 );
    const [ show, setShow ] = useState(true);
    
/* Esta variable hace una copia y si no cambia counter no se modifica  */ 

   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <>
            <Header />
            <div className="use-ref">

            <h3>Counter: <small>{ counter }</small>  </h3>
            <p> { memoProcesoPesado } </p>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>


            </div>
        </>

    )
}

export default UseMemo;