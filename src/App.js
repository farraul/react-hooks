import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import UserReducer from './pages/usereducer'
import "./styles/styles.scss";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-reducer" element={<UserReducer />} />

        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
