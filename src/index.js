import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import {books} from './books';

function BookList() {
  return (
    <div className="main-cont">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}

const Book = () => {
  return (
    <section>
      <Image></Image>
      <Title />
      <Author />
    </section>
  )
}

const Image = () => {
  return (
    <img src="https://images-eu.ssl-images-amazon.com/images/I/71GuYZ9CinL._AC_UL200_SR200,200_.jpg" alt="" />
  )
}

const Title = () => {
  return (
    <h1>1984. Ediz. integrale. Con Segnalibro</h1>
  )
}

const Author = () => {
  return (
    <h3>George Orwell</h3>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'));
