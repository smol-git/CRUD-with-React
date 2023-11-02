import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./userData";

const userSlice = createSlice({
name: "users",
initialState: userList,
reducers:{
    addUser: (state,action) => {
        state.push(action.payload)
        console.log(action)
    },
    updateUser: (state,action) => {
        const {id, name, email} = action.payload;
        const updatingUser = state.find(user => user.id == id);
        if(updatingUser){
            updatingUser.name = name;
            updatingUser.email = email;
        }
    },
    deleteUser: (state, action) => {
        const{id} = action.payload;
        const uu = state.find(user => user.id == id );
        if(uu){
            return state.filter(f => f.id !== id);
        }
    }
}
})
export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;