import React, { useRef, useState, useEffect } from "react";
import { uploadFile } from "../service/Api";

function App() {
  const [file, setFile] = useState("");
  console.log(file);
  const [result, setresult] = useState(""); //stat for result

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const respone = await uploadFile(data);
        setresult(respone.path);
      }
    };
    getImage();
  }, [file]);

  const fileIntputRef = useRef(null);
  function handleClick() {
    fileIntputRef.current.click();
  }

  return (
    <div
      className="main-wrapper"
      style={{ backgroundImage: `url("/assets/wallpaper.avif")` }}
    >
      <div className="container">
        <div className="wrapper">
          <h1>File Sharing!</h1>
          <p>Upload File and share the download link🔗</p>
          <button onClick={() => handleClick()}>Upload</button>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            ref={fileIntputRef}
            className="mainInput"
            style={{ display: "none" }}
          />

          <a href={result}>{result}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
