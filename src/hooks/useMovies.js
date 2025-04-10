import { useEffect, useState } from "react";
import { getMovie, getPopularMovies } from "../services/movies.service";

export function useMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(({ data }) => {
            setMovies(data.results);
        })
    }, []);

    return movies;
}

export function useMovie(movieId) {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        getMovie(movieId).then(({ data }) => {
            setMovies(data);
        })
    }, [movieId]);

    return movie;
}