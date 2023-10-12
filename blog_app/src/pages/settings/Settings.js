import React from 'react'
import './settings.css'
import SideBar from '../../components/sidebar/SideBar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="../../../images/3.jpg" alt="" className="settingsImg" />
                    <label htmlFor="fileInput">
                        <AccountCircleIcon className='settingsPPIcon'/>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Prasadi'/>
                <label>Email</label>
                <input type="email" placeholder='prasadi@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
