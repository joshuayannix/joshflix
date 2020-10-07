import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Row 
        title='Trending'
        fetchUrl={requests.fetchTrending}
      />
      <Row 
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />
      
      
    </div>
  );
}

export default App;
