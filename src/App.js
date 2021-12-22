import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from './pages/user/User.jsx';
import {
  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from "./pages/newPage/NewUser";
import ProductList from "./pages/productList/ProductList";




function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route path="/users" element={<UserList/>}/>
          <Route path="/users/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductList/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
