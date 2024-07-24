export default function Modal({ closeModal }) {
  return (
    <div className="modal center-items">
      <h1>Attention!</h1>
      <p>
        You are attempting to create a new fate, destiny has already chosen your
        answer. <br/>
        Perhaps you aren't indecisive after all...
      </p>
      <button onClick={closeModal}>I want a NEW destiny!</button>
    </div>
  );
}
