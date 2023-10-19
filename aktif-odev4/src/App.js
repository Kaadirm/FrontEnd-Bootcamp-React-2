import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Orders from "./components/Orders";
import Suppliers from "./components/Suppliers";
import NotFound from "./components/NotFound";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      {/* <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/suppliers">Suppliers</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <MyForm />
    </>
  );
}

export default App;
