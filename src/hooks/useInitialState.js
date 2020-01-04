import { useState, useEffect } from 'react';

const useInitialState = API => {
  // const [ variableDeEstado, actualizarEstado ] = useState
  const [video, setVideo] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3000/initalState') //API
    fetch(API)
      .then(response => response.json())
      .then(data => setVideo(data));
  }, []);

  // console.log(video);
  return video;
};

export default useInitialState;
