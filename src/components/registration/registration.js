import { useState } from 'react';
import './registration.css'

function RegistrationForm() {
  const [inputs, setInputs] = useState({});

 function handleSubmit(event) {
   event.preventDefault()
   console.log(inputs)
 }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
 }

 return (
   <div id="container">
     <form action="" onSubmit={handleSubmit} id="registration">

       <div className="details">
      <label htmlFor="orgname" className="col-leftr">Organization Name:</label>
         <input type="text" name="orgname" value={inputs.orgname || ''} onChange={handleChange} className="form-elect-input" /><br></br>
     </div>

     <div className="details">
     <label htmlFor="firstname" className="col-leftr">First Name:</label>
         <input type="text" name="firstname" value={inputs.firstname || ''} onChange={handleChange} className="form-elect-input"  /><br></br>
     </div>

     <div className="details">
      <label htmlFor="lastname" className="col-leftr">Last Name:</label>
         <input type="text" name="lastname" value={inputs.lastname || ''} onChange={handleChange} className="form-elect-input"  /><br></br>
     </div>

     <div className="details">
      <label htmlFor="email" className="col-leftr">Email Address:</label>
         <input type="text" name="email" value={inputs.email || ''} onChange={handleChange} className="form-elect-input"  /><br></br>
     </div>

     <div className="details">
      <label htmlFor="phone" className="col-leftr">Phone Number:</label>
         <input type="text" name="phone" value={inputs.phone || ''} onChange={handleChange} className="form-elect-input"  /><br></br>
     </div>


     <div id="btn">
      <button type="reset" id="cancel">Cancel</button>
      <button type="submit" id="register">Register</button>
     </div>
    </form>
   </div>

 );
}

export default RegistrationForm;
