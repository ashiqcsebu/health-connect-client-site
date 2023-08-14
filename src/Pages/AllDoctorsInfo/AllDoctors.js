import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import AllDoctorsCard from "./AllDoctorsCard";

const AllDoctors = () => {
  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-4 mt-6">
        <h2 className="text-5xl font-bold text-cyan-600">All Doctors</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc) => (
          <AllDoctorsCard key={doc._id} doc={doc}></AllDoctorsCard>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
