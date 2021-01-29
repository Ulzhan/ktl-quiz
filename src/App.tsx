import {useState, useMemo, useCallback} from 'react';
import { data } from './data';
import './App.css';

const App = () => {

  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionId, setQuestionId] = useState(1);

  const question = useMemo(() => data.find((item) => item.id === questionId), [questionId]);

  const onNextClick = useCallback((id: number) => {
    setQuestionId(id + 1);
    setShowAnswer(false);
  }, []);
  return (
    <div className={showWelcomePage ? "App" : "App-game"}>
      <header className="App-header">
        {showWelcomePage || !questionId ? (
          <div className="title">
            <div onClick={() => setShowWelcomePage(false)}>
              Back to KTL
          </div>
          </div>
        ) : (
          <div className="quiz">
            <div className="question">
              <div style={{fontSize: '40px'}}>Вопрос {questionId} :</div>
              {question?.type === 'img' ? (
                <div style={{display: 'flex', alignItems: 'center', flexDirection: "column", marginTop: '20px'}}>
                    <img src={question.img} width="600px" alt=""/>
                  <div style={{fontSize: '30px'}}>{question?.question}</div>
                </div>
              ) : 
                question?.question
              }
            </div>
            <div className="showAnswer" onClick={() => setShowAnswer(true)}>
                 Показать ответ
            </div>
            {showAnswer && (
              <div className="answer">
                  {question?.ansImg ? (
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
                      <img src={question.ansImg} width="600px" alt="" />
                    </div>
                  ) : question?.answer}
              </div>
            )}
            <div className="next" onClick={() => onNextClick(question?.id || questionId)}>
                Next
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
