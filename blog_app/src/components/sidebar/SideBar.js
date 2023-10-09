import React from "react";
import "./sidebar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="../../images/me.jpg" alt="" className="sidebarImg" />
        <p className="sidebarPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id hic earum
          ea reiciendis sunt mollitia aut adipisci dolorum facilis alias quia.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <FacebookIcon className="sidebarIcon"/>
            <TwitterIcon className="sidebarIcon"/>
            <PinterestIcon className="sidebarIcon"/>
            <InstagramIcon className="sidebarIcon"/>
        </div>
      </div>
    </div>
  );
}
