import { useState } from 'react';
import './userdashboard-car.css'


function CarDashboard() {
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
  <div className="Usrc">

   <div id="usercardash">

    <div id="icons">
     <i className="fa fa-home iconcolor fsizech"></i>
     <i className="fa fa-car active iconcolor fsizec"></i>
     <i className="fa fa-bus iconcolor fsizec"></i>
     <i className="fa fa-plane iconcolo fsizecr"></i>
     <i className="fa fa-train iconcolor fsizec"></i>
    </div>

    <div id="datareg">
         <form action="" onSubmit={handleSubmit} id="powerdata">

           <div id="detailsbtnml">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <label htmlFor="elect" className="">Mileage</label>&nbsp;&nbsp;
             <input type="number" name="elect" value={inputs.elect || ''} onChange={handleChange} className="form-elect-input" />&nbsp;&nbsp;

             <label htmlFor="kwh" className="">Km</label><br></br>
        </div>

           <div id="detailsbtnv">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <label htmlFor="gas" className="">Vehicle Cartegory</label>&nbsp;&nbsp;
             <input type="text" name="gas" value={inputs.gas || ''} onChange={handleChange} className="form-elect-input" />
             <button type="submit" name="gas" id="btngas">
               <i className="fa fa-chevron-down szicon"></i>
            </button><br></br>
           </div>

          <div id="detailsbtnm">
             <label htmlFor="coal" className="">Year Of Manufacture</label>&nbsp;&nbsp;
             <input type="number" name="coal" value={inputs.coal || ''} onChange={handleChange} id="btncoal" />
             <button id="btnchv">
               <i className="fa fa-chevron-down szicon"></i>
               </button><br></br>
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
  </div>
 );
}

export default CarDashboard;
