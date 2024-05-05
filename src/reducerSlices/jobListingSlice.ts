import { createSlice } from "@reduxjs/toolkit";

type InitialJobState  = {
  currentJobs:any[];
  limit:number;
  currentOffset: number;
  totalJobs: number;
}

const initialState:InitialJobState = {
  currentJobs:[],
  limit:10,
  currentOffset:0,
  totalJobs:0,
}
const jobsListSlice = createSlice({
    name: "jobs",
    initialState:initialState,
    reducers: {
        addJobs: (state:InitialJobState, action:any) => {
            if(action.payload){
              return {...state,currentJobs:[...state.currentJobs,...action.payload.jdList],totalJobs:action.payload.totalCount}
            }
        },
        reset:() => {
          return initialState
        }
    },
});

export const { addJobs } = jobsListSlice.actions;
export default jobsListSlice.reducer;
