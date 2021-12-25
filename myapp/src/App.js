import logo from './logo.svg';
import './App.css';
import Side from './Side';
import Top from './Top';
import Dashboard from './Dashboard';
import Userlist from './Userlist';
import Createuser from './Createuser';
import Productlist from './Productlist';
import Createproduct from './Createproduct';
import Edituser from './Edituser';
import Editproduct from './Editproduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div id="wrapper">
          <Side />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Top />
              <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/userlist" element={<Userlist />}></Route>
                <Route path="/createuser" element={<Createuser />}></Route>
                <Route path="/Productlist" element={<Productlist />}></Route>
                <Route path="/createproduct" element={<Createproduct />}></Route>
                <Route path="/Edituser" element={<Edituser />}></Route>
                <Route path="/Editprouct" element={<Editproduct />}></Route>
              </Routes>
              </div>
            </div>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
