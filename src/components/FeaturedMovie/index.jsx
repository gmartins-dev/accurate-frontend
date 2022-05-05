import React from "react";
import { Container } from "./styles";

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
    <>  
        <Container className="featured"
            style={{
                backgroundSize : 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
            <div className="featured_vertical">
                
                <div className="featured_horizontal">
                        
                    <div className="featured_name">
                    {item.original_name}
                    </div>

                    <div className="featured_info">
                    
                        <div className="featured_rating">
                            Rating: {item.vote_average}
                        </div>

                        <div className="featured_year">
                            Released: {firstDate.getFullYear()}
                        </div>

                        <div className="featured_seasons">
                            Seasons: {item.number_of_seasons}
                        </div>

                        <div className="genres">
                            <strong>Genres: </strong> {genres.join(', ')}
                        </div>

                        <div className="featured_description">
                            {description}
                        </div>
                        <div className="featured_buttons">
                            
                            <div className="featured_watchbutton">
                                <a href={`/watch/${item.id}`}>▶ Watch </a>
                            </div>
                            <div className="featured_mylistbutton">
                                <a href={`/list/add/${item.id}`}>+ My List</a>
                            </div>  
                        </div>          
                    </div>
                </div>     
            </div>
        </Container>
    </>
    )
}