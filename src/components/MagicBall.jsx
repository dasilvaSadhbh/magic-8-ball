import { useState } from "react";
import computeResponse from "../computeResponse";
import Modal from "./Modal";

export default function MagicBall({displayModal, setDisplayModal}) {
  const [fortune, setFortune] = useState({ text: "8" });
  
  function handleButtonClk() {
    if (fortune.text === "8" || fortune.indecisive) {
      let eightBallResponse = computeResponse();
      setFortune(eightBallResponse);
    } else {
      setDisplayModal(true);
    }
  }

  function handleCloseModal() {
    console.log("button pressed");
    setFortune({ text: "8" });
    setDisplayModal(false);
  }

  return (
    <>
      {displayModal ? (
        <Modal closeModal={handleCloseModal} />
      ) : (
        <div className="sphere center-items gentle-tilt-move-shake" onClick={handleButtonClk}>
          <div className="outer-circle center-items">
            <div className={fortune.text==="8"? "inner-circle white-circle center-items" : "inner-circle blue-circle center-items"}>
              <span>{fortune.text}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
