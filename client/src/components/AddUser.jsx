import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {addUser} from '../service/api'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddUser = () => {

  const navigate = new useNavigate();
  
  const userData = {
    name: "",
    username: "",
    password: "",
    phone: "",
  };

  const [user, setUser] = useState(userData);
  const getValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user); 
    navigate('/');
  }

  return (
    <div className="container mx-auto w-50">
      <div className="mt-5">
        <center>
          <h4>MERN Stack Curd Application - Add User</h4>
        </center>
      </div>
      <div className="mt-5">
        <form autoComplete="off">
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => getValue(e)}
                name="name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={(e) => getValue(e)}
                name="username"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => getValue(e)}
                name="password"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">
              Phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="phone"
                onChange={(e) => getValue(e)}
                name="phone"
              />
            </div>
          </div>
          <center>
            <button type="button" className="btn btn-primary mx-1" onClick={() => addUserDetails()}>
              Add User
            </button>
            <Link to="/">
              <button type="button" className="btn btn-danger">
                Cancel
              </button>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
