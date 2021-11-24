
import React from 'react'
import './ContactInfo.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import { useForm } from 'react-hook-form';
import { db } from '../firebase.js'

function ContactInfo() {
  const {handleSubmit,register}=useForm();

  const onSubmit = (PersonData) => {
    db.collection('Messages').add(
      {
      Name:PersonData.Name,
      Email:PersonData.Email,
      Country:PersonData.Country,
      Country:PersonData.Phone_number,
      Mssg:PersonData.Mssg
    }
    )
  }
  return (
    
      <section>
        <div className="ContactMain">
          <div className="Contactdetail">
            <div>
              <h2>Get In Touch</h2>
              <ul class="Info">
                <li>
                  <span><LocationOnIcon style={{verticalAlign:"middle"}}/></span>
                  <span className="personal">India,Gujarat,Vadodara</span>
                </li>
                <li>
                  <span><EmailIcon style={{verticalAlign:"middle"}}/></span>
                  <span className="personal">neelmehta0086@gmail.com</span>
                </li>
                <li>
                  <span><CallIcon style={{verticalAlign:"middle"}}/></span>
                  <span className="personal">8320595618</span>
                </li>
              </ul>
            </div>
          </div>
            <div className="SendMssg">
              <h2>Drop A Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="FormBox">
                <div class="textbox i1"><input type="name" placeholder="Name" {...register('Name', { required: true })}/></div>
                <div class="textbox i1"><input type="Country" placeholder="Country" {...register('Country', { required: true })}/></div>
                <div class="textbox i1"><input type="email" placeholder="Email"{...register('Email', { required: true })}/></div>
                <div class="textbox i1"><input type="text" placeholder="Phone no." {...register('Phone_number', { required: true })}/></div>
                <div class="textbox i2"><textarea placeholder="Type a mssg" {...register('Mssg', { required: true })}></textarea></div>
                <div className="textbox i2">
                  <input type="submit"></input>
                </div>
                </div>
              </form>
              
            </div>
          
        </div>
      </section>
      
    
  )
}

export default ContactInfo
