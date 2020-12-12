import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Row from './Row';
import Banner from './Banner';
import Login from './Login';
import Nav from './Nav';
import requests from './requests';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/'>
            <Nav />
            <Banner />
            <Row 
              title='Trending'
              fetchUrl={requests.fetchTrending}
              isLargeRow
            />
            <Row 
              title='Netflix Originals'
              fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row 
              title='Top Rated'
              fetchUrl={requests.fetchTopRated}        
            />
            <Row 
              title='Action Movies'
              fetchUrl={requests.fetchActionMovies}
            />
            <Row 
              title='Comedy Movies'
              fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
              title='Romance Movies'
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
              title='Documentaries'
              fetchUrl={requests.fetchDocumentaries}
            />
          </Route>        
        </Switch>
      </div>      
    </Router>
  );
}

export default App;
