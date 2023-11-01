import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home';
import Create from './component/Create';
import Update from './component/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/edit/:id' element={<Update />}></Route>
        </Routes>

    </BrowserRouter>
)
}

export default App;