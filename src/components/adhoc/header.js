import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Header = () => {

    const history = useNavigate();

    const goUrl = (url) => {
        history(url);
    }

    return (
        <div className="header-menu">
            <button className="header-menu__links" onClick={() => goUrl("/")}>Home</button>
            <button className="header-menu__links" onClick={() => goUrl("/use-reducer")}>UseReducer</button>
            <button className="header-menu__links" onClick={() => goUrl("/use-context")}>UseContext</button>
            <button className="header-menu__links" onClick={() => goUrl("/use-form")}>UseForm</button>
            <button className="header-menu__links" onClick={() => goUrl("/use-ref")}>UseRef</button>
            <button className="header-menu__links" onClick={() => goUrl("/use-call-back")}>UseCallBack</button>

        </div>
    )

}

export default Header


