import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop";
import Home from "./pages/home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        {/* <Route path="/admin" element={</>} /> */}
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
