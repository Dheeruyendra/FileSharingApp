import React, {useRef, useState, useEffect} from "react";
import {uploadFile} from "./Api";

function App(){

   const[file, setFile] = useState(''); 
   const[result, setresult] = useState('');

   function handleChange(event){
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
    }
   console.log(file);

    useEffect(()=>{
        const getImage = async () =>{
          if(file) {
            const data = new FormData();
            data.append("name", file.name);
            data.append("file", file);

            const respone = await uploadFile(data);
            setresult(respone.path);
          }
        }
        getImage();     
    },[file]);  

   const fileIntputRef = useRef(null);
   function handleClick(){
       fileIntputRef.current.click();
   }

    
   return (
        <div className="main-wrapper">
            <div className="container">
                <h1>File Sharing</h1>
                <p>Upload and download files</p>
                <button onClick = {()=> handleClick()}>Upload</button>
                <input type="file" onChange ={handleChange} ref = {fileIntputRef} className="mainInput"/>
                 <a href={result}>{result}</a>
            </div>
        </div>
   );
}

export default App;