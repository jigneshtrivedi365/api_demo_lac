import { useState } from "react";
import { postStudent } from "../API/services";

export const Form = () => {

    const [formData,setFormData] = useState({
        "name":"",
        "roll_no":"",
        "course_name":""
    });
    //Sucess state
    // Error state

    const onInputHandle = (e) => {
        setFormData({...formData,[e.target.name]:[e.target.value]})
    }
    const handleFormSubmit = async(event) => {
        event.preventDefault();
        if( formData.name != "" && formData.roll_no != "" && formData.course_name != "" ){
            const res = await postStudent(formData);
            if( res.data.status ){
                alert("Insert Success");
            }
        }

    }
    return (
        <>
            <form onSubmit={handleFormSubmit} method="POST">
                <label htmlFor="">Name: </label> <input type="text" name="name" onChange={onInputHandle} value={formData.name} /> <br/>
                <label htmlFor="">Roll No: </label> <input type="text" name="roll_no" onChange={onInputHandle} value={formData.roll_no} /> <br/>
                <label htmlFor="">Course Name: </label> <input type="text" name="course_name"  onChange={onInputHandle} value={formData.course_name} /> <br/>
                <input type="submit" name="submit" value="submit"/>
            </form>
        </>
    );
}