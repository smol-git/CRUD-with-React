import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./userReducer";

function Update(){
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const existingUser = users.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [nameUpdate, setNameUpdate] = useState(name)
    const [emailUpdate, setEmailUpdate] = useState(email)

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: nameUpdate,
            email: emailUpdate
        }))
        navigate('/');
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input type="text" name="name" className="form-control" placeholder="enter name" value={nameUpdate}
                        onChange={e => setNameUpdate(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" className="form-control" placeholder="enter email" value={emailUpdate}
                        onChange={e => setEmailUpdate(e.target.value)}/>
                    </div><br />
                    <button className="btn btn-info">Update</button>
                </form>

            </div>

        </div>
    )

}
export default Update;