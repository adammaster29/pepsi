
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import '../Responsive.css'
import '../News.css'
import Home from './components/Home'
import Productos from './components/Productos'
import News from './components/News'
import About from './components/About'

function App() {

  return (
<>  

<HashRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/productos' element={ <Productos /> }/>
    <Route path='/news' element={<News/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>

</HashRouter>
</>



     
    


  )
}

export default App
