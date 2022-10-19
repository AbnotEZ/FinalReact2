import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Pizza from './pages/Pizza';


function App() {


  return (
  
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
           <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pizza/:id' element={<Pizza/>}/>
           {/*  <Route path='/carrito' element={<Cart />} />
            <Route path='*' element={<NotFound/>} /> */}
          </Routes>
           <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
