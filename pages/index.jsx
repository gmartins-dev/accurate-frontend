import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios'
import dbApi from './api/dbApi'
import { apiBase, apiKey} from '../lib/tmdb'

//My Components:
import Header from '../src/components/Header';
import MovieRow from '../src/components/MovieRow'
import FeaturedMovie from '../src/components/FeaturedMovie';
import Footer from '../src/components/Footer'
import Loading from '../src/components/Loading'
import Intro from '../src/components/Intro';


export default function Home({list}) {
  
  const [movieList, setMovieList] = useState([]);

  const [featuredData, setFeaturedData] = useState(null);

  //control when the netflix logo header should be transparent or black
  const [blackHeader, setBlackHeader] = useState(false);

  const [intro, setIntro] = useState(false);

  const [releasedMovies, setReleasedMovies] = useState(false);

  useEffect((  ) => {

    const loadAll = async () => {

    //Getting the full list of movies from tmdb
    let list = await dbApi.getHomeList();
    setMovieList(list);

    //Randomly picking up the featured movie(featured)
    let featuredMovie = list.filter(i=>i.slug === 'originals');
    let randomFeatured = Math.floor(Math.random() * (featuredMovie[0].items.results.length - 1))
    let featuredChosen = featuredMovie[0].items.results[randomFeatured]; 
    let chosenInfo = await dbApi.getMovieInfo(featuredChosen.id, 'tv');
    setFeaturedData(chosenInfo);

     // Set Loader Start Netflix
     if(list.length > 0) {
        setIntro(true);
    
        setTimeout(function() {
          setIntro(false); 
          setReleasedMovies(true);  
        }, 4000);
      }

    }
    loadAll();
  }, []);
  
  //useeffect control when the netflix logo header should be transparent or black
  useEffect(() => {

    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  //Loading Component controller
  if(movieList.length <= 0) return <Loading />
  

  return (
    <div className="page">
      <Head>
        <title>NextFlix</title>
        <meta name="description" content="A Netflix clone using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {releasedMovies &&
        <>
        <Header black={blackHeader} />
        
        <div className="page">

        {featuredData && <FeaturedMovie 
        item={featuredData} />}

            <section className="lists">
            {movieList.map( (item,key) => (

                <MovieRow key={key} 
                
                title={item?.title} 
                items={item?.items}
                />
            ))}
            </section>
            <div>
            </div>
        </div>

        <Footer />
      </>
    }
    {intro && 
      <div className="loading"> 
        <Intro />
      </div> 
    }    
  </div>
  );
}

//function for set server side render mode
export async function getServerSideProps() {

  const response = await axios.get(`${apiBase}/trending/tv/week?api_key=${apiKey}`);

  return{

    props:{
      list: response.data.results
    }
  }
}
