import React, { useState } from 'react';
import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODVmN2U1OTAzYmQ4ODgxOTFkMTI4MTlhOWE0ZjU2MiIsIm5iZiI6MTczNjM2Mjc4OC43MjUsInN1YiI6IjY3N2VjYjI0YzgxYWNhYTYzZGJiMmI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Di0CBeEi9tG1X7KxWp961zY1vpCOb3XCcnx3wF2zOXg";
axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
    headers: {
    Authorization: `Bearer ${API_KEY}`
    },
    language: "en-US",
    include_adult: false 
};

const  useHttp =  ( URl, params = {} ) => {
const [ rcvdData, setRcvdData ] = useState([]);
const [loading, setLoading ] = useState(false);
const [error, setError ] = useState(false);
(async () => {
    try {
        setLoading(true); 
        setError(false);
        const { data } = await axios.get(URl, { ...options, params }); 
        setRcvdData(data);
        } catch (error) {
        setError(true);
        console.log(error.message); 
        }finally{
        setLoading(false); 
        }
})();
return [ rcvdData, loading, error ];
};

export default useHttp;







