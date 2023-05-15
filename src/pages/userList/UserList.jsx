import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

import axios from "axios";

import { useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("http://localhost:5500/api/users/");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  // const deleteUser = async () => {
  //   try {
  //     const res = await axios.delete(
  //       "http://localhost:5500/api/users/" + deleteUserId
  //     );
  //   } catch {}
  // };

  const handleClick = (deleteUserId) => {
    // deleteUserId.preventDefault();
    const deleteUser = async () => {
      try {
        console.log(deleteUserId);
        const res = await userRequest.delete("users/" + deleteUserId);
      } catch (err) {
        console.log(err);
      }
    };

    deleteUser();
    // dispatch(addProduct({ ...product, quantity, color }));
  };

  return (
    <div>
      <br></br>
      <br></br>
      {/* <h3 id="talon_title">ПАНЕЛЬ АДМИНИСТРАТОРА</h3> */}
      <table className="table">
        <thead>
          {/* <tr> */}
          <th>id</th>
          <th>Username</th>
          <th>Email</th>
          <th>isAdmin</th>
          <th>Удалить</th>
        </thead>
        {users?.map((user) => (
          <>
            <tbody>
              <tr>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? <p>true</p> : <p>false</p>}

                  <br></br>
                </td>
                <td>
                  <form>
                    <button
                      type="submit"
                      className="red_button"
                      onClick={() => {
                        handleClick(user._id);
                      }}
                    >
                      Удалить пользователя
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
};

export default UserList;
