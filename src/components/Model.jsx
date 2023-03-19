import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { AddToCompetitor, DecreaseVote, IncreaseVote, resState } from "../competitorSlice";
import { handleModal} from "../modalSlic";

function Model() {
  Modal.setAppElement("#root");
  const { isOpen } = useSelector((store) => store.modal);
  const { currentCompetitor, voteCount } = useSelector((store) => store.competitor);
  const dispatch = useDispatch();

  const handlesubmite= (event)=>{
    event.preventDefault();
    dispatch(AddToCompetitor(currentCompetitor.Id));
    dispatch(handleModal());
    dispatch(resState())
  }
  if (!currentCompetitor) return;
  
  return (
    <div>
      {/* <button onClick={()=>dispatch(handleModal())}>Open</button> */}
      <Modal isOpen={isOpen} onRequestClose={() => dispatch(handleModal())}>
        <div className="modalcontainer">
          <div className="flex">
            <div className="backgroundStyle ">
              <img src={currentCompetitor.Photo} alt="" />
            </div>
            <div className="information">
              <label>Name:</label>
              <span>
                {currentCompetitor.FirstName +
                  " " +
                  currentCompetitor.MiddleName +
                  " " +
                  currentCompetitor.LastName}
              </span>
              <label>RepresentingState:</label>
              <span>{currentCompetitor.RepresentingState}</span>
              <label>PersonalBackground:</label>
              <span>{currentCompetitor.PersonalBackground}</span>
              <label>EmploymentorSchool:</label>
              <span>{currentCompetitor.EmploymentorSchool}</span>

              

            </div>
        </div>
            <div className="votebuttons">

                <div className="votoesbtn">
                  <button className="vbtn" onClick={()=>dispatch(DecreaseVote())}>-</button>
                  <span className="votes">{voteCount}</span>
                  <button className="vbtn" onClick={()=>dispatch(IncreaseVote())}>+</button>
                </div>
                <form className="form" onSubmit={handlesubmite}>
                  <div className="col">

                  <button type="submit"className="colbtn">Processed</button>
                  </div>
                </form>
              </div>
          </div>
      </Modal>
    </div>
  );
}

export default Model;
