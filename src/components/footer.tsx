import Link from "next/link";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";

export default  function Footer(){
    return(

        <footer >


            <div className="footer-container">
            
               <div className="footer-contact">
                <h3>Contact us</h3>
                <p>Email:tabinaatif12@gmail.com</p>
                <p>Phone:03470000000</p>
                <p>Address:landhi karachi</p>
                 </div>
<div  className=" footer-contact">
    <h3>Quick link</h3>
    <ul className="list-footer">
        <li><a href=""><RiFacebookCircleLine />
        </a></li>
        <li><a href=""><FaWhatsapp/></a></li>
        <li><a href=""><FaInstagramSquare/></a></li>

    </ul>
</div>
           </div> 
        </footer>
        
    )
}