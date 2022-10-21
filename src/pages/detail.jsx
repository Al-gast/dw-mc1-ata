import React from 'react'
import { useParams } from "react-router-dom";
import contact from '../dummy/contact';

export default function Detail() {
    const params = useParams();
    const data = contact[parseInt(params.id - 1)]
  return (
    <div>
        <div>
            <img src={data.image} alt="image" />
            <p>{data.username}</p>
            <div>
                <p>
                    {data.follower}
                </p>
                <p>
                    {data.following}
                </p>
            </div>
            <div>
                <p>followers</p>
                <p>following</p>
            </div>
        </div>
    </div>
  )
}
