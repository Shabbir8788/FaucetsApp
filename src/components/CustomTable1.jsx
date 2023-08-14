import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

const CustomTable1 = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);

  const toggleTable1 = () => {
    setActiveButton("table1");
    setShowTable1(true);
    setShowTable2(false);
  };

  const toggleTable2 = () => {
    setActiveButton("table2");
    setShowTable1(false);
    setShowTable2(true);
  };

  return (
    <div style={{ backgroundColor: "white", paddingLeft: "80px" }}>
      <h3
        style={{
          fontFamily: "Varela Round, Sans-Serif",
          fontWeight: "700",
          fontSize: "15px",
          marginBottom: "20px!important",
        }}
      >
        Request History
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: "13px",
          marginRight: "10px",
          marginBottom: "5px",
          gap: "1rem",
        }}
      >
        <Button
          onClick={toggleTable1}
          style={{
            backgroundColor: activeButton === "table1" ? "blue" : "white",
            color: activeButton === "table1" ? "white" : "black",
            padding: "15px",
            width: "30%",
          }}
        >
          ETH Transaction History
        </Button>
        <br />
        <Button
          onClick={toggleTable2}
          style={{
            backgroundColor: activeButton === "table2" ? "blue" : "white",
            color: activeButton === "table2" ? "white" : "black",
            padding: "15px",
            width: "40%",
          }}
        >
          TestLink Transaction History
        </Button>
      </div>

      {showTable1 && <Table1 />}
      {showTable2 && <Table2 />}
    </div>
  );
};

const Table1 = () => {
  return (
    <Table striped>
      <thead style={{ textAlign: "center" }}>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {/* Table 1 content */}
        <tr>
          <td>1</td>
          <td>12:30 AM</td>
          <td>487</td>
          <td>4s8er5s5fe57rjmxnfuewrurks</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10:30 AM</td>
          <td>875</td>
          <td>sf7s7ers4e7r7wser</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11:30 AM</td>
          <td>797</td>
          <td>se4s7er7</td>
        </tr>
      </tbody>
    </Table>
  );
};

const Table2 = () => {
  return (
    <Table striped>
      <thead style={{ textAlign: "center" }}>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {/* Table 2 content */}
        <tr>
          <td>1</td>
          <td>08:30 AM</td>
          <td>748</td>
          <td>7sgdfer35475896</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10:23 AM</td>
          <td>974</td>
          <td>jte5485869jndn</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11:23 AM</td>
          <td>9756</td>
          <td>jte76tfdedn</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomTable1;
