import React from 'react'
import '../../App.css'
import '../Cards.css'
import CardItem from '../CardItem'
import './Products.css'

function Products() {
  return (
    <>
      <h1 className="products">PRODUCTS</h1>
      <div className="car-list">
        <div className="cards__container">
          <div className="cards__wrapper">
            <div className="car-list-container">
              <ul className="cards__items">
                <CardItem
                  src="../../porscheIMG/p21.jpg"
                  text="German Engineering at its "
                  label="Find Perfection"
                  path="/car-view"
                />

                <CardItem
                  src="../../porscheIMG/p20.jpg"
                  text="Theres something for everyone"
                  label="Mechanial Beauty's true form"
                  path="/car-view"
                />
              </ul>
            </div>
            <div className="car-list-container">
              <ul className="cards__items">
                <CardItem
                  src="../../porscheIMG/p28.jpeg"
                  text="German Engineering at its "
                  label="Find Perfection"
                  path="/car-view"
                />

                <CardItem
                  src="../../porscheIMG/p27.jpg"
                  text="Theres something for everyone"
                  label="Mechanial Beauty's true form"
                  path="/car-view"
                />
              </ul>
            </div>
            <div className="car-list-container">
              <ul className="cards__items">
                <CardItem
                  src="../../porscheIMG/p26.jpg"
                  text="German Engineering at its "
                  label="Find Perfection"
                  path="/car-view"
                />

                <CardItem
                  src="../../porscheIMG/p24.jpg"
                  text="Theres something for everyone"
                  label="Mechanial Beauty's true form"
                  path="/car-view"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Products
