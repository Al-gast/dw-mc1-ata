import React from 'react'
import { Link } from 'react-router-dom';
import contact from '../dummy/contact';

export default function home() {
  return (
    <div>
      {contact?.map((item, index) => (
        <div key={index}>
            <Link to={`/detail/${item.id}`}>
                <div>
                    <img src={item.image} alt="image" />
                <div>
                    <p>@{item.username}</p>
                    <p>followers{item.follower}</p>
                </div> 
                </div>
            </Link>
               
        </div>
      ))}
    </div>
  )
}
