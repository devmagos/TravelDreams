import { useState } from 'react';
import './userdashboard-train.css'


function TrainDashboard() {
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

   <div id="usertraindash">

    <div id="icons">
     <i className="fa fa-home iconcolor fsizetd"></i>
     <i className="fa fa-car iconcolor fsizet"></i>
     <i className="fa fa-bus iconcolor fsizet"></i>
     <i className="fa fa-plane iconcolore fsizet"></i>
     <i className="fa fa-train active iconcolor fsizet"></i>
    </div>

    <div id="datareg">
         <form action="" onSubmit={handleSubmit} id="powerdata">

      <div className="details">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <label htmlFor="gas" className="">Local Train:</label>&nbsp;&nbsp;
             <input type="number" name="gas" value={inputs.gas || ''} onChange={handleChange} className="form-input" />
        &nbsp;
             <label htmlFor="gas" className="" name="gas">Km</label>
        <br></br>
        </div>

         <div className="details">
             <label htmlFor="coal" className="">Long Distance Train:</label>&nbsp;&nbsp;
             <input type="number" name="coal" value={inputs.coal || ''} onChange={handleChange} className="form-input" />
           &nbsp;
             <label htmlFor="coal" className="" name="coal">Km</label><br></br>
           </div>

            <div className="details">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <label htmlFor="wood" className="">Train:</label>&nbsp;&nbsp;
             <input type="number" name="wood" value={inputs.wood || ''} onChange={handleChange} className="form-input" />
              &nbsp;
             <label htmlFor="wood" className="" name="wood">Km</label><br></br>
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

export default TrainDashboard;
