import Taskbar from "./components/taskbar/Taskbar";
import React, { useState, useEffect } from "react";
import Picture from "./components/picture/Picture";
import "./p.css"
import Footer from "./components/footer/Fotter";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=16487762-893eb2202834ad1a98498f6b4&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Taskbar searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1>No images found</h1>}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="pictureGrill">
    
          {images.map((image) => <Picture key={image.id} image={image} />)}
        </div>
       
      )}
      <Footer/>
    </>
  );
}

export default App;
