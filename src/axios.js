import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-5ec40/us-central1/api' //the api url
});

export default instance;