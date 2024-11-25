import { useState } from "react";
import Link from "../Link/Link";
import { MdMenuOpen,MdOutlineRestaurantMenu  } from "react-icons/md";


const NavBar = () => {


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" },
      ];
      
      const [open, setOpen]=useState(true)
      
    return (
        <nav>

<div className="text-2xl md:hidden bg-yellow-500  px-4 text-black" onClick={()=> setOpen(!open)}>

{
    open=== true?<MdMenuOpen></MdMenuOpen>:<MdOutlineRestaurantMenu></MdOutlineRestaurantMenu>
}

</div>
       <ul className={`md:flex bg-yellow-500 px-4 text-black
       ${open?"":"hidden"}
       
       `}>
       {

routes.map(route=><Link key={route.id} route={route}></Link>)
}
       </ul>
            
        </nav>
    );
};

export default NavBar;