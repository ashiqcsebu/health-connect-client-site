import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
const Details = () => {
  const { image, name, specialty, biodata, experience } = useLoaderData();
  return (
    <div className="card card-compact  bg-base-100 shadow-xl mx-72 my-6 ">
      <figure>
        <img src={image} className="h-96 w-3/4 rounded-xl" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold justify-center  ">
         Name:<span className="text-cyan-700">{name} </span> 
        </h2>
        <h2 className="card-title text-2xl justify-center font-semibold">
         Department: <span className="text-cyan-700">{specialty} </span> 
        </h2>
        <h2 className="card-title text-2xl justify-center font-semibold">
          Experience: <span className="text-cyan-700">{experience} </span> Year
        </h2>
        <h2 className="card-title text-xl justify-center text-center font-semibold">
         <span className="text-cyan-700 font-normal">{biodata} </span> 
        </h2>
        <div className="card-actions justify-end">
        <PrimaryButton>
            <Link to="/appointment">Book Appointment</Link>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Details;
