import { Center } from '@chakra-ui/react';
import React from 'react'

const Prescription = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",boxShadow:""}}>
    <div style={{width:"700px",height:"900px"}}>
    <div style={{display:'flex',justifyContent:"space-between"}}>
        <div>
            <h1>DR AK Das</h1>
            <p>MBBS,FCPS</p>
            <p>Speciality:General Medicine</p>
            <p>Consultant:Medicine</p>
        </div>
        <div>
            <h1>Aims Delhi</h1>
            <p>Delhi,India</p>
            <p>phone:9853098757</p>
            <p>Sat to Thur:4pm to 5pm</p>
        </div>
    </div>
    <hr/>
    <div style={{display:'flex',justifyContent:"space-evenly"}}>
    <div>
    Date:17 Sept 2023
    </div>
    <div>
    Name:"Ghufran"
    </div>
    <div>
    Age:23
    </div>
    
    
    </div>
    <hr/>
    <div style={{
        width: "1px", /* Adjust the width of the line as needed */
        height: "400px",/* Adjust the height of the line as needed */
        backgroundColor: "black", /* Adjust the line color as needed */
        margin:"0 auto" /* Center the line horizontally */
      }}> <p style={{marginLeft:"40px"}}>R<sub>x</sub> </p></div>
      
    </div>
    </div>

  )
}

export default Prescription;