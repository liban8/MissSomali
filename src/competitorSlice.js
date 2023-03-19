import { createSlice } from "@reduxjs/toolkit";
import competitors from './assets/competitor.json'

const initialState ={
    competitors:JSON.parse(window.localStorage.getItem('competitor')) || competitors,
    currentCompetitor: null,
    voteCount:0
}
export const competitorSlice =createSlice({
    name:'competitor',
    initialState,
    reducers:{
        setcurrentCompetitor: (state, action)=>{
            state.currentCompetitor = action.payload
        },
        IncreaseVote:(state)=>{
            state.voteCount= state.voteCount + 1
        },
        DecreaseVote: (state)=>{
            state.voteCount = state.voteCount-1
        },
        AddToCompetitor:(state, action)=>{
            let compIndex= state.competitors.findIndex(comp =>comp.Id==action.payload)
            state.competitors[compIndex].NumberofVotes =
            Number(state.competitors[compIndex].NumberofVotes) + Number(state.voteCount)
            window.localStorage.setItem('competitor', JSON.stringify(state.competitors  ))
        },
        resState :(state)=>{
            state.currentCompetitor = null;
            state.voteCount= 0
        }
    }
})
export default competitorSlice.reducer;
export const {setcurrentCompetitor, IncreaseVote, DecreaseVote, AddToCompetitor, resState} = competitorSlice.actions