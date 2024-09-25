import React,{useEffect,useState} from 'react'
import'./Rowpost.css'
import axios from '../../axios'
import {ImgUrl,API_KEY } from '../../constants/Constants'
import YouTube from 'react-youtube'
function Rowpost(props) {
  const[movies,setmovies]=useState([])
  const[urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
      

    }).catch(err=>{
      alert('network error')
    })
  })
  const opts={
    height:'390',
    width:'640',
    playerVars:{
    //https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },};
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty');
        
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src= {`${ImgUrl+obj.backdrop_path}`}   alt="poster" />


          )}
            
            


        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}

      
    </div>
  )
}

export default Rowpost
