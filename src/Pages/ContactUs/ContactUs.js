// /* eslint-disable jsx-a11y/anchor-has-content */
// import React, { useRef } from "react";


// import emailjs from "emailjs-com";
// import toast from "react-hot-toast";
// //import './Contact.css'

// const ContactUs = () => {
//   const descriptions = [
//     "Name:Ashiqul Islam Shabu",

//     "Location: Dhaka,Bangladesh",
//     "Phone: +8801758877006",
//     "E-mail: ashiq.cse3.bu@gmail.com",
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
//       <h1 className="md:text-4xl text-2xl text-[#FF014F]  font-semibold monoster-fonts">
//         Let's Get In Touch
//       </h1>
//       <div className="grid md:grid-cols-2 gap-7 mt-10 mb-5 items-center">
//         <div
//           className="bg-purple-100 card-shadow rounded-lg lg:w-[428px] lg:h-[466px] lg:p-[14px] p-4 "
//           data-aos="fade-right"
//           data-aos-duration="2000"
//         >
//           <h1 className="text-gray-600 text-2xl font-semibold">
//             Feel free to contact me!
//           </h1>

//           <div className="mt-4">
//             {descriptions.map((description, index) => (
//               <p
//                 key={index}
//                 className="flex gap-3 my-2 lg:my-5.5 text-gray-700"
//               >
//                 {" "}
//                  {description}{" "}
//               </p>
//             ))}
//           </div>

//           <div className="flex  mt-3 gap-5 md:gap-3 lg:gap-5 justify-center md:justify-start">
//             <a
//               href="https://www.facebook.com/ashiq.cse.bu/"
//               target="blank"
//               className="p-4 rounded-lg card-shadow bg-gray-100 shadow-slate-400 hover:bg-[#FF014F]   cursor-pointer block text-gray-600 hover:text-white "
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             ></a>
//             <a
//               href="https://github.com/ashiqcsebu"
//               target="blank"
//               className="p-4 rounded-lg card-shadow bg-gray-100 shadow-slate-400 hover:bg-[#FF014F]  hover:text-white cursor-pointer block "
//             ></a>
//             <a
//               href="https://www.linkedin.com/in/ashiq-cse-bu/"
//               target="blank"
//               className="p-4 rounded-lg card-shadow bg-gray-100 shadow-slate-400   cursor-pointer block hover:text-white hover:bg-[#FF014F] "
//             ></a>
//           </div>
//         </div>

//         <div
//           data-aos="fade-left"
//           data-aos-duration="2000"
//           className="card-shadow lg:-ml-16"
//         >
//           <h1 className=" md:text-4xl text-2xl text-gray-600 font-semibold monoster-fonts mx-auto">
//             Contact Me
//           </h1>
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="md:w-2/4 w-11/12 mx-auto mt-3 block p-5 rounded "
//           >
//             <div className="my-3 py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-100  card-shadow">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Your Name"
//                 className="w-full text-white  placeholder:text-black placeholder:font-semibold  p-3  shadow focus:outline-none rounded "
//                 required
//               />
//             </div>

//             <div className="my-3 py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-100  card-shadow">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email Addess"
//                 className="w-full text-black  placeholder:text-black placeholder:font-semibold  p-3 shadow focus:outline-none rounded "
//                 required
//               />
//             </div>
//             <div className="my-6 py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-100  card-shadow">
//               <textarea
//                 type="text"
//                 name="message"
//                 placeholder="Enter Message"
//                 className="w-full text-black  placeholder:text-black placeholder:font-semibold  p-2  shadow focus:outline-none rounded "
//                 required
//               />
//             </div>

//             <button className="border-2 py-2 px-3 border-[#FF014F] rounded-md text-gray-600  text-sm send-button hover:bg-[#FF014F] hover:text-white ">
//               {" "}
//               Send Message{" "}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from 'react'
const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
<div className="container lg:flex md:flex px-3 py-3 lg:px-7 lg:py-7 lg:space-x-3 lg:w-3/4 w-full mx-auto">
  <div className="left_section bg-sky-400 lg:px-4 lg:w-1/3 w-full">
    <div className="py-8 px-8 lg:px-4 text-white">
      <h1>Contact Information</h1>
      <p className="py-4">Lorem ipsum dolortempore consequuntur a numquam asperiores molestiae sequi error delectus, qui fuga cumque ea.</p>
    </div>
    <div className="detail px-8 lg:px-4">
      <div className="calltoaction my-4 flex text-white">
        <p><span className="material-symbols-outlined">call</span></p>
        <p className="mx-3">+1(555)45874</p>
      </div>
      <div className="calltoaction my-4 flex text-white">
        <p><span className="material-symbols-outlined">mail</span></p>
        <p className="mx-3">iamlaraibkhan@gmail.com</p>
      </div>
      <div className="links px-7 py-7 lg:px-4 my-8 lg:w-1/2 text-white flex space-x-20 lg:space-x-10">
        <a href="">
          <i className="fa fa-2x fa-facebook-square"> </i>
        </a>
        <a href="">
          <i className="fa fa-2x fa-github"> </i>
        </a>
        <a href="">
          <i className="fa fa-2x fa-twitter"> </i>
        </a>
      </div>
    </div>
  </div>
  <div className="right_section border px-8 py-4 shadow-lg">
    <h3>Send Us a message</h3>
    <div className="lg:flex">
      <div className="lg:w-1/2 px-1 py-4">
        <div>
          <label className="text-gray-600 font-semibold">First Name</label>
          <input type="text" className="w-full shadow-sm mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-sky-400" />
        </div>
      </div>
      <div className="lg:w-1/2 px-1 py-4">
        <div>
          <label className="text-gray-600 font-semibold">Last Name</label>
          <input type="text" className="w-full shadow-sm mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-sky-400" />
        </div>
      </div>
    </div>
    <div className="lg:flex">
      <div className="lg:w-1/2 px-1 py-4">
        <div>
          <label className="text-gray-600 font-semibold">Email</label>
          <input type="email" className="w-full shadow-sm mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-sky-400" />
        </div>
      </div>
      <div className="lg:w-1/2 px-1 py-4">
        <div>
          <label className="text-gray-600 font-semibold">Phone</label>
          <input type="text" className="w-full shadow-sm mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-sky-400" />
        </div>
      </div>
    </div>
    <div>
      <label htmlFor="subject" className="text-gray-600 font-semibold">Subject</label>
      <input type="text" name="subject" id="subject" className="w-full shadow-sm mt-2 border px-4 py-2 rounded-lg focus:outline-none focus:border-sky-400" />
    </div>
    <div className="py-2">
      <label htmlFor="subject" className="text-gray-600 mt-2 shadow-sm py-2 font-semibold">Message</label>
      <textarea className="textarea w-full border rounded-lg focus:outline-none focus:border-sky-400" name="message" id="message" cols="30" rows="10"></textarea>
    </div>
    <div className="flex justify-end">
      <button type="button" className="bg-sky-400 cursor-pointer text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">Submit</button>
    </div>
  </div>
</div>



   
  
   

  )
}
export default ContactUs
