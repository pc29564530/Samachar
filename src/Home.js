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
	const [isMenuOpen,setIsMenuOpen]=useState(false);
	const [data,setData]=useState("general");
	
	

	// const apiURL = async()=>{
	// 	try{
	// 		const fetchData = await axios.get(
    //     `https://newsapi.org/v2/top-headlines?country=in&apiKey=${"c6f99101469c43e0beed4e1031f899b1"}&pageSize=${loadMore}&category=${category}`
    //   );
	// 		setNewsArray(fetchData.data.articles);
	// 		setNewsResults(fetchData.data.totalResults);
	// 	} catch{
	// 		console.log("unable to fetch the api");
	// 	}
		
	// };
	const apiURL = async() => {
		try {
			const getData = await axios.get(`/api/samachar/${category}`);
			setNewsArray(getData.data.articles);
			setNewsResults(getData.data.totalResults);
		} catch {
			console.log("unable to get the request of endpoints");
		}
	}

	useEffect(()=>{
		apiURL();
	},[newsResults,category,data]);	

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
            	/>)}
          </div>
          	
        </div>
      
        <Footer />
        </>
    );
}

export default Home;
