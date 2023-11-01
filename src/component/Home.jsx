import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

function Home(){
    const users = useSelector((state) => state.users);
    console.log(users)
    return (
      <div className="container">
        <h2>Crud App with React js and Redux Toolkit</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
                <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                  <button className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    );
}

export default Home;