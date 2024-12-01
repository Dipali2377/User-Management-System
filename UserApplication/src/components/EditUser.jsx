import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

let initialState = {
  name: "",
  email: "",
};
export const EditUser = () => {
  const { id } = useParams();
  console.log({ id });

  let [user, SetUser] = useState(initialState);

  async function GetUser() {
    let response = await axios.get(
      `https://masai-c67d3-default-rtdb.firebaseio.com/users/${id}.json`
    );

    SetUser(response.data);
  }
  function handleChange(e) {
    console.log(e);
    const { name, value } = e.target;

    SetUser({ ...user, [name]: value });
    // SetUser(initialState);
  }
  useEffect(() => {
    GetUser();
  }, []);

  async function handleUpdate() {
    console.log({ user });
    try {
      await axios.put(
        `https://masai-c67d3-default-rtdb.firebaseio.com/users/${id}.json`,
        user
      );
      alert("User updated successfully");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h1>Edit User</h1>
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
        </form>
        <button onClick={handleUpdate}>Update </button>
      </div>
    </div>
  );
};

// we should get id here to edit---> we make  get request--> fill data in inputs--->update--->repost updated data
