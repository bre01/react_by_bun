import { useState } from "react";
import AddColorForm from "./Form";

export default function ColorApp(){
    const [titlesAndColors,setColors]=useState([{First:0x000000},{Second:0x101010}])
    const onNewColor=(title,colorInHex)=>{
        const newTestArray=titlesAndColors;
        newTestArray.push({[title]:colorInHex});
        const newArray = [...titlesAndColors, { [title]:colorInHex }];
  // Update the state using the new array
  setColors(newTestArray);
        console.log("add succeed");
        console.log(titlesAndColors);
    }
    return(
        <>
        {titlesAndColors?.map((item,index)=>
        {   console.log(item);
            return <p>{index}</p>;}
    )}
        <AddColorForm onNewColor={onNewColor}></AddColorForm>
    </>
    )
    
}