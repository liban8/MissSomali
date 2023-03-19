import React from 'react'
import { MdHowToVote } from "react-icons/md"
import { useDispatch } from 'react-redux';
import { handleModal } from '../modalSlic';
import { setcurrentCompetitor } from '../competitorSlice';
function Competitor({ Competitor}) {
  const BackgroundStyle = {
    width: "100%",
    background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url(${Competitor.Photo})`,
    backgroundPosition:"center",
    backgroundSize:"Cover"
    // backgroundRepeat: "no-repeat",
  };
  const dispatch = useDispatch();
  const votenow = ()=>{
    dispatch(setcurrentCompetitor(Competitor))
    dispatch(handleModal())
  }


  return (
    <div className='competitor' style={BackgroundStyle}>
     <div className="icons">
     <MdHowToVote className='vicon' onClick={votenow} />
     </div>
       <div className="info">
       <h1>{Competitor.FirstName+ " "+ Competitor.MiddleName}</h1>
        <span className='state'>{Competitor.RepresentingState}</span>
        <span className='nvote'>{Competitor.NumberofVotes}</span>
       </div>
    </div>
    
  )
}

export default Competitor