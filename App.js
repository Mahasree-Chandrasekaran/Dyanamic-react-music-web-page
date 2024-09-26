import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import MusicBg from './images/Musicbg.jpeg'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${MusicBg})`,
           
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          minHeight: '100vh', // Ensure the background covers the full height of the page
          color: 'white', // Default text color
        }}
      >
        <Navbar />
        <div className='max-w-screen-md mx-auto pt-20'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles-list" element={<ArticlesList />} />
            <Route path="/article/:name" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
