import React, {useState, useEffect} from "react";
import { Route, Routes} from "react-router-dom";
import Colors from './Colors';
import ColorList from './ColorList';
import ColorForm from './ColorForm';


function Paths(){

    const initialColors =[
        {
      name: "red"
     },
        {
      name: "pink"
     },
     {
      name: "yellow"
     }
        ]
        
    const [colors, updateColors]= useState(initialColors);

    function handleAdd(newColor){
        updateColors((previousColor)=>[ ...previousColor,{ name : newColor}]);
    }


    return(
        
      <Routes>
        <Route exact path='/colors'element={<ColorList colors={colors}/>}></Route>
        <Route exact path='/colors/:name' element={<Colors/>}></Route>
        <Route exact path="/colors/new/"  element={<ColorForm addcolor={handleAdd}/>}></Route>
      </Routes>
   
    )
}
export default Paths;