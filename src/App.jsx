import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import "./App.css";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Categories from "./Pages/Categories";
import AdminPortal from "./component/AdminPortal";
import LivingRoom from "./Categories/LivingRoom";
function App() {
  return (
    <>
      <Router>
        <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Cart" element={<Cart/>} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/about-us" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/catergory" element={<Categories/>} />
                    <Route path="/admin" element={<AdminPortal/>} />
                    <Route path="/living-room" element={<LivingRoom/>} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
