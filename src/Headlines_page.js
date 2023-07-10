import React from 'react';
import Headlines from "./Headlines";
import './Headlines_pages.css';


function Headlines_page({newsArray}) {
    return (
      <div className="headlines_page">
        <div className="content">
          {newsArray.map((items) => (
            <Headlines items={items} key={items.title} />
          ))}
        </div>
      </div>
    )
}

export default Headlines_page;
