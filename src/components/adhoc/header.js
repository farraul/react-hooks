import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Header = () => {

    const history = useNavigate();

    const goUrl = (url) => {
        history(url);
    }

    return (
        <div className="header-menu">
            <button onClick={() => goUrl("/")}>Home</button>
            <button onClick={() => goUrl("/use-reducer")}>UseReducer</button>
        </div>
    )

}

export default Header


