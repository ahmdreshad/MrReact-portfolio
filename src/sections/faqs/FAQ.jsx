import  { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Card from '../../components/Card'

function FAQ({faq}) {
  const [showAnswer, setShowAnswer] = useState(false)

  const answerToggleHandler = () => {
    setShowAnswer((prev) => !prev)
  }

  return (
    <Card className="faq">
      <div onClick={answerToggleHandler}>
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  )
}

export default FAQ
