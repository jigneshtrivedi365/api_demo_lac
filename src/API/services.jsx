import axios from "axios";

const BASE_URL = "http://localhost:3000/";

export const getStudentData = async() => {
    var result = await axios.get(`${BASE_URL}getStudent`);
    // console.log(result);
    return result;
}

export const postStudent = async (data) => {
    try {
        const result = await axios.post(`${BASE_URL}addStudent`, data);
        return result;
    } catch (error) {
        console.error("Error posting student:", error.response ? error.response.data : error.message);
        return null;
    }
};

