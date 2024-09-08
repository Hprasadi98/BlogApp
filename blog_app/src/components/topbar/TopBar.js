import React from "react";
import "./topbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
            <FacebookIcon className="topIcon"/>
            <TwitterIcon className="topIcon"/>
            <PinterestIcon className="topIcon"/>
            <InstagramIcon className="topIcon"/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link to="/home" style={{textDecoration:"none"}}>Home</Link></li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem"><Link to="/write" style={{textDecoration:"none"}}>WRITE</Link></li>
          <li className="topListItem"><Link to="/" style={{textDecoration:"none"}}>LOGOUT</Link></li>
        </ul>
      </div>
      <div className="topRight">
      <Link to="/settings" style={{textDecoration:"none"}}><img src="../../images/me.jpg" alt="" className="topImage" /></Link>
        <SearchIcon className="topSearchIcon"/>
      </div>
    </div>
  );
}
