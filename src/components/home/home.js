import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


function Home() {
 return (
  <div className="Reg">
   <div>
    <div>
     <p><strong>Estmate your CO<sup>2</sup>Footprint</strong></p>
     <div className="topsection">
      <a href="https://reactjs.org">
       <FontAwesomeIcon icon={faHeart} size="lg" className="topiconcolor" />
      </a>
      <div className="topfeature">
       <p><strong>Feature title</strong></p>
       <p>Describe feature in a sentence</p>
      </div>
     </div>
     <div className="topsection">
      <a href="https://reactjs.org">
       <FontAwesomeIcon icon={faHome} size="lg" className="topiconcolor" />
      </a>
      <div className="topfeature">
       <p><strong>Feature title</strong></p>
       <p>Describe feature in a sentence</p>
      </div>
     </div>
    </div>

    <div>
     {/* <img src="#" alt=""> */}

    </div>
   </div>


   <div id="midnav">
    <p className="text"><strong>Let's Start !</strong></p>
    <p className="text"><strong>Register to Get Started</strong></p>
     <button type="submit" id="register">Register</button>
   </div>

   <div id="footer">

    <div id="leftfooter">
     <a href="https://reactjs.org" className="info"><strong>Our Why?</strong></a>
     <a href="https://reactjs.org" className="info"><strong>Contact</strong></a>
     <a href="https://reactjs.org" className="info"><strong>Pricing</strong></a>
    </div>

    <div id="rightfooter">
     <a href="https://reactjs.org">
      {/* <FontAwesomeIcon icon={falinkedin} size="lg"  className="topiconcolor" /> */}

     </a>
     <a href="https://reactjs.org">
      {/* <FontAwesomeIcon icon={faTwitter} size="lg"  className="topiconcolor" /> */}            </a>
     <a href="https://reactjs.org">
      {/* <FontAwesomeIcon icon={faFacebook} size="lg"  className="topiconcolor" /> */}
     </a>
    </div>
   </div>

  </div>
 );
}

export default Home;
