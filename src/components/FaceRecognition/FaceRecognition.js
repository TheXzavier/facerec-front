import React from 'react'
import  './FaceRecognition.css'



const FaceRecognition = ({ImageURL, boxes}) => {
return (
 <div className='center ma'>
     <div className='absolute mt2'>
       <img id='inputimg' className="shadow-4 br3" alt='' src={ImageURL} width='500px' height='auto' />
       {boxes.map(box =>
          <div key={`box${box.topRow}${box.rightCol}`}
          className ='bounding-box'
          style={{top:box.topRow, right:box.rightCol, left:box.leftCol, bottom:box.bottomRow}}>

</div>
    )}
    
 </div>
 
 </div>
 
);
 }

export default FaceRecognition;