import React from 'react';

function AnimeCard({anime, animeTitle, animeURL}) {
  return (
    <article className="anime-card">
        <a href={animeURL} target="_blank" rel="noreferrer">
            <figure>
                <img 
                src={anime.image_url}
                alt="Anime Image"/>
            </figure>
            <h3>{animeTitle}</h3>

        </a>
    </article>
  )
}

export default AnimeCard