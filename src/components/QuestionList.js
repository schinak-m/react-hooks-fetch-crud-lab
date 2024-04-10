import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]) 

  useEffect(() => {
    fetch('http://localhost:4000/questions', {
      method: "GET"
    })
    .then((res) => res.json())
    .then((data) => setQuestions(data))
  }, [])

  const handleDelete = (deletedQuestion) => {
    const updatedQuestions = questions.filter((question) => deletedQuestion.id !== question.id)
    setQuestions(updatedQuestions)
  }

  const handleChange = (changedIndex) => {
     const updatedQuestions = questions.map((question) => {
      if(question.id === changedIndex.id){
        return changedIndex
      }else{
        return question
      }
     })
     setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(((question, index) => (
          <QuestionItem key={index} question={question} onDelete={handleDelete} onChange={handleChange}  />
        )))}
      </ul>
    </section>
  );
}

export default QuestionList;
