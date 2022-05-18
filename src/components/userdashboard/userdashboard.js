import './userdashboard.css'
import chart from '../images/chart.png'

function UserDashboard() {
 return (

   <div id="userdash">
    <div id="icons">
     <i className="fa fa-home fsizeh"></i>
     <i className="fa fa-car fsize"></i>
     <i className="fa fa-bus fsize"></i>
     <i className="fa fa-plane fsize"></i>
     <i className="fa fa-train fsize"></i>
    </div>
    <div id="imgdash">
     <img src={chart} alt="bar chart" />
     {/*<img src={logo} className="App-logo" alt="logo" />*/}
    </div>
   </div>
 );
}

export default UserDashboard;
