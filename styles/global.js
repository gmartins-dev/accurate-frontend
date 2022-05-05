import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

/* GLOBAL CSS */

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  background-color: #111;
  color: #FFF;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

`




