import React from "react";
import Header from "./components/Header";
import {useState, useEffect} from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import MainContentDefault from "./components/MainContentDefault";

function Home() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [topAnimeList, SetTopAnimeList] = useState([]);
  const [search, SetSearch] = useState("");
  const [isLoading, SetIsLoading] = useState(true);

  const GetTopAnime =async () => {
	const temp = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=1`).then(res => res.json());
    SetTopAnime(temp.data.slice(0, 20));
  }

  const HandleSearch = e => {
    e.preventDefault();
    
    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`).then(
        res => res.json());

        SetAnimeList(temp.data);
  }
  
  useEffect(() => {
	GetTopAnime();

  }, []);

  useEffect(() => {
    SetIsLoading(animeList.length === 0);
  }, [animeList])


  return (
    <div className="App">
      <Header/>
      {isLoading ?       
      <div className="content-wrap">
          <Sidebar topAnime={topAnime.slice(0, 8)}/>
          <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={topAnime}/>
      </div> :       
      <div className="content-wrap">
          <Sidebar topAnime={topAnime}/>
          <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}/>
      </div>}

      {console.log(topAnime)}
    </div>
  );
}

export default Home;
