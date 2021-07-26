import React from 'react'

const Book = (props) => {
    const {img, title, author} = props;
    return (
        <section className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </section>
    )
}

export default Book

