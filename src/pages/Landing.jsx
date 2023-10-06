// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Web page</title>
//     <link rel="stylesheet" href="style1.css">
// </head>
// <body>
    
// </body>
// </html>


import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/landing.css"
import DocImage from '../images/doc-aid1.img.png';
const Landing = () => {
  return (
    <div className="main">
    <div className="content">
    <img src={DocImage} className='doclogo' alt="" /> <br />
        <h1 className='tag'>
           
            Convenience <br />
            For the savior<br />
            It Solution
        </h1>
        <div className="form">
            <h2>Sign up Here</h2>
            <input type="text" name="name" placeholder="Enter the Name" />
            <input type="text" name="mobile" placeholder="Enter the Mobile" />
            <input type="email" name="email" placeholder="Enter the Email" />
            <input type="text" name="State" placeholder="Enter the State" />
            <button className="btnn"><a href="#">Register</a></button>
        </div>
    </div>
</div>

  )
}

export default Landing