import React from 'react'
import '../../App.css'
import '../Cards.css'
import CardItem from '../CardItem'

function Products() {
  return (
    <>
      <h1 className="products">PRODUCTS</h1>
      <div className="car-list">
        <p>
          {' '}
          I will be using the card template to render my "car products" but will
          likely change it next week to build some fake car data that will then
          replace the hard coded cards
        </p>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="../../porscheIMG/p19.jpg"
                text="German Engineering at its finest"
                label="Find Perfection"
                path="/products"
              />
              <CardItem
                src="../../porscheIMG/p4.webp"
                text="Theres something for everyone"
                label="Mechanial Beauty's true form"
                path="/products"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="../../porscheIMG/p16.jpg"
                text="Need it for the Track?"
                label="Speak to our consultants"
                path="/services"
              />
              <CardItem
                src="../../porscheIMG/p14.jpg"
                text="Keeping it classy ?"
                label="Valet Services"
                path="/services"
              />
              <CardItem
                src="../../porscheIMG/p15.jpg"
                text="Finely tuned for your needs"
                label="See Services"
                path="/services"
              />
              <CardItem
                src="../../porscheIMG/p3.jpg"
                text="Read about who classic porsche is as a company"
                label="AboutUs"
                path="/aboutUs"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Products
