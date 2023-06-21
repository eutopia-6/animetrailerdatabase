import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({topAnime}) {
  return (
    <aside>
        <nav>
            <h3>Top Anime</h3>
            {topAnime.map(anime => {
                // const animeURL = anime.trailer.embed_url;
                // const animeTitle = anime.title;
                // const synopsis = anime.synopsis;
                const uniqueId = anime.mal_id;
                
                return <Link to={`/trailers/${uniqueId}`} 
                state={{ animeURL:anime.trailer.embed_url, 
                        animeTitle:anime.title, 
                        synopsis:anime.synopsis}}>
                    {anime.title}
                </Link>
            })}
       
            
            
        </nav>
    </aside>
    )
}

export default Sidebar
