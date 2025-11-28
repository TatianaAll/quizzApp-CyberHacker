import "./App.css";
import { type Question, questions } from "./data/data.tsx";
import { useState, useRef, type JSX } from "react";

interface ButtonProps {
  onClic: () => void;
  text: string;
}

function Button({ onClic, text }: ButtonProps) {
  return (
    <button className="btn btn-primary m-2" onClick={onClic}>
      {text}
    </button>
  );
}

function PlayMenu() {
  const nbr = Math.floor(Math.random() * questions.length - 1);
  const [askQuestion, setAskQuestions] = useState<Question | null>(null);
  const [message, setMessage] = useState("");
  /* icon for result */
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  /* Modal ref for show result's modal */
  const modalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <div className="d-flex justify-around">
        <Button
          onClic={() => {
            setAskQuestions(questions[nbr]);
            setMessage("");
            setIcon(null);
          }}
          text="Easy"
        />
        <Button
          onClic={() => {
            setAskQuestions(questions[nbr]);
            setMessage("");
            setIcon(null);
          }}
          text="Medium"
        />
        <Button
          onClic={() => {
            setAskQuestions(questions[nbr]);
            setMessage("");
            setIcon(null);
          }}
          text="Hard"
        />
      </div>

      <div>
        <p>{askQuestion?.question}</p>
        {askQuestion?.answers.map((answer, index) => (
          <Button
            key={index}
            text={answer}
            onClic={() => {
              if (modalRef.current) {
                modalRef.current.showModal();
              }

              if (askQuestion?.correctAnswer === index) {
                setMessage("correct");
                setIcon(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 text-[#25f5c4]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                );
              } else {
                setMessage(`wrong`);
                setIcon(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 text-[#b702c9]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                    />
                  </svg>
                );
              }
            }}
          />
        ))}

        {/* Modal for show result */}
        <dialog ref={modalRef} className="modal">
          <div className="modal-box">
            <h3 className="text-black">{message === "correct" 
              ? "Correct!" 
              : "Oops!"}
            </h3>

            {/* Result content */}
            <div className="flex items-center space-x-2 mt-2">
              {icon}
              <p className="text-black">
                {message === "correct"
                  ? "Move your pawns forward 2 cases."
                  : `The good answer is: ${askQuestion?.answers[
                      askQuestion.correctAnswer
                    ].toLowerCase()}`}
              </p>
            </div>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  modalRef.current?.close();
                  window.location.reload();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <section className="relative w-[80vw] mt-[5vh]">
        {/* NEON EFFECT WAHOU */}
        <div
          className="absolute -inset-1 bg-linear-to-r from-[#3ae6d2] to-[#ba00c8]
                  rounded-lg blur"
        ></div>

        {/* Quizz content */}
        <div className="relative px-7 py-6 bg-[#2c0735] flex items-center justify-center space-x-6">
          <div className="space-y-2">
            <div className="flex justify-center m-auto mb-4 w-28 mask-y-from-70%">
              <img
                src="https://github.com/TatianaAll/quizzApp-CyberHacker/blob/main/src/components/app/assets/Logo-GAME.png?raw=true"
                alt="CyberHacker's logo"
              />
            </div>
            {/* Call the component PlayMenu */}
            <PlayMenu />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
