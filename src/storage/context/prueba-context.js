
import React, { createContext, useState } from "react";


export const IdDataToContext = createContext({
    data: 1,
    setIdData: () => console.log(),
})

const PruebaContext = (props) => {

    const [data, setData] = useState(0);

    const setIdData = (id) => {
        setData(id);
    }

    const idDataContext = {
        data,
        setIdData,
    }

    return (
        <IdDataToContext.Provider value={idDataContext}>
            {props.children}
        </IdDataToContext.Provider>
    );

};


export default PruebaContext;



