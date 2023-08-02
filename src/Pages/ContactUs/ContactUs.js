// /* eslint-disable jsx-a11y/anchor-has-content */
// import React, { useRef } from "react";

// import emailjs from "emailjs-com";
// import toast from "react-hot-toast";
// //import './Contact.css'

// const ContactUs = () => {
//   const descriptions = [
//     "Health Connect",
//     "House#15-19, Block-E, Avenue-5, Rupatoli, Barishal,Bangladesh",
//     "Phone: +8801712345678",
//     "E-mail: support@connecthealth.com",
//   ];

//   const form = useRef();

//   const sendEmail = (event) => {
//     event.preventDefault();
//     console.log(form.current);
//     emailjs
//       .sendForm(
//         "service_ta238j4",
//         "template_2vozm26",
//         form.current,
//         "7OWo-i_O-_nNoV7h4"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           toast.success("Your Message Send Successfully");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     event.target.reset();
//   };

//   return (
//     <div className=" pt-24" id="contact">
//       <div className="text-center">
//       <h2 className="text-2xl text-primary font-bold">Contact Us</h2>

//       </div>
//       <div className="grid md:grid-cols-2 gap-7 mt-10 mb-5 items-center">
//         <div
//           className="bg-purple-100 card-shadow rounded-lg lg:w-[428px] lg:h-[466px] lg:p-[14px] p-4 "
//           data-aos="fade-right"
//           data-aos-duration="2000"
//         >
//           <h1 className="text-gray-600 text-2xl font-semibold">
//             Write us On
//           </h1>

//           {/* <div className="mt-4">
//             {descriptions.map((description, index) => (
//               <p
//                 key={index}
//                 className="flex gap-3 my-2 lg:my-5.5 text-gray-700"
//               >
//                 {" "}
//                  {description}{" "}
//               </p>
//             ))}
//           </div> */}

//           {/* <div className="flex  mt-3 gap-5 md:gap-3 lg:gap-5 justify-center md:justify-start">
      
//         </div>

//         <div
//           data-aos="fade-left"
//           data-aos-duration="2000"
//           className="card-shadow lg:-ml-16"
//         >
//           {/* <h1 className=" md:text-4xl text-2xl text-gray-600 font-semibold monoster-fonts mx-auto">
//             Contact Me
//           </h1> */}

// <div className="container lg:flex md:flex px-3 py-3 lg:px-7 lg:py-7 lg:space-x-3 lg:w-3/4 w-full mx-auto">
//       <div className="right_section border px-8 py-4 shadow-lg">
//         <h3>Send Us a message</h3>
//         <div className="lg:flex">
//           <div>
//             <label className="text-gray-600 font-semibold"> Enter your Name</label>
//             <input
//               type="text"
//               className="w-full shadow-sm mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-sky-400"
//             />
//           </div>
//         </div>
//         <div className="lg:flex">
//           <div>
//             <label className="text-gray-600 font-semibold">Enter your Email</label>
//             <input
//               type="email"
//               className="w-full shadow-sm mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-sky-400"
//             />
//           </div>
         
//         </div>

//         <div className="py-2">
//           <label
//             htmlFor="subject"
//             className="text-gray-600 mt-2 shadow-sm py-2 font-semibold"
//           >
//             Message{" "}
//           </label>
//           <textarea
//             className="textarea w-full border rounded-lg focus:outline-none focus:border-sky-400"
//             name="message"
//             id="message"
//             cols="30"
//             rows="5"
//           ></textarea>
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="button"
//             className="bg-sky-400 cursor-pointer text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>






//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="md:w-2/4 w-11/12 mx-auto mt-3 block p-5 rounded "
//           >

// <div className="lg:flex">
//           <div>
//             <label className="text-gray-600 font-semibold"> Enter your Name</label>
//             <input
//               type="text"
//               className="required w-full shadow-sm mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-sky-400"
//             />
//           </div>
//         </div>






//             {/* <div className="my-3 py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-100  card-shadow">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Your Name"
//                 className="w-full text-white  placeholder:text-black placeholder:font-semibold  p-3  shadow focus:outline-none rounded "
//                 required
//               />
//             </div> */}



// <div className="lg:flex">
//           <div>
//             <label className="text-gray-600 font-semibold">Enter your Email</label>
//             <input
//               type="email"
//               className="w-full shadow-sm mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-sky-400"
//             />
//           </div>
         
//         </div>



//             {/* <div className="my-3 py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-100  card-shadow">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email Addess"
//                 className="w-full text-black  placeholder:text-black placeholder:font-semibold  p-3 shadow focus:outline-none rounded "
//                 required
//               />
//             </div> */}


// <div className="py-2">
//           <label
//             htmlFor="subject"
//             className="text-gray-600 mt-2 shadow-sm py-2 font-semibold"
//           >
//             Message{" "}
//           </label>
//           <textarea
//             className="textarea w-full border rounded-lg focus:outline-none focus:border-sky-400"
//             name="message"
//             id="message"
//             cols="30"
//             rows="5"
//           ></textarea>
//         </div>


//             {/* <div className="my-6 py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-100  card-shadow">
//               <textarea
//                 type="text"
//                 name="message"
//                 placeholder="Enter Message"
//                 className="w-full text-black  placeholder:text-black placeholder:font-semibold  p-2  shadow focus:outline-none rounded "
//                 required
//               />
//             </div> */}


// <div className="flex justify-end">
//           <button
//             type="button"
//             className="bg-sky-400 cursor-pointer text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none"
//           >
//             Submit
//           </button>
//         </div>


//             {/* <button className="border-2 py-2 px-3 border-[#FF014F] rounded-md text-gray-600  text-sm send-button hover:bg-[#FF014F] hover:text-white ">
              
//               Send Message
//             </button> */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;




