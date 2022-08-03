import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {

  // Preenche as listas de exibição no site
  const [movieList, setMovieList] = useState([]);
  // Preenche o featuredData com os filmes que aparecerão em destaque
  const [featuredData, setFeaturedData] = useState(null);
  // Variáveis para controlar o Header
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Buscando as listas
      // Espera a resposta da requisição externa e salva esses dados em list
      let list = await Tmdb.getHomeList();
      // Chama setMovieList passando os dados obtidos em list
      setMovieList(list);

      // Buscando o destaque
      // Originals recebe apenas os filmes e séries com slug originals
      let originals = list.filter(i=>i.slug === 'originals');
      // Gera um número aleatoriamente baseado na quantidade de itens dentro do array menos 1 porque o 0 também conta
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      // Escolhe um filme baseado no número que resultar em randomChosen 
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      //Pegando a posição do scroll na página em altura
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">💜</span> pelo aluno B7Web<br/>
        Direitos de imagem para Netflix<br/>
        Dados obtidos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading" />
        </div>
      }
    </div>
  );
}