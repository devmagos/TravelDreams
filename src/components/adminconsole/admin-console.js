import { useState } from 'react';
import './adminconsole.css'


function AdminConsole() {
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
       
  <div className="Admc">
   <h2 id="admin-text">Admin Console</h2>

   <img src="#" id="man" alt="" />

    <div id="container">

      <form action="" onSubmit={handleSubmit}  id="">

      <div className="details">
                               <label htmlFor="uname" className="">Username:</label>&nbsp;&nbsp;
       <input type="text" name="uname" value={inputs.uname || ''} onChange={handleChange} className="form-elect-inputac" /><br></br>
       </div>

        <div className="details">
                               <label htmlFor="pwd" className="">Password:</label>&nbsp;&nbsp;
                               <input type="text" name="pwd" value={inputs.pwd || ''} onChange={handleChange} className="form-elect-inputac" /><br></br>
         </div>

          <div id="btn">
           <button type="submit" id="register">Submit</button>
          </div>

         </form>

        </div>


  </div>
 );
}

export default AdminConsole;
