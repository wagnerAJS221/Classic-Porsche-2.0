import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Please see featured Car</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../porscheIMG/p1.jpeg"
              text="German Engineering at its fines"
              label="Find Perfection"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
