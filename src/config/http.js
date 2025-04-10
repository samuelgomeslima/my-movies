import axios from "axios";

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzVjMjVkOGRjNTdiYTcwMjUwNjcyNDMyM2ZjYzZkMyIsIm5iZiI6MTc0MzAzMzYxNy45MjUsInN1YiI6IjY3ZTQ5NTExYjhmYzM5ODk5NjEwOTk2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bsv0IWJRXcft7TmRlHkVNmU1wJkmMHA6l9H018WuQzg`
    }
});