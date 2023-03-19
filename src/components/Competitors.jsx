import React from 'react'
import { useSelector } from 'react-redux'
import Competitor from './Competitor'

function Competitors() {
  const {competitors} =useSelector((Store)=> Store.competitor)
 
  // if(competitors) return
  return (
    <div className='competitors'>
        {
            competitors.map((competitor)=>(
                
                <Competitor key={competitor.Id} Competitor={competitor}/> 
            ))
        }
    </div>
  )
}

export default Competitors