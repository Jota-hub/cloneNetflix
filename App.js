import React, { useEffect, useState } from 'react';

// Importanto o CSS para a page
import './App.css';

// Responsável por fazer as requisições
import Tmdb from './Tmdb';

// Responsável pelas listas de exibição
import MovieRow from './components/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
    <div className="page"> 
      <section className="lists">
        {movieList.map((item, key)=>(
          // Pega tudo em Tmdb e coloca no formato de MovieRow
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
