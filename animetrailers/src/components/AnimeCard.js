import React from 'react';
import { Link } from 'react-router-dom';

function AnimeCard({anime, animeTitle, animeURL, uniqueId, synopsis}) {
  return (
    <article className="anime-card">
      <Link to={`/trailers/${uniqueId}`} state={{ animeURL, synopsis, animeTitle }}>

            <figure>
                <img 
                src={anime.image_url}
                alt="Anime Image"/>
            </figure>
            <h3>{animeTitle}</h3>
      </Link>
    </article>
  )
}

export default AnimeCard