import React from "react";
import { useState,  } from "react";
import { useNavigate } from "react-router-dom";
const ColorForm = ({addcolor}) => {

    const initialState = {
        color: ''
    };
     const navigate = useNavigate();

    const [formData, setFormData]= useState(initialState);

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setFormData(formData=>({
            ...formData,
            [name] : value
        }));
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        const {color} = formData;
        addcolor(color)
        setFormData(initialState);
        navigate("/colors");
    }

    return (
        <>
        <h1> Pick A Color</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="color"
            onChange={handleChange}
            value={formData.color}/>

            <button> Add Color</button>
        </form>
        </>
    )
}

export default ColorForm;