import React,{useState,useEffect} from 'react';
import './Home.css';
import Headlines_page from './Headlines_page';
import axios from "axios";
import Footer from './Footer';
import Header from './Components/Header';



function Home() {
	
	const [newsArray,setNewsArray] = useState();
	const [newsResults, setNewsResults] = useState();
	const [category,setCategory]= useState("general");
	const [loadMore,setLoadMore] =useState(20);
	

	const apiURL = async()=>{
		try{
			const fetchData = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${"cc5c9e92be6e475badbbff403f07ccb7"} &loadMore=%${loadMore}&category=${category}`
      );
			setNewsArray(fetchData.data.articles);
			setNewsResults(fetchData.data.totalResults);
		} catch{
			console.log("there is an error ")
		}
		
	};

	useEffect(()=>{
		apiURL();
	},[newsArray,category,loadMore]);	

	

	
		

		

	

    return (

         <>
         <Header  setCategory={setCategory}/>
     
        <div className="home">
          <div className="home_container">
            {newsResults && (
            	<Headlines_page
                   newsArray={newsArray}
                   newsResults={setNewsResults}
                   loadMore={loadMore}
                   setLoadMore={setLoadMore}

            	/>)}
          </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;
