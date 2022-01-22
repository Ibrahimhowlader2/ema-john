import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import OrderReviews from "./Pages/OrderReviews/OrderReviews";
import Header from "./Pages/Shared/Header/Header";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/orders" element={<OrderReviews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
