import React from 'react';
import Headlines from "./Headlines";

function Headlines_page({newsArray,newsResults,loadMore,setLoadMore}) {
    return (
        <div className="headlines_page">
            <div className="headlines_page_container">

              {newsArray.map((items)=> (
                 <Headlines items={items} key={items.title} />
              	))}
              {loadMore => newsResults && (

              	<>
                   <hr />
                   <button
                      className="loadMore" 

                    onclick={()=> setLoadMore(loadMore+20)}
                    	>
                    	LoadMore
                   </button>
              	</>

              	)}
                
            </div>
        </div>
    )
}

export default Headlines_page
