import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export default function ProductEnquire() {
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formCurrent = form.current;

    const formData = {
      username: formCurrent["username"].value.trim(),
      companyname: formCurrent["companyname"].value.trim(),
      businessemail: formCurrent["businessemail"].value.trim(),
      mobilenumber: formCurrent["mobilenumber"].value.trim(),
      yourlocation: formCurrent["yourlocation"].value.trim(),
    };

 
    let errors = {};


    for (const field in formData) {
      if (!formData[field]) {
        errors[field] = "Input is required to proceed";
      }
    }

    // Email validation
    if (formData.businessemail && !emailPattern.test(formData.businessemail)) {
      errors.businessemail = "Please enter a valid email.";
    }

 

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({});
    }

    setLoading(true);

 
    emailjs
      .sendForm(
        "service_yscbz1z", // Replace with your EmailJS service ID
        "template_3n7gsrj", // Replace with your EmailJS template ID
        formCurrent,
        "9dR2KnJDZ6eO4NSee" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your message has been sent successfully!");
          formCurrent.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert(
            "There was an issue sending your message. Please try again later."
          );
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div>
      
      <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h1 className="md:text-2xl font-extrabold text-center mb-6 font-['Inter'] ">
          Product Enquiry
        </h1>
        <form
          ref={form}
          noValidate
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your name *"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.username && (
              <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name:
            </label>
            <input
              id="companyname"
              name="companyname"
              type="text"
              placeholder="Enter your company name *"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.companyname && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.companyname}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Email:
            </label>
            <input
              id="businessemail"
              name="businessemail"
              type="email"
              placeholder="Enter your email *"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.businessemail && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.businessemail}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number:
            </label>
            <input
              id="mobilenumber"
              name="mobilenumber"
              type="number"
              placeholder="Enter your mobile number *"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            {formErrors.mobilenumber && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.mobilenumber}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Location:
            </label>
            <input
              id="yourlocation"
              name="yourlocation"
              type="text"
              placeholder="Enter your location *"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.yourlocation && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.yourlocation}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 w-full">
            <label className="block  text-sm font-medium text-gray-700">
             Product Interested: 
            </label>
           <input type="text" name="Product" defaultValue="ACE CRM" readOnly  className=" text-sm font-bold"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Queries:
            </label>
            <textarea
              id="about"
              name="about"
              rows={3}
              placeholder="Enter your queries"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex">
            <button
              type="submit"
              className="bg-indigo-600 text-white text-[14px] px-3 py-2 md:px-5 md:py-2.5 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
