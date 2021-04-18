import React, {Component} from 'react'
import Particles from 'react-particles-js';
import './App.css'
import Register from './components/Register/Register'
import SignIn from './components/SignIn/SignIn'
import Navigation from './components/Navigations/Navigation'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import ParallaxEffectGlareScale from './components/Logo2/Logo2'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './particles.css'



const particlesOptions = {
  
  particles: {
    number: {
      value: 125
    },
    density: {
      enable: true,
      value_area: 800
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  },
  
}

const initialState = {
  
    input : '',
    ImageURL : '',
    boxes:[],
    route:'signIn',
    isSignedIn:false,
    
    user:{
     id:'',
     name:'',
     email:'',
     entries:0,
     joined:'',
    }
}

class App extends Component {
 constructor() {
 super();
 this.state = initialState;
 
  }


loadUser = (data) =>{
  this.setState(
    {
    user: {
    id:data.id,
    name:data.name,
    email:data.email,
    entries:data.entries,
    joined:data.joined,
    }
  })
}

 getFaceLocation = (data) => {
   const image = document.getElementById('inputimg')
   const width = Number(image.width);
   const height = Number(image.height);
   return data.outputs[0].data.regions.map(face =>{
    const apiFace = face.region_info.bounding_box;
    
     return{
    leftCol : apiFace.left_col * width,
    topRow : apiFace.top_row * height,
    rightCol : width - (apiFace.right_col * width),
    bottomRow : height - (apiFace.bottom_row * height)
   }
   
  });

}

displayFaceBox = (boxes) => {
  this.setState({boxes:boxes})
}

onRouteChange = (route) => {
  if(route === 'signOut' || route === 'signIn'){
    
    this.setState(initialState)
  }
  else if(route === 'home'){
   
    this.setState({isSignedIn: true})
  }
  
  this.setState({route : route});
}



onInputChange = (event) => {
this.setState({input : event.target.value});
}

onButtonSubmit = () => {
  this.setState({ImageURL : this.state.input})
  fetch('http://localhost:3000/imageurl',{
      method:'post',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify({
        input:this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
  if(response) {
    fetch('http://localhost:3000/image',{
      method:'put',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify({
        id:this.state.user.id
      })
    })
    .then(response => response.json())
    .then(count =>{
      this.setState(Object.assign(this.state.user, {entries: count}))
    })

  }
  this.displayFaceBox(this.getFaceLocation(response))
}) 
  .catch(err => console.log(err))
}
 
 
  render()
 {
  const { isSignedIn, ImageURL, route, boxes } = this.state;
  
  return (
  <div className="App"> 
  <Particles className="particles"
  
  params={particlesOptions}
  
  />
  <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
  
  {route === 'home'
  
  ? 
  
  <div> 
  
  <ParallaxEffectGlareScale />
  <Rank name={this.state.user.name} entries = {this.state.user.entries}/>
  <ImageLinkForm 
  onInputChange={this.onInputChange} 
  onButtonSubmit={this.onButtonSubmit}/>
  <FaceRecognition boxes ={boxes} ImageURL={ImageURL}/>
  
  </div>
  
  :(
    
    route ==='signIn'
  ?<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
  :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
  
  )
  }
  
    
</div>
)
}
}
export default App;
