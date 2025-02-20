import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODVmN2U1OTAzYmQ4ODgxOTFkMTI4MTlhOWE0ZjU2MiIsIm5iZiI6MTczNjM2Mjc4OC43MjUsInN1YiI6IjY3N2VjYjI0YzgxYWNhYTYzZGJiMmI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Di0CBeEi9tG1X7KxWp961zY1vpCOb3XCcnx3wF2zOXg";
axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
headers: {
Authorization: `Bearer ${API_KEY}`
    },
};

export const fetchData = async ( URl, params = {} ) => {
    const { data } = await axios.get(URl, { ...options, params }); 
    return data;
}

