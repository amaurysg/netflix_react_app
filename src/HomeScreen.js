import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import './HomeScreen.css'
import Row from './Row'
import requests from './Requests'


const HomeScreen = () => {
  return (
    <div className="homeScreen">
       {/* nav */}
       <Nav/>

       {/* Banner */}
       <Banner/>

       {/* row */}
       <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
       />
       <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        
       />
       <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        
       />
       <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        
       />
       <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        
       />
       <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        
       />
       <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        
       />
       
    </div>
  )
}

export default HomeScreen
