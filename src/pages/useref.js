import Header from "../components/adhoc/header";
import { useEffect, useState, useRef} from "react";


{/* 
1.  No redenderiza cuando cambia, nos puede servir para saber el estado "anterior" con un useeffect[] de por medio. Al no redenderizar se ve en el siguiente redenderizado.

*/}

const UseRef = () => {

    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);


    return (
        <>
            <Header />
            <div className="use-ref">

                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <h2>Current Value: {inputValue}</h2>
                <h2>Previous Value: {previousInputValue.current}</h2>


            </div>
        </>

    )
}

export default UseRef;