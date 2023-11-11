import React from 'react'
import {FaCarSide} from "react-icons/fa";
import { useParams } from 'react-router-dom';
import CarData from "./../Data.json"
import { useNavigate } from 'react-router-dom';
import SpecificCar from './SpecificCar';
function CarDetails() {
    const {page,car} = useParams();
    let cars = CarData.filter((elem) => {
       return elem.carName===car;
    })
    // console.log(cars)
    let navigate = useNavigate();
  return (
      <>
          <div className="navigation">
        <div className="left"><FaCarSide className='carIcon'/> <div className="brand"><h1>Car</h1>
        <h3>Rental</h3></div></div>
        <div className="right">
            <h2>Log Out</h2>
            <button onClick={() => {navigate(`/page/${page}`)}}>Rental Cars</button>
        </div>
    </div>
     {cars.map((rentalCar) => {
        return <SpecificCar key={rentalCar.carId} img={rentalCar.imgUrl} carName={rentalCar.carName} model={rentalCar.modelYear} fuel={rentalCar.fuelType} mileage={rentalCar.mileage} rent={rentalCar.rent} />
     })}
      </>
  )
}

export default CarDetails
