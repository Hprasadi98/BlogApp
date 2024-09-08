import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";

function App() {
    return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/write' element={<Write/>}></Route>
      <Route exact path='/' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/settings' element={<Settings/>}></Route>
      <Route path='/single' element={<Single/>}></Route>
    </Routes>
    </>
  );
}

export default App;
