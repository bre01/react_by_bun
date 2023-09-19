import React,{useRef} from "react";

export default function AddColorForm({onNewColor=f=>f}){
    const titleRef=useRef();
    const colorRef=useRef();
    const submitFunction=e=>{
        //after submit,this code will execute
       e.preventDefault();
       const title=titleRef.current.value;
        const color=colorRef.current.value;
        // on new color passed in as parameter
        onNewColor(title,color);
        //reset the form 
        titleRef.current.value="";
        colorRef.current.value="";
    };
    return (
        <form onSubmit={submitFunction}>
            <input ref={titleRef} type="text" placeholder="color title" required/>
            <input ref={colorRef} type="color" required/>
            <button>Add color</button>
        </form>
    )
}
function onNewColorLog(title,colorInHex){
    console.log("add new color title",title);
    console.log("add new hex number",colorInHex);
}