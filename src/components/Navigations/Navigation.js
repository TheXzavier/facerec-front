import React from 'react'


const Navigation = ({onRouteChange, isSignedIn }) => {
if(isSignedIn){
return (
 <nav style={{display:'flex', justifyContent: 'flex-end'}}>
        <p onClick ={() => onRouteChange('signIn')}className='f3 link dim white mr3 underline pa3 pointer'>Sign Out</p>
    </nav>
);
} 
else {
    return (
        <nav style={{display:'flex', justifyContent: 'flex-end'}}>
            <p onClick ={() => onRouteChange('signIn')}className='f3 link dim black underline pa3 mt2 mr3 pointer'>Sign in</p>
            <p onClick ={() => onRouteChange('Register')}className='f3 link dim black underline pa3 mt2 mr3 pointer'>Register</p>
        </nav>
       );}

    }

export default Navigation;