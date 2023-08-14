import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

import ethereum from "../images/ethereum-kovan.png";
import arbitrum from "../images/arbitrum-rinkeby.png";
import ether from "../images/arbitrum-rinkeby.png";
import avalanche from "../images/avalanche-fuji.png";
import bnb from "../images/bnb-chain.png";
import fantom from "../images/fantom.png";
import harmony from "../images/harmony.png";
import poa from "../images/poa.png";
import polygon from "../images/polygon.jpg";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Dropdown from "react-bootstrap/Dropdown";
import WalletConnectButton from "./WalletConnectButton";

const CustomNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <h2 style={{ color: "#9b1fe9" }}>Faucets</h2>
        </Navbar.Brand>

        <Dropdown style={{ display: "flex", gap: "1rem" }}>
          <Dropdown.Toggle
            style={{
              backgroundColor: "#FFFFFF",
              color: "#686868",
              fontSize: "14px",
            }}
          >
            <span>
              <img
                src={ethereum}
                alt="icon"
                style={{
                  height: "15px",
                  marginBottom: "-2px",
                  marginRight: " 8px",
                  width: "15px",
                }}
              />
            </span>
            Ethereum Covan
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#686868",
                fontSize: "14px",
              }}
            >
              <span>
                <img
                  src={arbitrum}
                  alt="icon"
                  style={{
                    height: "15px",
                    marginBottom: "-2px",
                    marginRight: " 8px",
                    width: "15px",
                  }}
                />
              </span>
              Arbitrum Rinkeby
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-2"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#686868",
                fontSize: "14px",
              }}
            >
              <span>
                <img
                  src={avalanche}
                  alt="icon"
                  style={{
                    height: "15px",
                    marginBottom: "-2px",
                    marginRight: " 8px",
                    width: "15px",
                  }}
                />
              </span>
              Avalanche Fuji
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-3"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#686868",
                fontSize: "14px",
              }}
            >
              <span>
                <img
                  src={bnb}
                  alt="icon"
                  style={{
                    height: "15px",
                    marginBottom: "-2px",
                    marginRight: " 8px",
                    width: "15px",
                  }}
                />
              </span>
              BNB Chain Testnet
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-4"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#686868",
                fontSize: "14px",
              }}
            >
              <span>
                <img
                  src={ether}
                  alt="icon"
                  style={{
                    height: "15px",
                    marginBottom: "-2px",
                    marginRight: " 8px",
                    width: "15px",
                  }}
                />
              </span>
              Ethereum Rinkeby
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-5"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#686868",
                fontSize: "14px",
              }}
            >
              <span>
                <img
                  src={fantom}
                  alt="icon"
                  style={{
                    height: "15px",
                    marginBottom: "-2px",
                    marginRight: " 8px",
                    width: "15px",
                  }}
                />
              </span>
              Fantom Testnet
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-6"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#686868",
                fontSize: "14px",
              }}
            >
              <span>
                <img
                  src={harmony}
                  alt="icon"
                  style={{
                    height: "15px",
                    marginBottom: "-2px",
                    marginRight: " 8px",
                    width: "15px",
                  }}
                />
              </span>
              Harmony Testnet
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-7"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#686868",
                fontSize: "14px",
              }}
            >
              <span>
                <img
                  src={poa}
                  alt="icon"
                  style={{
                    height: "15px",
                    marginBottom: "-2px",
                    marginRight: " 8px",
                    width: "15px",
                  }}
                />
              </span>
              POA Network Sokol
            </Dropdown.Item>

            <Dropdown.Item
              href="#/action-8"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#686868",
                fontSize: "14px",
              }}
            >
              <span>
                <img
                  src={polygon}
                  alt="icon"
                  style={{
                    height: "15px",
                    marginBottom: "-2px",
                    marginRight: " 8px",
                    width: "15px",
                  }}
                />
              </span>
              Polygon Mumbai
            </Dropdown.Item>
          </Dropdown.Menu>

          <WalletConnectButton />
          <div style={{ fontSize: "25px" }}>
            <FaRegUserCircle />
          </div>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
