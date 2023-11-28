import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Hub from "./pages/hub";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
