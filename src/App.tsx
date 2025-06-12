import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import PuzzlePage from './PuzzlePage'; // 👈 Make sure this path is correct

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      <main className={currentPage === 'home' ? 'landing' : 'puzzle-page'}>
        {currentPage === 'home' && (
          <>
            <h1 className="hero-title">Piece of Mind</h1>
            <h2 className="hero-subtitle">Flex Your Brain, One Piece at a Time</h2>
          </>
        )}

        {currentPage === 'puzzles' && <PuzzlePage />}
      </main>
    </>
  );
}

export default App;




