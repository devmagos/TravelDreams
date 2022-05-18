import { useState } from 'react';
import './userdashboard-house.css'


function HouseDashboard() {
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
  <div className="Reg">

   <div id="userhousedash">

    <div id="icons">
     <i className="fa fa-home active iconcolor fsizehh"></i>
     <i className="fa fa-car iconcolor fsizeh"></i>
     <i className="fa fa-bus iconcolor fsizeh"></i>
     <i className="fa fa-plane iconcolore fsizeh"></i>
     <i className="fa fa-train iconcolor fsizeh"></i>
    </div>

    <div id="datareg">
     <form action="" onSubmit={handleSubmit} id="powerdata">

      <div id="elect">
       <label htmlFor="elect" className="">Electricity:</label>&nbsp;&nbsp;
       <input type="number" name="elect" value={inputs.elect || ''} onChange={handleChange} className="form-elect-input" />&nbsp;&nbsp;

       <label htmlFor="kwh" className="">KWh at a factor of:</label>&nbsp;&nbsp;
       <input type="number" name="kwh" value={inputs.kwh || ''} onChange={handleChange} className="form-elect-input" />&nbsp;&nbsp;
       <label htmlFor="kwh" className="">KgC0<sub>2</sub>/KWh</label><br></br>
         </div>

          <div className="">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <label htmlFor="gas" className="">Gas:</label>&nbsp;&nbsp;
       <input type="number" name="gas" value={inputs.gas || ''} onChange={handleChange} className="form-elect-input" /><br></br>
           </div>

            <div className="">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <label htmlFor="coal" className="">Coal:</label>&nbsp;&nbsp;
       <input type="number" name="coal" value={inputs.coal || ''} onChange={handleChange} className="form-elect-input" /><br></br>
             </div>

              <div className="">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <label htmlFor="wood" className="">Wood:</label>&nbsp;&nbsp;
       <input type="number" name="wood" value={inputs.wood || ''} onChange={handleChange} className="form-elect-input" /><br></br>
               </div>


                <div id="btn">
                 <button type="reset" id="reset">Cancel</button>
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
  </div>
 );
}

export default HouseDashboard;
