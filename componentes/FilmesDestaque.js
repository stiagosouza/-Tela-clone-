import React from 'react';
import './FilmesDestaque.css';

export default ({item})=>{
   
    let firtDate = new Date (item.firt_air_date);
    let genres =[];
    for (let i in item.genres ){
        genres.push (item.genres[i].name );
    }

    return(
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original ${item.backdrop_path})`
        }}>

                <div className='featured--vertical'>
                    <div className='featured--orizontal'>
                        <div className='featured--name'>{item.original_name}</div>
                        <div className='featured--info'>
                            <div className='featured--points'>{item.vote_average}Pontos</div>
                            <div className='featured--year'>{firtDate.getFullYear()}</div>
                            <div className='featured--seasons'>{item.number_of_seasons}Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>    
                        <div className='featured--descripion'>{item.overview}</div> 
                        <div className='featured--buttons'>
                            <a href= {`/watch/${item.id}`} className='assitir'> Assistitir</a>
                            <a href={`/list/add/${item.id}`} className='lista'>Minha Lista</a>
                        
                        </div>
                        <div className='featured--genres'><strong>Gênero</strong> {genres.join(',  ')}

                        </div>

                    </div>
                </div>
        </section>
    );
}