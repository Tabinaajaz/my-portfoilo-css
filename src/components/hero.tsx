
import React from "react";
import Image from "next/image"
import mypic from "@/public/download.jpeg";

export default function Hero(){
    return(
        <div className="grid">
            <section>
                <div className="cloumn">
                  <h1 className="name">  Im TABINDA ATIF </h1>
                  <h2> IM STUDENT OF FRONTEND DEVOLOPER IN GIAIC
                  </h2>
                  <p></p>
                </div>
                <div  className="image">
                    <a  href="">
                    <Image  src={mypic} alt="image" />
                    </a>
                </div>
            </section>
        
    
         </div>
    )
}