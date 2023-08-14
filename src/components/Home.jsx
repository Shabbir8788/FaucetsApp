import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import CustomNav from "./CustomNav";
import Button from "react-bootstrap/Button";

import { FaCopyright } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import CustomTable1 from "./CustomTable1";

const Home = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <CustomNav />

      {/* <div className="d-grid gap-2">
        <Button
          style={{
            backgroundColor: "#9b1fe9",
            border: "none",

            padding: "25px",
          }}
        >
          Notice Here
        </Button> */}

      <div style={{ backgroundColor: "#eef2fe" }}>
        <h4
          style={{
            color: "white",
            backgroundColor: "#9b1fe9",
            padding: "20px",
            textAlign: "center",
          }}
        >
          Notice here
        </h4>

        <div
          className="main"
          style={{ backgroundColor: "#eef2fe", padding: "70px" }}
        >
          <div className="home__header">
            <h1
              style={{
                color: "#9b1fe9",
                fontFamily: "Varela Round,sans-serif",
                fontSize: "35px",
                fontWeight: "600",
                marginBottom: "20px!important",
              }}
            >
              Request testnet LINK
            </h1>
            <p
              style={{
                color: "#6d7380",
                fontSize: "16px",
                lineHeight: "25px",
                width: "680px",
              }}
            >
              Get testnet LINK for an account on one of the supported blockchain
              testnets so you can create and test your own oracle and
              Chainlinked smart contract{" "}
            </p>
            <br />
            <br />
            <div
              style={{ backgroundColor: "white", padding: "80px" }}
              className="home__form"
            >
              <p style={{ backgroundColor: "#eef2fe", padding: "15px" }}>
                {" "}
                <FiAlertTriangle
                  style={{ fontSize: "20px", color: "rgb(155, 31, 233)" }}
                />{" "}
                Your wallet is connected to{" "}
                <span style={{ fontWeight: "700" }}>Ethereum Kovan</span>,so you
                are requesting{" "}
                <span style={{ fontWeight: "700" }}>Ethereum Kovan</span>{" "}
                Link/ETH{" "}
              </p>
              <h6
                style={{
                  color: "#9b1fe9",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Wallet Address
              </h6>
              <input
                type="text"
                placeholder="Your Wallet Address..."
                style={{ width: "50%", padding: "10px" }}
              />
              <br />
              <br />
              <h6
                style={{
                  color: "#9b1fe9",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Request Type
              </h6>
              <input type="text" placeholder="20 Test Link" />
              <input
                type="text"
                style={{ marginLeft: "20px" }}
                placeholder="0.5 ETH"
              />
              <br />
              <br />
              <div className="recaptcha">
                <ReCAPTCHA
                  sitekey="6LcK5aYnAAAAAKolEh09vKq2DBQtbcc-MT7zVF6I"
                  onChange={onChange}
                />
              </div>

              <Button
                style={{
                  color: "white",
                  backgroundColor: "#9b1fe9",
                  width: "15%",
                }}
              >
                Send Request
              </Button>
            </div>
          </div>

          {/* <div className="home__table" style={{backgroundColor:"white",padding:"10px"}}>
        <h5 >Request History</h5>
           */}

          <CustomTable1 />
        </div>

        <footer>
          <p style={{ textAlign: "center", background: "white" }}>
            <FaCopyright /> copyright 2023 - All Right Reserved by Faucet
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
