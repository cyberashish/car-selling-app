
import './Sass/main.scss';
import CarPage from './Components/CarPage';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Home from './Components/Home';
import CarDetails from './Components/CarDetails';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}>
      <Route path='page/:page' element={<CarPage/>}/>
      <Route path='page/:page/:car' element={<CarDetails/>}/>
      <Route index element={<Hero/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
