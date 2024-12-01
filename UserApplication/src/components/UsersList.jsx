import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../components/userlist.css";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
export const UsersList = () => {
  let [users, setUserList] = useState([]);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  async function FetchUsers() {
    let response = await axios.get(
      `https://masai-c67d3-default-rtdb.firebaseio.com/users.json`
    );
    let arr = [];
    for (let key in response.data) {
      // console.log(key); // here we want array of objects
      arr.push({ id: key, ...response.data[key] });

      setUserList([...arr]);
    }
  }

  const heading = {
    textAlign: "center",
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  async function handleDelete(id) {
    let wantDelete = confirm("Are you sure?");
    console.log("Confirm value: ", wantDelete);
    if (wantDelete == true) {
      try {
        await axios.delete(
          `https://masai-c67d3-default-rtdb.firebaseio.com/users/${id}.json`
        );
        alert("User deleted successfully.");
        FetchUsers();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? "Your are admin" : "Click button to Admin"}
      </button>
      <h1 style={heading}>User List</h1>

      <div className="user-container">
        {users.map((user) => {
          return (
            <div key={user.id} className="card">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              {isAdmin && (
                <>
                  <Link to={`/edit/${user.id}`}>Edit✍️</Link>
                  <button onClick={() => handleDelete(user.id)}>
                    Delete ❎
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
