import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react"; 
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

let name,username,password,phone;

const EditUser = () => {
  const userData = {
    name: "",
    username: "",
    password: "",
    phone: "",
  };

  const [user, setUser] = useState(userData);

  const navigate = useNavigate();
  const { id } = useParams();

  const loadUserDetails = async () => {
    try {
      const result = await getUser(id);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user details:", error);
    }
  };

  useEffect(() => {
    loadUserDetails(); 
  }, [id]);

  useEffect(() => {
    if (user && user.length > 0) {
      name = user[0].name;
      username = user[0].username;
      password = user[0].password;
      phone = user[0].phone;
    }
  }, [user]);

  const getValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/");
  };

  return (
    <div className="container mx-auto w-50">
      <div className="mt-5">
        <center>
          <h4>MERN Stack CRUD Application - Edit User</h4>
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
                defaultValue={name}
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
                defaultValue={username}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="password"
                onChange={(e) => getValue(e)}
                name="password"
                defaultValue={password}
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
                defaultValue={phone}
              />
            </div>
          </div>
          <center>
            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={() => editUserDetails()}
            >
              Edit User
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

export default EditUser;
