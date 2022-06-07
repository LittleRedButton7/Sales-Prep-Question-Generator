import React, {useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const textRef = useRef();
  let colors = ["#ffff00", "#90ee90", "#ffa500", "#ff68ff", "#a9a9e7", "#E983D8", "#00FFFF"];

  const getQuestion = () => {
    fetch("/questions")
    .then(res => res.json())
    .then((data) => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuestion(data[randomNumber])
    })
  };

  // useEffect(() => {
  //   getQuestion();
  // }, []);

  useEffect(() => {
    textRef.current.style.color =
    colors[Math.floor(Math.random() * colors.length)]
  }, [question]);


  return (
    <div className="App">
      <h1>Sales Preparation</h1>
      <h3>Click the button below for the next random question or objection to overcome.</h3>
      <div className="question-container">
        <p ref={textRef}>{question.text}</p>
        <div className="button-cont">
          <button className="button" onClick={getQuestion}>Next Question</button>
        </div>
      </div>
    </div>
  )
}

export default App

