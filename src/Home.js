import React,{useState,useEffect} from 'react';
import './Home.css';
import axios from "axios";
import Headlines_page from './Headlines_page';
import Footer from './Footer';
import Header from './Components/Header';
import Menu from './Menu';



function Home() {
	
	const [newsArray,setNewsArray] = useState([]);
	const [newsResults, setNewsResults] = useState();
	const [category,setCategory]= useState("general");
	const [loadMore,setLoadMore] =useState(20);
	const [isMenuOpen,setIsMenuOpen]=useState(false);
	const [data,setData]=useState("general");
	
	

	const apiURL = async()=>{
		try{
			const fetchData = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${"cc5c9e92be6e475badbbff403f07ccb7"}&pageSize=${loadMore}&category=${category}`
      );
			setNewsArray(fetchData.data.articles);
			setNewsResults(fetchData.data.totalResults);
		} catch{
			console.log("unable to fetch the api");
		}
		
	};

	useEffect(()=>{
		apiURL();
	},[newsResults,loadMore,category,data]);	

	return (

        <>
        <Header 
        		setCategory={setCategory}
        	 	isMenuOpen={isMenuOpen}
        	 	setIsMenuOpen={setIsMenuOpen}
        />
     		{isMenuOpen && <Menu category={category} setCategory={setCategory}/> }
        <div className="home">
          <div className="home_container">
            {newsResults && (
            	<Headlines_page
                    	newsArray={newsArray}
			          	newsResults={newsResults}
			          	loadMore = {loadMore}
			          	setLoadMore = {setLoadMore}
			          

            	/>)}
          </div>
          	
        </div>
      
        <Footer />
        </>
    );
}

export default Home;
