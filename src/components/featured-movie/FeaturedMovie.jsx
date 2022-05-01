import React from "react";
import './FeaturedMovie.module.css'

export default function FeaturedMovie ({item}) {

    //variable to manipulate the date and show only the Year of release
    let firstDate = new Date(item.first_air_date);

    //variable to manipulate movie genres
    let genres =[];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    //for the featured movie description not to exceed a certain text limit
    let description = item.overview;
    if(description.length >200) {
        description = description.substring(0, 200) + ' (...)';
    }

    return (

        <section className="featured"
            style={{
                backgroundSize : 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

            }}>

            <div className="featured--vertical">

               <div className="featured--horizontal">
                   <div className="featured--name">
                       {item.original_name}
                   </div>

                   <div className="featured--info">
                        <div className="featured--rating">
                            Rating: {item.vote_average}
                        </div>

                        <div className="featured--year">
                            Released: {firstDate.getFullYear()}
                        </div>

                        <div className="featured--seasons">
                            Seasons: {item.number_of_seasons}
                        </div>

                        <div className="genres">
                            <strong>Genres: </strong> {genres.join(', ')}
                        </div>

                        <div className="featured--description">
                            {description}
                        </div>

                        <div className="featured--buttons">
                            <div className="featured--watchbutton">
                                <a href={`/watch/${item.id}`}>▶ Watch </a>
                            </div>
                            <div className="featured--mylistbutton">
                                <a href={`/list/add/${item.id}`}>+ My List</a>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        </section>
    )
}