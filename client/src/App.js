import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from './pages/Login'
import View from './pages/View'
import Reg from './pages/Userreg'
import  Forgetpass  from "./pages/Forgetpass"
function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/"  element={<Login />}/>
      <Route path="/view/:id"  element={<View />}/>
      <Route path="/reg"  element={<Reg />}/>
      <Route path="/forget"  element={<Forgetpass />}/>
    </Routes>
    
    </BrowserRouter>
  );
}

const rt=()=>{
  return "aathavan"
}

export default App;

module.exports=rt
