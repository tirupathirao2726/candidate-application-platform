import { createSlice } from "@reduxjs/toolkit";

const jobsListSlice = createSlice({
    name: "jobs",
    initialState:{
      currentJobs:[],
      limit:10,
      currentOffset:0,
      totalJobs:0,
    },
    reducers: {
        addJobs: (state:any, action:any) => {
            if(action.payload){
              return {...state,currentJobs:[...state.currentJobs,...action.payload.jdList],totalJobs:action.payload.totalCount}
            }
        }
    },
});

export const { addJobs } = jobsListSlice.actions;
export default jobsListSlice.reducer;
