import Link from "next/link"
export default function Header(){
    return(
        

       <div className="navbar">
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <h1 className="container1">TA</h1>
        
        <nav className="dropdown ">
        { /* dropdown */}
        <div  className="desc">MENU</div>
        
            <ul className="dropdown-content">
            
                <li>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/skill">Skill</Link>
                    <Link href="/contact">contact</Link>
                </li>
            </ul>
        </nav>
      
    
       </div> 
    )
}