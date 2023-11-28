"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import "./main.css";

const AddClient = () => {
  const [loading, setLoading] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [licenceId, setLicenceId] = useState(0);
  const [email, setEmail] = useState(0);
  const [street, setstreet] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [timeZone, settimeZone] = useState();
  const [currency, setcurrency] = useState();
  const [language, setlanguage] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [repFirstName, setrepFirstName] = useState();
  const [repLastName, setrepLastName] = useState();
  const [repEmail, setrepEmail] = useState();
  const [repPhoneNumber, setrepPhoneNumber] = useState();

  const addClient = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://k7-yd0x.onrender.com/user/client", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          licenceId,
          email,
          street,
          city,
          state,
          country,
          timeZone,
          currency,
          language,
          phoneNumber,
          representativeDetails: {
            repFirstName,
            repLastName,
            repEmail,
            repPhoneNumber,
          },
        }),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (!res.ok) {
        throw Error(data.error);
      }
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };


  return (
    <body>
      <section>
        <div className="text-center m-2">
          <h2 className="font-bold">New Client</h2>
        </div>
        <div className="m-2 text-center">
          <p>Enter new client details</p>
        </div>

        <div>
          <form>
            <div className="car">
              <h3 className="font-bold">Company details</h3>
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                placeholder="Enter comapny name"
              />
              <input
                onChange={(e) => setLicenceId(e.target.value)}
                type="number"
                placeholder="Enter license number / ID"
              />
              <input
                onChange={(e) => setphoneNumber(e.target.value)}
                type="number"
                placeholder="Enter phone number"
              />
              <input type="number" placeholder="Enter alternate phone number" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email address"
              />
              {/* <input type="text" placeholder="Enter comapny name" /> */}
            </div>

            <div>
              <h3 className="font-bold">Address</h3>
              <input
                onChange={(e) => setstreet(e.target.value)}
                type="text"
                placeholder="Enter street number"
              />
              <input
                onChange={(e) => setcity(e.target.value)}
                type="text"
                placeholder="City"
              />
              <input
                onChange={(e) => setstate(e.target.value)}
                type="text"
                placeholder="State"
              />
              <input
                onChange={(e) => setcountry(e.target.value)}
                type="text"
                placeholder="country"
              />
              <input
                onChange={(e) => settimeZone(e.target.value)}
                type="text"
                placeholder="Time Zone"
              />
            </div>

            <div>
              <h3 className="font-bold">Other Details</h3>
              <input
                onChange={(e) => setcurrency(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Currency"
              />
              <input
                onChange={(e) => setlanguage(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Language"
              />
            </div>

            <div>
              <h3 className="font-bold">Representative Details</h3>
              <input
                onChange={(e) => setrepFirstName(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Enter first name"
              />
              <input
                onChange={(e) => setrepLastName(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Enter last name"
              />
              <input
                onChange={(e) => setrepPhoneNumber(e.target.value)}
                type="number"
                name=""
                id=""
                placeholder="Enter phone number"
              />
              <input
                onChange={(e) => setrepEmail(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Enter email address"
              />
            </div>
          </form>

          <button onClick={() => addClient()} className="btn">
            {loading ? "Adding client ..." : "Proceed"}
          </button>
          <button className="btn">Draft</button>
        </div>
      </section>
    </body>
  );
};

export default AddClient;
