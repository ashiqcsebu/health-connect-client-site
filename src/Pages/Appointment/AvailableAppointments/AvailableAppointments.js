import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/v2/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;

// import { useQuery } from "@tanstack/react-query";
// import { format } from "date-fns";
// import React, { useEffect, useState } from "react";
// import Loading from "../../Shared/Loading/Loading";
// import BookingModal from "../BookingModal/BookingModal";
// import AppointmentOption from "./AppointmentOption";

// const AvailableAppointments = ({ selectedDate }) => {
//   // const [appointmentOptions, setAppointmentOptions] = useState([]);
//   const [treatment, setTreatment] = useState(null);
//   const date = format(selectedDate, "PP");

//   /// Newly added
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState([]);
//   //////// Newly Added End

//   const {
//     data: appointmentOptions = [],
//     refetch,
//     isLoading,
//   } = useQuery({
//     queryKey: ["appointmentOptions", date],
//     queryFn: async () => {
//       const res = await fetch(
//         `http://localhost:5000/appointmentOptions?date=${date}`
//       );
//       const data = await res.json();
//       setData(data);
//       return data;
//     },
//   });

//   //////// Newly Added Start
//   useEffect(() => {
//     const filteredResults = data.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filteredResults);
//   }, [data, searchTerm]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   if (isLoading) {
//     return <Loading></Loading>;
//   }

//   //////// Newly Added End

//   return (
//     <section className="my-16">
//       <p className="text-center text-secondary font-bold mb-10">
//         Available Appointments on {format(selectedDate, "PP")}
//       </p>

//       <div >
//      <h1 className="mb-2 text-lg font-bold text-gren-500 "> Search Your Doctor</h1>
//         <input
//           type="text"
//           class=" border text-md rounded-lg  w-100 p-2.5"
//           placeholder="Search Your Doctor"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>

//       <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
//         {filteredData.map((option) => (
//           <AppointmentOption
//             key={option._id}
//             appointmentOption={option}
//             setTreatment={setTreatment}
//           ></AppointmentOption>
//         ))}
//       </div>
//       {treatment && (
//         <BookingModal
//           selectedDate={selectedDate}
//           treatment={treatment}
//           setTreatment={setTreatment}
//           refetch={refetch}
//         ></BookingModal>
//       )}
//     </section>
//   );
// };

// export default AvailableAppointments;
