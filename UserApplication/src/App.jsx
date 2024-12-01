import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UsersList } from "./components/UsersList";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { Link } from "react-router-dom";
import "./components/navbar.css";
import { NotAdmin } from "./components/NotAdmin";
import { PrivateRoute } from "./components/PrivateRoute";
function App() {
  return (
    <>
      <div className="navbar">
        <Link to="/">Users</Link>
        {/* <Link to="/edit">Edit</Link> */}
        <Link to="/add">Add User</Link>
      </div>
      <Routes>
        <Route path="/" element={<UsersList />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditUser />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/not-admin" element={<NotAdmin />}></Route>
      </Routes>
    </>
  );
}

export default App;
