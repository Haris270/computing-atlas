
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Timeline from "./pages/Timeline";
import Algorithms from "./pages/Algorithms";

function App() {
  //const [count, setCount] = useState(0)

  return(
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/timeline' element={<Timeline/>}/>
          <Route path='/algorithm' element={<Algorithms/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App;
