import Header from "../components/adhoc/header";
import { useContext, useState } from "react";

import { IdDataToContext } from "../storage/context/prueba-context";


const Home = () => {

    const { data } = useContext(IdDataToContext);

    return (
        <>
            <Header />
            <div className="home">
                Esto viene el use Context: {data}
            </div>
        </>
    )

}

export default Home;