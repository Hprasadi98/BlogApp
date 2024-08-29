import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
    <>
    <TopBar />
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/write' element={<Write/>}></Route>
    </Routes>
    </>
  );
}

export default App;
