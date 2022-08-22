// // import logo from './logo.svg';
// // import './App.css';
// import React, { useEffect } from 'react';
// // import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));


// const rows = [
//   {
//     name: 'Applet',
//     calories: 159,
//     fat: 6.0,
//     carbs: 24,
//     protein: 4.0
//   },
//   {
//     name: 'Orange',
//     calories: 200,
//     fat: 6.0,
//     carbs: 24,
//     protein: 4.0
//   },
//   {
//     name: 'Banana',
//     calories: 159,
//     fat: 6.0,
//     carbs: 24,
//     protein: 4.0
//   },
//   {
//     name: 'Cupcake',
//     calories: 159,
//     fat: 6.0,
//     carbs: 24,
//     protein: 4.0
//   },
//   {
//     name: 'Gingerbread',
//     calories: 159,
//     fat: 6.0,
//     carbs: 24,
//     protein: 4.0
//   },

// ];



// function App() {
//   useEffect(() => {
//     //set background color
//     document.body.style.backgroundColor = `rgb(230, 255, 255)`;
//     document.body.style.color = '#263649';
//   }, []);

//   function addField(n) {
//     var tr = n.parentNode.parentNode.cloneNode(true);
//     document.getElementById('tbl').appendChild(tr);
//   }

//   return (
//     <div className="App">
//       <h1 style={{ color: 'blue', padding: 1, textAlign: 'center' }}>Product Details </h1>
//       {/* <div>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 900 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>Product Name</StyledTableCell>
//                 <StyledTableCell align="right"> Quantity&nbsp;(per)</StyledTableCell>
//                 <StyledTableCell align="right">Cost per Case&nbsp;($)</StyledTableCell>
//                 <StyledTableCell align="right">Quantity price&nbsp;($)</StyledTableCell>
//                 <StyledTableCell align="right">Promotional Discount&nbsp;($)</StyledTableCell>
//                 <StyledTableCell align="right">Total Price&nbsp;($)</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <input type="text" onChange={this.updateInput}></input>

//               {rows.map((row) => (
//                 <StyledTableRow key={row.name}>
//                   <StyledTableCell component="th" scope="row">
//                     {row.name}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                   <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                   <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                   <StyledTableCell align="right">{row.protein}</StyledTableCell>
//                   <StyledTableCell align="right">{row.protein}</StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//       </div> */}
//       <div>
//         <table id="tbl">
//           <tr>
//             <td><input type="text" name="links" /></td>
//             <td><input type="text" name="keywords" /></td>
//             <td><input type="text" name="violationtype" /></td>
//             <td><input type="submit" class="button" value="Add another line" onClick={(e) => {
//               console.log(e)
//               let tr = e.parentNode.parentNode.cloneNode(true);
//               document.getElementById('tbl').appendChild(tr);

//             }} /></td>

//           </tr>
//         </table>
//       </div>

//     </div>
//   );
// }

// export default App;