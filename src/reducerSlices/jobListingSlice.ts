import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialJobState  = {
  currentJobs:any[];
}

const initialState:InitialJobState = {
  currentJobs:[],
}
const jobsListSlice = createSlice({
    name: "jobs",
    initialState:initialState,
    reducers: {
        addJobs: (state:InitialJobState, action:PayloadAction<InitialJobState>) => {

            if(action.payload){
              return {...state,currentJobs:[...state.currentJobs,...action.payload.currentJobs]}
            }
        },
        reset:() => {
          return initialState
        }
    },
});

export const { addJobs } = jobsListSlice.actions;
export default jobsListSlice.reducer;
