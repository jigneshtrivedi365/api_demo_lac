import { useState } from "react";
import { getStudentData } from "../API/services";
import { useEffect } from "react";

export const Studentlist = () => {
    const [students,setStudents] = useState([]);

    const getStudent = async () => {
        const response = await getStudentData();
        if (response.data.status === 200) {
            setStudents(response.data.result);
        }
    };

    useEffect(() => {
        getStudent(); 
    }, []);

    useEffect(() => {
        console.log("loader stop:: "); 
    }, [students]);
    return (
        <>
            <h2>student list page</h2>
            <ul>
                {
                    students.map(( student ) => {
                       return <li key={student.id}>{student.course_name}</li>;
                    })
                }
            </ul>
        </>
    );
}