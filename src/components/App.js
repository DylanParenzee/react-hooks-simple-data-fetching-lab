// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");

  const findImage = useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data);
      });
  }, []);

  return (
    <>
      <h1>Loading...</h1>
      <img src={dogImage.message} alt="A Random Dog" />
      <button onClick={findImage}> next image</button>
    </>
  );
}

export default App;
