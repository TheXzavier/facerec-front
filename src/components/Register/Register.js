import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      email:'',
      password:'',
      name:'',
      errorCheck:1
    }
  }
   onNameChange = (event) => {
     this.setState({name : event.target.value})
   }
   onEmailChange = (event) => {
     this.setState({email : event.target.value})
   }
  
   onPasswordChange = (event) => {
    this.setState({password : event.target.value})
  }
  
  onSubmitSignIn = (event) => {
    event.preventDefault()
    fetch('https://facerec-api.vercel.app/register',{
      
      method:'post',
      headers:{'Content-Type' : 'application/json'},
      body: JSON.stringify({
       
        email:this.state.email,
        password:this.state.password,
        name: this.state.name
     })
   
    }).then(response => response.json())
    
    .then(user =>{
      if(user.id)
      {
      this.props.loadUser(user);
      this.setState({errorCheck:2});
      this.props.onRouteChange('home');
      }
      else
      {
        this.setState({errorCheck:3})
      }
   })
  }

  render() {
    
  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    <main className="pa4 black-80">
    <div className="measure ">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0">Register</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="Name" 
          name="Name"  
          id="Name"
          onChange={this.onNameChange} 
          />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address" 
          onChange={this.onEmailChange} 
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password" 
          onChange={this.onPasswordChange} 
          />
        </div>
        </fieldset>
      <div className="">
        <input 
       
       onClick={this.onSubmitSignIn}
        
        className="br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
      { this.state.errorCheck === 3 && <p className= "b">Congrats!! You Have Been Registered.</p> }
      { this.state.errorCheck === 3 && <p>Note:Make sure you do not enter an invalid email you will not be registered.</p> }
      </div>
    
    </div>
    
    </main>
    
    </article>
    
    )
}
 
}
export default Register;
