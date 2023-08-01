import React from "react";
import Colors from "./Colors";
import { Link, useParams, Route, Routes  } from "react-router-dom";
import ColorForm from "./ColorForm";
import { useState } from "react";




    const ColorList = ({colors})=>{

   
        const [Allcolors, setColors] = useState(colors)
          console.log(Allcolors)
    
           
    return(
        <>
        <h1> COLOR LIST</h1>
        <Link to="/colors/new"> Add Color</Link>
        
        
        <ul>
        {Allcolors.map((color)=> (

        
            <Link to={`/colors/${color.name}`}> {color.name}</Link>
            
        ))}
        </ul>
        </>
    )
}

export default ColorList;