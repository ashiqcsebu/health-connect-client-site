import React from "react";
import { Link } from "react-router-dom";

const AllDoctorsCard = ({ doc }) => {
  const { _id, image, name, specialty, biodata } = doc;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={image} className="h-60 w-11/12 rounded-xl" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl justify-center text-teal-700 font-semibold">{name}</h2>
          <h2 className="card-title text-2xl justify-center font-semibold">{specialty}</h2>
          <h2 className="text-xl">
            {biodata.length > 10 ? (
              <>{biodata.slice(0, 30) + "....."}</>
            ) : (
              biodata
            )}
          </h2>
          <div className="card-actions justify-end">
            <Link to={`/doctors/${_id}`}>
              <button className="btn bg-cyan-600">Details</button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default AllDoctorsCard;
