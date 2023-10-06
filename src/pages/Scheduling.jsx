import React from 'react'
import "../Style/Scheduling.css"
import axios from 'axios';
import { useState } from 'react';

const Scheduling = () => {
   
    const [name, setName] = useState("");
    const [AadharNumber, setAadharNumber] = useState(0);
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);
    const [clinicLocation, setclinicLocation] = useState("");
    const [contactNumber, setcontactNumber] = useState(0);
    const [appointmentDate, setappointmentDate] = useState("");
    const [appointmentTime, setappointmentTime] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
          
          name,
          contactNumber,
          AadharNumber,
          gender,
          appointmentDate,
          appointmentTime,
          clinicLocation,
          age,
          
          
          
        };
        console.log(data)
        
        
    
        // try {
        //   const apiUrl = "http://localhost:8094/doctorCnt/save";
        //   const response = await axios.post(apiUrl, data);
    
          
        //   console.log("Data sent successfully:", response.data);
        // } catch (error) {
          
        //   console.error("Error sending data:", error);
        // }
      };

    
  return (
    <div className="container">
    <h2>Appointments</h2>
    <form id="registrationForm" onSubmit={handleSubmit}>
      <label htmlFor="aadharNumberAbhaNumber">Aadhar Number/ Abha Number:</label>
      <input type="text" id="aadharNumberAbhaNumber" onChange={(e) =>  setAadharNumber(e.target.value)} required />

      <label htmlFor="name">Name:</label>
      <input type="text" id="name"  onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" onChange={(e) => setGender(e.target.value)} required>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="age">Enter your age:</label>
      <input type="date" id="age" onChange={(e) => setAge(e.target.value)} required />

      <label htmlFor="contactNumber">location:</label>
      <input type="text" id="contactNumber" onChange={(e) => setclinicLocation(e.target.value)} required />

      <label htmlFor="contactNumber">Contact Number:</label>
      <input type="text" id="contactNumber" onChange={(e) => setcontactNumber(e.target.value)} required />

      <div className="form-group">
      <label htmlFor="scheduledDate">Scheduled Date:</label>
      <input type="date" id="scheduledDate" name="scheduledDate" onChange={(e) => setappointmentDate(e.target.value)} required />
    </div>
    <div className="form-group">
      <label htmlFor="scheduledTime">Scheduled Time:</label>
      <input type="time" id="scheduledTime" name="scheduledTime" onChange={(e) => setappointmentTime(e.target.value)} required />
    </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Scheduling