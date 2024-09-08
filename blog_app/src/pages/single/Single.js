import React from 'react'
import './single.css'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import TopBar from '../../components/topbar/TopBar'

export default function Single() {
  return (
    <>
    <TopBar/>
    <div className='single'>
        <SinglePost/>
        <SideBar/>
    </div>
    </>
  )
}
