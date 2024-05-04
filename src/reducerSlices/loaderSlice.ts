import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loadingReducer",
    initialState: {
        isLoading: false,
        count:0
    },
    reducers: {
        updateIsLoading: (state, action) => {
            
            if(action.payload){
                state.count += 1;
                state.isLoading = action.payload;
            }
            else{
                state.count -= 1;
                if(state.count <= 0){
                    state.isLoading = false;
                }
            }
        }
    },
});

export const { updateIsLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
