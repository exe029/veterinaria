import React from "react";
import logo from '../images/logo.jpg'
import CardWitget from "./CardWitget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return(
            <header className=" h-36 flex flex-row items-center justify-between w-full p-2 bg-[url()] " >
                <div className="w-36">
                    <NavLink className="flex flex-row items-center" to={"/"}>
                    <img className="h-36 w-36" src={logo} alt="" />
                    <h2 className="font-semibold text-lg font-serif">LA GRANJA</h2>                  
                    </NavLink>
                </div>
                
                <nav className="font-bold text-lg text-red-700 w-1/4">
                    <ul className=" flex gap-24 font-serif">
                        <li>
                            <NavLink to={"/"}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Categoria/Perros'}>Perros</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Categoria/Gatos'}>Gatos</NavLink>
                        </li>
                        
                    </ul>
                </nav>
                <Link to={"/cart"}>
                <CardWitget/>
                </Link>

            </header>
    )
}

export default NavBar;