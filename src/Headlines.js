import React from 'react'
import './Headlines.css';

function Headlines({items}) {
    return (
              <div className="headlines">
               
                  <img  className="logo" src={items.urlToImage?items.urlToImage:"https://source.unsplash.com/random"} alt={items.title}/>
                 
                  <div className="content">
                    <div>
                      <span className="title">{items.title}</span>
                      <br />
                    </div>
                    <div className="lowerNewsText">  
                      <div className="description">
                          {items.description}
                      </div>
                      <div className="readmore">readmore...... at {" "} 
                          <a href={items.url} target="__blank" className="source">
                              <b>{items.source.name}</b>
                          </a>
                      </div>
                        
                    </div>
                  </div> 
                     
               </div>

    )
}

export default Headlines;
