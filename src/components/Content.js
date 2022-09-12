import React from 'react'
import Image from './images/fb.png'

export default function Content() {
    return(
        <div className='content'>
                <img src={Image} alt="facebook-blue-logo" />
                <p>Facebook helps you connect and share with the people in your life.</p>
        </div>
    )
};
