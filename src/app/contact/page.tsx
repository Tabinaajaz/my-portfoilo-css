import Image from "next/image";
import ButtonComponent from "@/components/button";
export default function  Contact(){
    return(
    <div>
       <div className="form-contact"> 
       <h1  className="heading">GET IN TOUCH</h1>
       </div>
       <div className="form-contact">
    <label className="form"> Name :
        <input id="name" placeholder="Enter here" size={40}
        name=" name"></input>
    </label>
    </div>
    <div className="form-contact">
    <label className="form"> Email :
        <input id="email" placeholder=" Enter here" size={40}
         name="name"></input>
    </label>
    </div>
    <div  className="form-contact">
    <label className="form"> Massage: 
        <input id="Massage" placeholder="Enter here" size= {40} 
         name="name"></input>
    </label>
    </div>
    <div className="form-contact">
<ButtonComponent/>
    </div>
</div>

)}