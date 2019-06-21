import React, { Component }  from 'react'; 
import Navigation from './components/Navigation/Navigation'; 
import FaceRecognition from './components/FaceRecognition/FaceRecognition'; 
import Clarifai  from 'clarifai';
import Logo from './components/Logo/Logo'; 
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'; 
import Rank from './components/Rank/Rank'; 
import Particles from 'react-particles-js';
import './App.css';  

const app = new Clarifai.App({
  apiKey:'573626925c2e4086992618c56bc6d703'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30, 
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component{ 
  constructor() {
    super();
    this.state = {
      input: '', 
    }
  } 

  onInputChange = (event) => {
    console.log(event.target.value); 
  } 

  onButtonSubmit = () => {
    console.log('click'); 
    app.models
    .predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg")
    .then(
    function(response) {
     console.log(response); 
    },
    function(err) {
      // there was an error
    }
  );
    
  }

  render() {
    return (
      <div className="App"> 
      <Particles 
      params={particlesOptions}
      />
      <Navigation/> 
        <Logo/> 
        <Rank/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/> 
        {<FaceRecognition/>} 
      </div>

    )
  }
}  

export default App; 