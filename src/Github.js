import React, { useState, useEffect } from "react";
export function GitHubUser({ login }) {
  const [data, setData] = useState();
  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return null;
}
export default function App(){}
//component function should not be async
async function GetData(login, setData) {
  if (!login) return; //returning null doing nothing
  let res = await fetch(`https://api.github.com/users/${login}`);
  setData(await res.json());
}

export function GitHubUserAsync({ login }) {
  //async
  const [data, setData] = useState();
  //if there is change of 'login'
  //can not use useEffect(async ())
  //you should write a async function inside the useEffect then call it
  console.log(localStorage.getItem("test"));
  useEffect(()=>{
    if(!login)return;
    const fetchData=async()=>{
      const res=await fetch(`https://api.github.com/users/${login}`);
      const headers=res.headers;
      const headersObj = {};
    headers.forEach((value, name) => {
      headersObj[name] = value;
    });

    // Access and log specific headers
    const contentType = headers.get('Content-Type');
    const serverHeader = headers.get('Server');
    
    // Log the entire headers object
    console.log(headersObj);
    
    // Log specific headers
    console.log('Content-Type:', contentType);
    console.log('Server:', serverHeader);
      console.log("before----------");
      console.log("header",res.headers.values);
      console.log("status",res.status);
      console.log("response ok?",res.ok);
      console.log("response body",res.body)

      setData(await res.json());

    } 
    fetchData().catch(console.error);
  }
    ,[login]);

  if (data) return <pre> {JSON.stringify(data, null, 2)}</pre>;
  return null;
}
