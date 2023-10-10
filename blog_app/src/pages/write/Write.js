import React from 'react'
import './write.css'
import AddIcon from '@mui/icons-material/Add';

export default function Write() {
  return (
    <div className='write'>
        <img src="../images/2.jpg" alt="" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                    <AddIcon className='writeIcon'/>
                </label>
                <input type='file' id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='Title' className="writeFormInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type='text' className="writeFormInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
