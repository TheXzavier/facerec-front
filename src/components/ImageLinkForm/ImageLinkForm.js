import React from 'react'
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
return (
 <div >
     <p className='f3 center black '>
     {'Enter The URL Of Image To Detect Faces'}
     </p>
     
     <div className='center'>
        <div class ="blurred-box" className='form center pa4 br3 shadow-5'>
           <input className='br2 shadow-3 f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
         <button 
         onClick={onButtonSubmit} 
         className='br3 w-30 grow f4 link ph3 pv2 dib white bg-light-purple shadow-3'>Detect</button>
         
         </div>
     </div>
    
 </div>


)
 
}
export default ImageLinkForm;