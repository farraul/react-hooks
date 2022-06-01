import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PruebaContext from './storage/context/prueba-context';

import UserReducer from './pages/usereducer'
import UseContext from './pages/usecontext'

import "./styles/styles.scss";
import UseForm from './pages/useform';

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

          </Routes>
        </BrowserRouter>
      </PruebaContext>

    </div >
  );
}

export default App;
