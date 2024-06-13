import './App.css';
import Header from './components/Header/Header';
import NotesPage from './pages/NotesPage/NotesPage';
import NotePage from './pages/NotePage/NotePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <Router>
      <div className="container my-5">
        <Header />
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
