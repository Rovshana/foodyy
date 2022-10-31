

import { Route,  Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages";
import CartPage from "./pages/CartPage";




function App() {
  return (
    <div>
   <Navbar/>
  <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/cartpage" element={<CartPage/>} />
  </Routes>
  
    </div>
  );
}

export default App;
