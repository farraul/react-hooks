import { useContext } from "react";
import Header from "../components/adhoc/header";
import { IdDataToContext } from "../storage/context/prueba-context";

{/*
1.  Creamos la carpeta storage y dentro otra llamada context y dentro de esta el archivocon la data.</p>
    src - storage - context - ejemplo-context.js/tsx 
2.  En el archivo app envolvemos a las rutas con  <PruebaContext> e importamos
3.  En este archivo enviamos y guardamos los datos
4.  En la home recivimos los datos

*/}

const UseContext = () => {

    const { setIdData } = useContext(IdDataToContext);

    const saveData = () => {
        //En el set le pasariamos los datos
        setIdData(3);
    }


    return (
        <>
            <Header />
            <div className="use-context">
                <button onClick={() => saveData()}>Guardar un 3 en context</button>
            </div>
        </>

    )
}

export default UseContext;