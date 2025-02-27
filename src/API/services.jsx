import axios from "axios";

const BASE_URL = "http://localhost:3000/";

export const getStudentData = async() => {
    var result = await axios.get(`${BASE_URL}getStudent`);
    // console.log(result);
    return result;
}
