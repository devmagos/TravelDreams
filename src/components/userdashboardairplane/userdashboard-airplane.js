import { useState } from 'react';
import './userdashboard-airplane.css'


function AirplaneDashboard() {
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

   <div id="userplanedash">

    <div id="icons">
     <i className="fa fa-home iconcolor ifsize2"></i>
     <i className="fa fa-car iconcolor ifsize"></i>
     <i className="fa fa-bus iconcolor ifsize"></i>
     <i className="fa fa-plane active iconcolore ifsize2"></i>
     <i className="fa fa-train iconcolor ifsize"></i>
    </div>

    <div id="datareg">

         <form action="" onSubmit={handleSubmit} id="powerdata">

      <div className="details">
             <input type="radio" name="trip" value={inputs.trip || ''} onChange={handleChange} className="radio-input" />
        <label htmlFor="trip" className="">Return Trip</label>
             <input type="radio" name="flight" value={inputs.flight || ''} onChange={handleChange} className="radio-input" />
             <label htmlFor="flight" className="">One way Flight</label>
         <br></br>
       </div>

          <div className="details">
             <label htmlFor="duration" className="">Duration of Flight</label>&nbsp;
             <input type="number" name="duration" value={inputs.duration || ''} onChange={handleChange} className="form-input" />&nbsp;
             <label htmlFor="gas" className="" name="duration">Hrs</label>
            <br></br>
            </div>

             <div className="details">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <label htmlFor="class" className="">Class</label>&nbsp;
             <input type="text" name="class" value={inputs.class || ''} onChange={handleChange} className="form-input" />&nbsp;
               <button type="submit" name="gas" id="btnclass"><i className="fa fa-chevron-down"></i></button><br></br>
               </div>


                <div id="btn">
                 <button type="reset" id="reset"></button>
                 <button type="submit" id="calc">Calculate footprint</button>
                </div>

               </form>

             </div>

             <div id="winclose">
              <button type="submit" name="close" id="btnclose">
               <i className="fa fa-times-circle-o"></i>
              </button>
             </div>
             </div>
 );
}

export default AirplaneDashboard;
