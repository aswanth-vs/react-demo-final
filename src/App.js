import { useState } from "react";
import "./App.css";
import ClassDummy from "./components/ClassDummy";
import User from "./components/User";
import CounterProg from "./components/CounterProg";

function App() {
  //creating a state
  const [username, setUser] = useState("");

  //array of users
  const userarray = [
    { user: "Max Miller", age: 23 },
    { user: "Maxwell Maner", age: 24 },
    { user: "Manuel Simpson", age: 39 },
  ];
  const getUser = () => {
    if (username) {
      alert(`Username: ${username}`);
    } else {
      alert("Enter a value");
    }
  };
  return (
    <>
      <h1 className="text-center text-primary mt-3">React!!</h1>
      <h3>Components</h3>
      <ul>
        <li>
          Functional Comps
          <br />- Ex:
          <b>
            <User uservalue={username} />
          </b>
        </li>
        <li>
          Class Based Comps
          <br />- Ex:
          <b>
            <ClassDummy />
          </b>
        </li>
      </ul>
      <h3>State: Used to store data and share it to other Components (parent to child)</h3>
      <div className=" d-flex justify-content-center mt-5">
        <form className=" d-flex justify-content-between border p-3 ">
          <input type="text" placeholder="Enter your Username" className="form-control me-3" onChange={(event) => setUser(event.target.value)} />
          <button className="btn btn-primary" onClick={getUser}>
            Submit
          </button>
        </form>
      </div>

      {/*  */}
      <h5>Array Representation</h5>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userarray.map((item, index) => {
            return (
              // if u want to use {} insted of () u must also use a return statement
              <tr>
                <td>{index + 1}</td>
                <td>{item.user} </td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="row">
        <div className="text-center border p-1">
          <CounterProg />
        </div>
      </div>
    </>
  );
}

export default App;
