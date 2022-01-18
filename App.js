import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import LinhadeFilmes from './componentes/LinhadeFilmes';



export default ()=>{

  const [movieList,setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);

    useEffect(()=>{
      const carregarTudo = async () => {
        //pegendo a lista Total
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        //pegando os destaques
        let originals = list.filter(i=>i.slug ==='originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');

        setfeaturedData(chosenInfo);

      }

      carregarTudo();
   }, []);

    return(
      <div className='page'>
       

        {featuredData &&
           <featuredData item={featuredData}/>
        }

        <section className='lists'>
          {movieList.map((item, key)=>
          (<LinhadeFilmes key={key} title={item.title} items={item.items}/>
          ))}
        </section>
      </div>
    );
}