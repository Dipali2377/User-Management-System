import { useState } from "react";
import axios from "axios";

let initialState = {
  name: "",
  email: "",
};
export const AddUser = () => {
  let [user, SetUser] = useState(initialState);

  let url = `https://masai-c67d3-default-rtdb.firebaseio.com/users.json`;

  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.post(url, user);
      alert("User added  successfully");
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    console.log(e);
    const { name, value } = e.target;

    SetUser({ ...user, [name]: value });
    // SetUser(initialState);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter the user name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter the email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add User</button>
      </form>
    </div>
  );
};
