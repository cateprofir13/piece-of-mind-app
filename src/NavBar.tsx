type NavBarProps = {
  setCurrentPage: (page: string) => void;
};

function NavBar({ setCurrentPage }: NavBarProps) {
  return (
    <nav>
      <h1></h1>
      <ul className="nav-links">
        <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
        <li><button onClick={() => setCurrentPage('puzzles')}>Quizz</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;