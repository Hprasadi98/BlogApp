import React from 'react'
import './post.css'
import { useNavigate } from 'react-router-dom'

export default function Post() {
  const navigate = useNavigate();
  return (
    <div className='post' onClick={()=>navigate('/single')}>
        <img src="../../images/2.jpg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit, amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quaerat a ipsa quisquam ullam, cum, iusto dolorum officiis minima fuga praesentium commodi velit suscipit mollitia nesciunt quod quo, asperiores vero?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quaerat a ipsa quisquam ullam, cum, iusto dolorum officiis minima fuga praesentium commodi velit suscipit mollitia nesciunt quod quo, asperiores vero?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quaerat a ipsa quisquam ullam, cum, iusto dolorum officiis minima fuga praesentium commodi velit suscipit mollitia nesciunt quod quo, asperiores vero?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quaerat a ipsa quisquam ullam, cum, iusto dolorum officiis minima fuga praesentium commodi velit suscipit mollitia nesciunt quod quo, asperiores vero?
        </p>
    </div>
  )
}
