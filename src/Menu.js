import React from 'react';
import categories from "./data/categories";
import './Menu.css';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText"

function Menu({setCategory}) {
    return (
 
        <div className="menu">
        <List>
		   {categories.map((category)=>(
		   	<ListItem onClick={()=>setCategory(category)} key={category}>
		   	<ListItemText primary={category}/>
		   	</ListItem>
		   	))}
		 </List>  
     	</div>
    )
}

export default Menu;
