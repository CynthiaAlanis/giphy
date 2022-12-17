import {useEffect, useState} from 'react';
import './App.css';
import GiphyCard from './components/GiphyCard';
import Button from './components/Button';





function App() {
  const [giphyData, setGiphyData] = useState({});
  
  
    const makeApiCall = async()=> {
      const giphyURL=`https://api.giphy.com/v1/gifs/random?api_key=1hqwT8IAW9Db4sNwTqep1jllqsOco9pF&tag=&rating=g`;
      const res=await fetch(giphyURL);
      const json = await res.json();
      setGiphyData(json)
    };

  useEffect(()=>{
    
    makeApiCall('random');
  }, []);

  // const giphyNames = giphyData?.results.map((ele,index)=>{
    return(
      <div>
        <GiphyCard giphy={giphyData}/>
        <Button getGiphy={makeApiCall}/>
      </div>
    ) 
  


}
  
 

export default App;
