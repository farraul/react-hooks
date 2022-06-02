import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PruebaContext from './storage/context/prueba-context';

import UserReducer from './pages/usereducer'
import UseContext from './pages/usecontext'

import "./styles/styles.scss";
import UseForm from './pages/useform';
import UseRef from './pages/useref';
import UseCallBack from './pages/usecallback';
import UseMemo from './pages/usememo';

function App() {
  return (
    <div className="App">
      <PruebaContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-reducer" element={<UserReducer />} />
            <Route path="/use-context" element={<UseContext />} />
            <Route path="/use-form" element={<UseForm />} />
            <Route path="/use-ref" element={<UseRef />} />
            <Route path="/use-call-back" element={<UseCallBack />} />
            <Route path="/use-memo" element={<UseMemo />} />

          </Routes>
        </BrowserRouter>
      </PruebaContext>

    </div >
  );
}

export default App;
