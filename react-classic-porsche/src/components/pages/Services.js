import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'

export default function Services() {
  return (
    <>
      <h1 className="services">Services</h1>
      <div className="service-list">
        <div className="cards">
          <h1>Featured</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="../../porscheIMG/p16.jpg"
                  text="Here at Classic Porsche we offer a large amount of 
                  consulting for classic racing Porsches.Please enquire 
                  via our email should you be interested "
                  label="Track fittings and Racing"
                  path="/services"
                />
                <CardItem
                  src="../../porscheIMG/p22.webp"
                  text="Classic Porsche garages also offer a Valet service. 
                  This can be anything for a car wash to a full Valet service and everything in between."
                  label="Valet Services"
                  path="/services"
                />
                <CardItem
                  src="../../porscheIMG/p21.jpg"
                  text="Classic Cars from time to 
                  time do need a bit of pampering. Should you find yourself look for a 
                  mechanics and technicians that are experts in Classic Porsches, look no further."
                  label="Vehichle Service"
                  path="/services"
                />
                <CardItem
                  src="../../porscheIMG/p20.jpg"
                  text="Feeling Blue? Why not use the Classic 
                  Porsches styling department to change any of the interior and 
                  exterior details to meet your needs ? 
                  Our design team is world class with excellent experiance."
                  label="Detailing and styling"
                  path="/services"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
