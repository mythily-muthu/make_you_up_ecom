import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    user: {}
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            console.log("payload:", action.payload)
            state.user = action.payload
        }
    }
})


// export action
export const { loginSuccess } = userSlice.actions;

export default userSlice.reducer;
