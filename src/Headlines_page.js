import React from 'react';
import Headlines from "./Headlines";
import './Headlines_pages.css';


function Headlines_page({newsArray,newsResults,loadMore,setLoadMore}) {
    return (
            <div className="headlines_page">
                    <div className="content">
                      
                    
                      {newsArray.map((items) => (
                        <Headlines items={items} key={items.title} />
                      ))}

                     
                      {loadMore <= newsResults && (
                        <>
                          <hr />
                          <button
                            className="loadMore"
                            onClick={() => setLoadMore(loadMore + 20)}
                          >
                            Load More
                          </button>
                        </>
                      )}
                    </div>
      </div>
             
                
           
     
    )
}

export default Headlines_page;
