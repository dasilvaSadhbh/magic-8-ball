import { useState } from "react";
import MagicBall from "./components/MagicBall";
import "./App.css";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      {!displayModal && <h1>Your future awaits...</h1>}
      <MagicBall setDisplayModal={setDisplayModal} displayModal={displayModal}/>
    </>
  );
}

export default App;
