import { useState } from 'react';
import './adminlogin.css'


function AdminLogin() {
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
  <div className="Adm">
   <div id="search-details">
    <h3 id="tenants">List Of Tenant Users</h3>
       <form action="" onSubmit={handleSubmit} id="">
       <input type="search" name="usearch" value={inputs.usearch || ''} onChange={handleChange} id="search" placeholder="search users by id" />
    <button type="submit" name="usearch" id="btnsearch">
      <i className="fa fa-search trashio"></i>
    </button>
       </form>
   </div><br></br>

    <div id="container">

       <form action="" onSubmit={handleSubmit} id="">

      <div className="details">
           <input type="text" name="userone" value={inputs.userone || ''} onChange={handleChange} className="form-elect-inputa" placeholder="user_1" />
        <button type="reset" className="col-left">Deactivate</button>
      <i className="fa fa-trash trashio"></i><br></br>
        </div>

         <div className="details">
           <input type="text" name="usertwo" value={inputs.usertwo || ''} onChange={handleChange} className="form-elect-inputa" placeholder="user_2" />
           <button type="reset" className="col-left">Deactivate</button>
           <i className="fa fa-trash trashio"></i><br></br>
           </div>

            <div className="details">
           <input type="text" name="userthree" value={inputs.userthree || ''} onChange={handleChange} className="form-elect-inputa" placeholder="user_3" />
           <button type="reset" className="col-left">Deactivate</button>
              <i className="fa fa-trash trashio"></i><br></br>
              </div>
         

               <div className="details">
           <input type="text" name="userfour" value={inputs.userfour || ''} onChange={handleChange} className="form-elect-inputa" placeholder="user_4" />
           <button type="submit" className="col-left">Activate</button>
      <i className="fa fa-trash trashio"></i><br></br>
                 </div>

                  <div id="btn">
                   <button type="submit" id="btnreg">Add New User</button>
                  </div>

                 </form>

               </div>


  </div>
 );
}

export default AdminLogin;
