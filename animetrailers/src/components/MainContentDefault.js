import React from 'react';
import AnimeCard from './AnimeCard';

function MainContentDefault(props) {
  return (
    <main>
        <div className="main-head">
            <form 
            className="search-box"
            onSubmit={props.HandleSearch}>
                <input
                    type="search"
                    placeholder="Search for an anime... "
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                    />
            </form>
        </div>
        <div className="anime-list">
            {props.animeList.map(anime => (
              <AnimeCard 
              anime={anime.images.jpg}
              animeTitle={anime.title}
              animeURL={anime.trailer.embed_url}
              synopsis = {anime.synopsis}
              uniqueId = {anime.mal_id}
              key={anime.mal_id}/>
              ))}
        </div>
    </main>
  )
}

export default MainContentDefault