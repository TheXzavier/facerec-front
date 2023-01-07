import React from 'react'
import './SignIn.css'



class SignIn extends React.Component {
constructor(props) {
  super(props);
  this.state ={
    SignInEmail:'',
    SignInPassword:'',
    errorCheck:false
  }
}
 onEmailChange = (event) => {
   this.setState({SignInEmail : event.target.value})
 }

 onPasswordChange = (event) => {
  this.setState({SignInPassword : event.target.value})
}



onSubmitSignIn = () => {
  fetch('https://creative-halva-b15d9b.netlify.app/signin',{
    method:'post',
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify({
      email:this.state.SignInEmail,
      password:this.state.SignInPassword
    })
  }).then(response => response.json())
  .then(user =>
    {
    if(user.id){
    this.props.loadUser(user);
    this.props.onRouteChange('home');
  }else{
    this.setState({errorCheck:true})
  }
 
  })
 
}

  render(){
  const {onRouteChange} = this.props;

  
  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    <main className="pa4 black-80">
    <div className="measure ">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
        
        className="test br2 ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" type="submit" value="Sign in"/>
      </div>
      <div className="lh-copy mt3">
        <p onClick={() => onRouteChange('Register')} className="f6 b link dim black db pointer">Register</p>
        { this.state.errorCheck === true && <p>Your login credentials could not be verified, please try again.</p>}
      </div>

    </div>
    </main>
    </article>
    
    )
    

}

 
 
}
export default SignIn;
