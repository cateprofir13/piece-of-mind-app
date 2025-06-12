import { useEffect, useState } from 'react';

function PuzzlePage() {
  const [prompt, setPrompt] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
const decodeHtml = (html: string): string => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const fetchNewPrompt = () => {
    fetch('https://opentdb.com/api.php?amount=24&category=18&difficulty=medium')
      .then((res) => res.json())
      .then((data) => {
        const question = data.results[0].question;
         const decodedQuestion = decodeHtml(question);
        setPrompt(decodedQuestion);
        // setPrompt(question);
      })
      .catch((err) => console.error('Error fetching puzzle:', err));
  };

  useEffect(() => {
    fetchNewPrompt();
  }, []);

  const handleSubmit = () => {
    console.log('User submitted:', userAnswer);
    setUserAnswer('');
    fetchNewPrompt();
  };

  return (
    <main className="puzzle-page">
      <h2 className="puzzle-title">Answer Me This</h2>
      {prompt ? <p className="puzzle-prompt">{prompt}</p> : <p>Loading...</p>}

      <input
        type="text"
        placeholder="Your answer..."
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}

export default PuzzlePage;