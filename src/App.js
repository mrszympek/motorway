import React, { useEffect, useState } from 'react';
import './App.scss';
import { Gallery } from "./components/gallery";
import { SampleForm } from './components/sample-form'

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app'>
      <Gallery images={images}/>

      <SampleForm />
    </div>
  );
}

export default App;
