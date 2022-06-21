import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYThiZTQ3ZDhkZDgzODNlZTA3NDkwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTY1Mzk0MSwiZXhwIjoxNjU1ODI2NzQxfQ.MO1RrVXzb1x1yT6lyxvxyFNmG8N3D_edFrXpgtDJHaY";
const TOKEN = localStorage.getItem('persist:root') && JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken : "";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})



export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: "Bearer " + TOKEN,
    }
})
