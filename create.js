
import React,{useState} from 'react';
import { API_URL } from '../constants/constant';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create() {
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[mobile,setMobile]=useState('');
    const[address,setAddress]=useState('');
    const[checked,setChecked]=useState('false');
   
    const navigate=useNavigate();


    const postData=async () =>{
        await axios.post(API_URL, {
            firstname,
            lastname,
            email,
            mobile,
            address,
            checked
        });
        navigate('/read');
    }    

  return (

<div className='form'>
      <h1>Form Validate</h1>
      <div className='form' >
        <label htmlFor='name'>FirstName :</label>
        <input type='text' value={firstname} onChange={event =>setFirstName(event.target.value)}  placeholder='FirstName' required />
      </div>
      <br/>
      <div className='form'>
      <label htmlFor='name'>LastName :</label>
      <input type='text' value={lastname} onChange={event =>setLastName(event.target.value)}  placeholder='LastName' required />
      </div>
      <br/>
      <div className='form'>
        <label htmlFor='email' >Email :</label>
        <input type='email' className='email' value={email} onChange={event =>setEmail(event.target.value)}  placeholder='Enter email' required />
      </div>
      <br/>
      <div className='form'>
        <label htmlFor='tel'>Mobile :</label>
        <input type='tel' className='tel' value={mobile} onChange={event =>setMobile(event.target.value)}  placeholder='Enter Mobile number' required />
      </div>
      <br/>
      <div className='form'>
        <label htmlFor='address'>Address :</label>
        <input type='text' className='address' value={address} onChange={event =>setAddress(event.target.value)}  placeholder='Comment' required/>
      </div>
      <div className='checkbox'>
        <input type='checkbox' checked={checked} onChange={() =>setChecked(!checked)} name='vehicle'/>
            <label htmlFor='vehicle1'>Agree With Terms and Condition</label><br/>      
      </div>
      <div className='submit'>
      <button onClick={postData} type="submit" form="form1" >Submit</button>
    </div>

      </div>
   
    
  )
}

export default Create;
