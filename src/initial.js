// import React, { useState, useRef } from 'react'
// const App = () => {

//     const [rows, setRows] = useState([{ name: '', quantity: 1 }]);

//     // const columnsArray = ["Product Name", "Quantity"];
//     const columnsArray = ["name", "quantity"]; //used for input boxes
//     const columnsName = ["name", "Quantity", "Price", "Earliest DOD", "Promotional Discount", "Total amount"];


//     function resolveAfter2Seconds() {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve('resolved');
//             }, 2000);
//         });
//     }

//     const handleAddRow = () => {
//         const item = {};

//         setRows([...rows, {
//             name: '', quantity: 0,
//             price: undefined, earlyDate: undefined,
//             percentage: undefined, normalPrice: undefined
//         }]);
//         // console.log(" handle add row :", rows);
//     };

//     const postResults = () => {
//         console.log('all objects :', rows); // this object can be passed to the backend to do other computation

//     };

//     const handleRemoveSpecificRow = (idx) => {
//         const tempRows = [...rows]; // to avoid  direct state mutation
//         tempRows.splice(idx, 1);
//         // setRows(tempRows);
//     };

//     const handlecalculatePrice = async (idx, index) => {
//         // const tempRows = [...rows]; // to avoid  direct state mutation
//         // tempRows.splice(idx, 1);
//         // setRows(tempRows);

//         console.log(" handle calculate price called :", idx);

//         await fetch(`http://localhost:8080/product/getProductByName?name=${idx.name}&quantity=${idx.quantity}`)
//             .then((data1) => data1.json())
//             .then((js) => {
//                 setRows([...[js]])
//                 // setCalculated(js);
//                 // setRows(updatedRows);

//             })
//             .then((data) => console.log(rows))
//             .catch((e) => {
//                 console.log(e)

//             })



//     };

//     const updateState = (e) => {
//         let prope = e.target.attributes.column.value; // the custom column attribute
//         let index = e.target.attributes.index.value; // index of state array -rows
//         let fieldValue = e.target.value; // value

//         const tempRows = [...rows]; // avoid direct state mutation
//         const tempObj = rows[index]; // copy state object at index to a temporary object
//         tempObj[prope] = fieldValue; // modify temporary object

//         // return object to rows` clone
//         tempRows[index] = tempObj;
//         console.log(tempRows)
//         setRows([...tempRows]); // update state
//         console.log('rows printed here', rows)
//     };

//     // useEffect(() => {
//     //   console.log(rows)
//     // }, [rows])

//     return (
//         <div>
//             <h1 style={{ color: 'black', padding: 3, textAlign: 'center', margin: 20 }}> Price Calculator </h1>
//             <div className="container">
//                 <div className="row clearfix">
//                     <div className="col-md-12 column">
//                         <table className="table table-bordered table-hover" id="tab_logic">
//                             <thead>
//                                 <tr>
//                                     <th className="text-center"> # </th>
//                                     {columnsName.map((column, index) => (
//                                         <th className="text-center" key={index}>
//                                             {column}
//                                         </th>
//                                     ))}
//                                     <th />
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {rows.map((item, idx) => (

//                                     <tr key={idx}>
//                                         <td>{idx + 1}</td>
//                                         {
//                                             columnsArray.map((column, index) => (
//                                                 <td key={index}>
//                                                     <input
//                                                         type="text"
//                                                         column={column}
//                                                         value={item[column]}
//                                                         index={idx}
//                                                         className="form-control"
//                                                         onChange={(e) => updateState(e, idx)}
//                                                     />
//                                                 </td>
//                                             ))
//                                         }
//                                         {

//                                             //TODO: loop over the array to
//                                             <td>
//                                                 <span> {item?.Price} </span>
//                                             </td>

//                                         }
//                                         {
//                                             <td>
//                                                 <span> {item?.earlyDate} </span>
//                                             </td>
//                                         }
//                                         {
//                                             <td>
//                                                 {/* <span> Promotional discount here.... </span> */}
//                                                 <span> {item?.percentage} </span>


//                                             </td>
//                                         }
//                                         {
//                                             <td>
//                                                 {/* <span>Total amount here... </span> */}
//                                                 <span> {item?.normalPrice} </span>

//                                             </td>
//                                         }
//                                         {/* {
//                       columnsArray.map((column, index) => (
//                         <td key={index}>
//                           <span> Some text </span>
//                         </td>
//                       ))
//                     } */}


//                                         <td>
//                                             <button
//                                                 className="btn btn-outline-danger btn-sm"
//                                                 // onClick={() => handlecalculatePrice(idx)}
//                                                 onClick={() => handlecalculatePrice(item, idx)}

//                                             >
//                                                 Calculate
//                                             </button>
//                                         </td>

//                                         <td>
//                                             <button
//                                                 className="btn btn-outline-danger btn-sm"
//                                                 onClick={() => handleRemoveSpecificRow(idx)}
//                                             >
//                                                 Remove
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <button onClick={handleAddRow} className="btn btn-primary">
//                             Add Row
//                         </button>
//                         <button
//                             onClick={postResults}
//                             className="btn btn-success float-right"
//                         >
//                             Save Results
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;