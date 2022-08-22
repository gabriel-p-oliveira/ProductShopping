import { margin } from "@mui/system";
import React, { useState, useEffect } from "react";

const App = () => {
  const [rows, setRows] = useState([{}]);
  const [backendData, setbackendData] = useState({});
  const columnsArray = ["Product Name", "Quantity", "Price", "Earliest DOD", "Promotional Discount", "Total amount"]; // pass columns here dynamically

  const handleAddRow = () => {
    const item = {};

    setRows([...rows, item]);
    console.log(" handle add row :", rows);
  };

  const postResults = () => {
    console.log(rows); // this object can be passed to the backend to do other computation
  };
  const handleRemoveSpecificRow = (idx) => {
    const tempRows = [...rows]; // to avoid  direct state mutation
    tempRows.splice(idx, 1);
    setRows(tempRows);
  };

  const updateState = (e) => {
    let prope = e.target.attributes.column.value; // the custom column attribute
    let index = e.target.attributes.index.value; // index of state array -rows
    let fieldValue = e.target.value; // value

    const tempRows = [...rows]; // avoid direct state mutation
    const tempObj = rows[index]; // copy state object at index to a temporary object
    tempObj[prope] = fieldValue; // modify temporary object

    // return object to rows` clone
    tempRows[index] = tempObj;
    setRows(tempRows); // update state
  };

  useEffect(() => {
    //set background color
    // document.body.style.backgroundColor = `rgb(230, 255, 255)`;
    document.body.style.backgroundColor = '#5CDB95';

    document.body.style.color = '#263649';
  }, []);

  // document.body.style.backgroundColor = `rgb(230, 255, 255)`;


  return (
    <div>
      <h1 style={{ color: 'white', padding: 3, textAlign: 'center', margin: 20 }}> Asynchronous JS POC </h1>

      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th className="text-center"> # </th>
                  {columnsArray.map((column, index) => (
                    <th className="text-center" key={index}>
                      {column}
                    </th>
                  ))}
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((item, idx) => (

                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    {columnsArray.map((column, index) => (
                      <td key={index}>
                        <input
                          type="text"
                          column={column}
                          value={rows[idx][column]}
                          index={idx}
                          className="form-control"
                          onChange={(e) => updateState(e)}

                        />
                      </td>
                    ))}

                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleRemoveSpecificRow(idx)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddRow} className="btn btn-primary">
              Add Row
            </button>
            <button
              onClick={postResults}
              className="btn btn-success float-right"
            >
              Save Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;