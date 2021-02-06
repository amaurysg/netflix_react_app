import React from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import '../screens/HomeScreen.css'
import Row from '../Row'
import requests from '../Requests'


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
        isLargeRow
       />
       <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
       />
       <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
       />
       <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
       />
       <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
       />
       <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
       />
       
    </div>
  )
}

export default HomeScreen
