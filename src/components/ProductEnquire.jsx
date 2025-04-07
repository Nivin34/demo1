import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";

export default function ProductEnquire() {
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();

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
      about: formCurrent["about"].value.trim(),
    };

    let errors = {};

    for (const field in formData) {
      if (!formData[field]) {
        errors[field] = "Input is required to proceed";
      }
    }

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

    // Email
    emailjs
      .sendForm(
        "service_yscbz1z",
        "template_3n7gsrj",
        formCurrent,
        "9dR2KnJDZ6eO4NSee"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Your message has been sent successfully!");
        formCurrent.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("There was an issue sending your message. Please try again later.");
      })
      .finally(() => setLoading(false));

    // WhatsApp 
const whatsappMessage = `Product Enquiry:%0A
Name: ${formData.username}%0A
Company: ${formData.companyname}%0A
Email: ${formData.businessemail}%0A
Mobile: ${formData.mobilenumber}%0A
Location: ${formData.yourlocation}%0A
Product: ACE CRM%0A
Queries: ${formData.about || "None"}`;

    const whatsappURL = `https://wa.me/917339139431?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className=" ">
      <div className="min-h-screen py-12 px-4" id="contact">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          <h1 className="md:text-2xl font-extrabold text-center mb-6 font-['Inter']">
            Product Enquiry
          </h1>
          <form ref={form} noValidate onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name:</label>
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
              <label className="block text-sm font-medium text-gray-700">Company Name:</label>
              <input
                id="companyname"
                name="companyname"
                type="text"
                placeholder="Enter your company name *"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {formErrors.companyname && (
                <p className="text-red-500 text-sm mt-1">{formErrors.companyname}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Business Email:</label>
              <input
                id="businessemail"
                name="businessemail"
                type="email"
                placeholder="Enter your email *"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {formErrors.businessemail && (
                <p className="text-red-500 text-sm mt-1">{formErrors.businessemail}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number:</label>
              <input
                id="mobilenumber"
                name="mobilenumber"
                type="number"
                placeholder="Enter your mobile number *"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              {formErrors.mobilenumber && (
                <p className="text-red-500 text-sm mt-1">{formErrors.mobilenumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Location:</label>
              <input
                id="yourlocation"
                name="yourlocation"
                type="text"
                placeholder="Enter your location *"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {formErrors.yourlocation && (
                <p className="text-red-500 text-sm mt-1">{formErrors.yourlocation}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 w-full">
              <label className="block text-sm font-medium text-gray-700">
                Product Interested:
              </label>
              <input
                type="text"
                name="Product"
                defaultValue="ACE CRM"
                readOnly
                className="text-sm font-bold"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Queries:</label>
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

      <div className="absolute bottom-[980px] rounded-lg lg:rounded-none right-4 md:right-40 md:bottom-[950px] lg:right-5 xl:right-10 lg:bottom-[950px] xl:bottom-[800px] bg-indigo-600 p-1 lg:p-3 lg:w-[200px] lg:rounded-t-2xl lg:rounded-br-2xl shadow-lg shadow-indigo-400 hover:shadow-indigo-600">
        <div className="px-2 flex gap-5 lg:px-0 lg:gap-0 lg:flex-col">
          <div className="text-white my-2 text-[16px] lg:text-lg font-bold">Contact Us :</div>
          <div className="text-white my-2 flex text-[14px] lg:text-lg gap-2">
            <MdAddIcCall className="mt-1 lg:mt-1.5" /> 97109 46806
          </div>
          <div className="text-white flex text-[14px] lg:text-lg gap-2 mt-2 lg:mt-0">
            <MdOutlineMail className="mt-1 lg:mt-1.5" /> sales@acesoft.in
          </div>
        </div>
      </div>
    </div>
  );
}
