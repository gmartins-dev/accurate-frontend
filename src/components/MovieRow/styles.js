import styled from 'styled-components'

export const Container = styled.div`

  margin-bottom: 20px;
  
  h2 {
    margin: 0 0 0 30px;
  }
  
  .movieRow_listarea{
    overflow-x: hidden;
    padding-left: 30px;
  }
  
  .movieRow_list{
    transition: all ease 0.5s;
  
  }
  
  .movieRow_item {
    display: inline-block;
    width: 150px;
    cursor: pointer;
  }
  
  .movieRow_item img{
    width: 100%;
    transform: scale(0.9); 
    transition: all ease 0.2s;
  }
  
  .movieRow_item img:hover{
    transform: scale(1);
  }
  
  .movieRow_left, .movieRow_right{
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
  }
  
  .movieRow_left{
    left: 0;
  }
  
  .movieRow_right{
    right: 0;
  }
  
  &:hover .movieRow_left, 
  &:hover .movieRow_right {
    opacity: 1;
  }

  @media (max-width:760px){

    .movieRow_left,
    .movieRow_right{
      opacity: 1;
    }
  }
`
