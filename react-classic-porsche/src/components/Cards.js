import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Featured Cars</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../porscheIMG/p1.jpeg"
              text="German Engineering at its finest"
              label="Find Perfection"
              path="/products"
            />
            <CardItem
              src="../../porscheIMG/p4.webp"
              text="Theres something for everyone"
              label="Find Perfection"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../../porscheIMG/p7.jpg"
              text="Need it for the Track?"
              label="Speak to our consultants"
              path="/services"
            />
            <CardItem
              src="../../porscheIMG/p9.jpg"
              text="Keeping it classy ?"
              label="Valet Services"
              path="/services"
            />
            <CardItem
              src="../../porscheIMG/p8.jpg"
              text="Finely tuned for your needs"
              label="See Services"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
