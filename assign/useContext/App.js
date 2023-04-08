import "./styles.css";
import Home from "./component/Home";
import About from "./component/About";
import { Routes, Route, Link } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
export default function App() {
  return (
    <>
      <NoteState>
        <div>
          <ul>
            <li>
              
              <Link to="/">Home </Link>
            </li>
            <li>
              
              <Link to="/about">About </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </NoteState>
    </>
  );
}
