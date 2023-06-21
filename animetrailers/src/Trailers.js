import React from 'react';
import { useLocation } from 'react-router-dom';

export const Trailers = () => {
  const location = useLocation();
  const animeURL = location.state.animeURL
  const synopsis = location.state.synopsis
  const animeTitle = location.state.animeTitle

  return (
  <div>
    <div>
      <iframe className='trailer-border' src={animeURL}/>
      <h2>{animeTitle}</h2>
      <h5>{synopsis}</h5>
    </div>
  </div>
  
  )
}
