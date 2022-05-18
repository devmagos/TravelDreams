import { useState } from 'react';
import './userdashboard-bus.css'


function BusDashboard() {
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
  <div className="Usrb">

   <div id="userbusdash">

    <div id="icons">
     <i className="fa fa-home iconcolor fsizeh"></i>
     <i className="fa fa-car iconcolor fsize"></i>
     <i className="fa fa-bus active iconcolor fsize"></i>
     <i className="fa fa-plane iconcolor fsize"></i>
     <i className="fa fa-train iconcolor fsize"></i>
    </div>

    <div id="datareg">
         <form action="" onSubmit={handleSubmit}   id="powerdata">

      <div id="elect">
             <label htmlFor="elect" className="">Distance Travelled</label>&nbsp;&nbsp;
             <input type="text" name="elect" value={inputs.elect || ''} onChange={handleChange} className="form-elect-input" />&nbsp;&nbsp;

             <label htmlFor="kwh" className="">Km</label><br></br>
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

export default BusDashboard;
