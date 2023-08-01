import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Colors = ()=> {


    const {name}= useParams();
    
    useEffect(()=>{
        const body  = document.body;
        body.style.backgroundColor = name;

        
        return  ()=> body.style.backgroundColor = "";
    }, [name])
  
    
    return(
       <div> THIS IS {name.toUpperCase()}</div>
    )
}

export default Colors;