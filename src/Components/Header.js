import React ,{useState}from 'react';
import './Header.css';
import categories from "../data/categories";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header({setCategory}) {

 
    return (
        <div className="header">
            <div className="header_logo">
                <h1>Samachar</h1>
            </div>
            <div className="header_right">
               {categories.map((category)=>(
                    <h1 onClick={()=> setCategory(category)} >{category}</h1>
                    
                ))}
            </div>
           
            
        </div>
    )
}

export default Header;
