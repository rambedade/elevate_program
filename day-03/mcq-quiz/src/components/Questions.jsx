import React ,{useState} from 'react'
import { mcqQuestions } from './mcqQuestions'
const Questions = () => {
    
  return (
    <div>
      <h1>MCQ QUIZ</h1>
      {mcqQuestions.map((q)=>(
        <div key={q.id}>
            <h2>{q.question}</h2>
            {q.options.map((option)=>(
                <div key={option}>
                    <label>
                        <input type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        />
                        {option}
                    </label>
                </div>
            ))} 
        </div>
      ))}
    
    </div>
  )
}

export default Questions
