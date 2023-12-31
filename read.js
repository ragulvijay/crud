
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { API_URL } from '../constants/constant';
import { useNavigate } from 'react-router-dom';

function Read() {
  

    const[apiData,setAPIData]=useState([]);
    const navigate=useNavigate();


    const updateUser=({id,firstname,lastname,email,mobile,address,checked}) => {
      localStorage.setItem('id',id)
      localStorage.setItem('firstname',firstname)
      localStorage.setItem('lastname',lastname)
      localStorage.setItem('email',email)
      localStorage.setItem('mobile',mobile)
      localStorage.setItem('address',address)
      localStorage.setItem('checked',checked)
      
      navigate('/update')
      };
  

   
  const deleteUser = async (id) => {
    await axios.delete(API_URL + id)
    callGetAPI(); 
    };
  const callGetAPI = async () => {
    const response=await axios.get(API_URL);
    setAPIData(response.data);
    };

 


  useEffect(() => {
    callGetAPI();
    }, []);
    

  return (
    <table>
      <thead>
        <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Address</th>
        <th>checked</th>
        <th>Delete</th>
        <th>Update</th>        
        </tr>
      </thead>
      <tbody>
        {
            apiData.map(data => (
                <tr key={data.id}>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
                <td>{data.address}</td>
                <td>{data.checked ? 'correct' : 'incorrect'} </td>
                
                
                <td> <button onClick={()=>
                deleteUser(data.id)} >Delete</button> </td>
                <td><button onClick={()=>
                updateUser(data)} >Update</button></td>
                
              </tr>
                
            ))
        }
        
        
        
      </tbody>
    </table>
  )
  }
  
  




export default Read;
