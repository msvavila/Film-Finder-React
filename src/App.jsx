import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';

import './App.css';

const API_KEY = "28493f65";
const App = () => {
    const [movies, setMovies] = useState([]);
    const [sortBy, setSortBy] = useState('default');
    const [loading, setLoading] = useState(true);
    
    async function fetchMovies(term) {
        setLoading(true);
        try {
            const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(term)}&type=movie`;
            const response = await fetch(url);
            const data = await response.json();
            setMovies((data.Search || []).slice(0,8));
        } catch (error) {
            console.error(error);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchMovies('Spider-Man');
    }, []);
    const sortedMovies = [...movies];

    if (sortBy === 'az') {
        sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    }
    
    else if (sortBy === 'za') {
        sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    else if (sortBy === 'year-new') {
        sortedMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
    }

    else if (sortBy === 'year-old') {
        sortedMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
    }


    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Header onSearch={fetchMovies} onSortChange={setSortBy} />
                        <MovieList movies={sortedMovies} loading={loading} />
                    </>
                } />
                <Route path="/movie/:imdbID" element={<MovieDetails />} />
            </Routes>
            <Footer />S
        </div>
    );
};

export default App;