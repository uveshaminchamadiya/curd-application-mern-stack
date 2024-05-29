import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteData } from "../service/api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let result = await getUsers();
    setUsers(result.data);
    console.log(result.data);
  };

  const deleteUser = async (id) =>{
    await deleteData(id);
    getAllUsers(); 
  }

  return (
    <div className="container mx-auto w-75">
      <div className="mt-5">
        <center>
          <h4>MERN Stack Curd Application - All Users</h4>
        </center>
      </div>
      <div className="mt-3">
        <Link to="/add">
          <button type="button" className="btn btn-primary">
            Add
          </button>
        </Link>
      </div>
      <div className="mt-3">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/update/${user._id}`}>
                    <button type="button" className="btn btn-success mx-1">
                      Edit
                    </button>
                  </Link>
                  <button type="button" className="btn btn-danger" onClick={()=> deleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
