import React, { useState } from "react";
import "./WalletConnectButton.css";
import wallet from "../images/wallet-icon.jpg";
import metamask from "../images/metamask-icon.png";
import walletconnect from "../images/walletconnect-icon.png";

const WalletConnectButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wallet-connect">
      <button className="connect-button" onClick={openModal}>
        <img src={wallet} alt="Wallet" className="wallet-icon" />
        Connect Wallet
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="box">
              <h2>Connect Your Wallet</h2>
              <div className="cards">
                <div className="card">
                  <img src={metamask} alt="Metamask" />
                  <p>Metamask</p>
                </div>
                <div className="card">
                  <img src={walletconnect} alt="WalletConnect" />
                  <p>WalletConnect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;
