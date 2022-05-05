import styled from 'styled-components'

export const Container = styled.section`

  &.featured{
    height: 80vh;
  }
  
  .featured_name{
    font-size: 60px;
    font-weight: bold;
  }
  
  .featured_info{
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
  }
  
  .featured_rating, 
  .featured_year, 
  .featured_seasons{
    display: inline-block;
    margin-right: 15px;
  }
  
  .featured_rating{
    color: #46d369;
  }
  
  .featured_description{
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
  }
  
  .featured_buttons{
    margin-top: 10px;
  }
  
  .featured_watchbutton, 
  .featured_mylistbutton{
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
  }
  
  .featured_watchbutton:hover, 
  .featured_mylistbutton:hover{
    opacity: 0.7;
  }
  
  .featured_watchbutton {
    background-color: #FFF;
    color: #000;
  }

  .featured_watchbutton a:link,
  .featured_watchbutton a:visited,
  .featured_watchbutton a:hover,
  .featured_watchbutton a:active{
    background-color: #FFF;
    color: #000;
    text-decoration: none;
  }

  .featured_mylistbutton {
    background-color: #333;
    color: #FFF;
  }
  
  .featured_mylistbutton a:link, 
  .featured_mylistbutton a:visited, 
  .featured_mylistbutton a:hover, 
  .featured_mylistbutton a:active{
    background-color: #333;
    color: #FFF;
    text-decoration: none;
  }
  
  .featured_genres{
    margin-top: 15px;
    font-size: 18px;
  }
  
  .lists {
    margin-top: -150px;
  }

  @media (max-width:760px){

    .featured{
      height: 90vh;
    }
    .featured_name{
      font-size: 40px;
    }
    .featured_info{
      font-size: 16px;
    }
    .featured_description{
      font-size: 14px;
      max-width: 100%;
      margin-right: 30px;
    }
    .featured_genres{
      font-size: 14px;
    }
    .featured_watchbutton,
    .featured_mylistbutton{
      font-size: 16px;
    }
  }

  @media (max-height:760px){

    .featured{
      height: 80vh;
      margin-bottom: 12%;
    }


    .featured_horizontal {
      padding-bottom: 150px;
      padding-top: 120px;

    }
  }
`

export const FeaturedVertical = styled.div`

  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);


`

export const FeaturedHorizontal = styled.div`
  
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 180px;

`