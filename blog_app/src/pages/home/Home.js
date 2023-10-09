import React from 'react'
import './home.css'
import Header from '../../head/Header'
import Posts from '../../posts/Posts';
import SideBar from '../../sidebar/SideBar';

export default function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
        <Posts/>
        <SideBar/>
    </div>
    </>
  );
}
