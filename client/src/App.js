import Users from "./components/Users";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="/update/:id" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
