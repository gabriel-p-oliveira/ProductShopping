import React, { useState, useRef } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './App.css'
import Modal from 'react-bootstrap/Modal';




const App = () => {

  const [row, setRow] = useState([])
  const name = useRef(null)
  const qt = useRef(null)
  let i = 1;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function insert() {
    const namevalue = name.current.value
    const qtValue = qt.current.value

    try {
      await fetch(`http://localhost:8080/product/getProductByName?name=${namevalue}&quantity=${qtValue}`)
        .then((data) => data.json())
        .then((datajson) => {
          const newdata = row
          newdata.push(datajson)
          setRow([...newdata])
          console.log(datajson)

        })
        .then(() => {
          name.current.value = ''
          qt.current.value = ''
        })
    } catch (error) {
      console.error(error);
    }
    // await fetch(`http://localhost:8080/product/getProductByName?name=${namevalue}&quantity=${qtValue}`)
    //   .then((data) => data.json())
    //   .then((datajson) => {
    //     // const newdata = row
    //     // newdata.push(datajson)
    //     // setRow([...newdata])
    //     // console.log(datajson)

    //   })
    //   .then(() => {
    //     name.current.value = ''
    //     qt.current.value = ''
    //   })
  }

  async function insertOnEnter(e) {
    let key = e.keyCode || e.which;
    if (key == 13) {
      const namevalue = name.current.value
      const qtValue = qt.current.value
      await fetch(`http://localhost:8080/product/getProductByName?name=${namevalue}&quantity=${qtValue}`)
        .then((data) => data.json())
        .then((datajson) => {
          const newdata = row
          newdata.push(datajson)
          setRow([...newdata])
          console.log(datajson)
        })
        .then(() => {
          name.current.value = ''
          qt.current.value = ''
          document.getElementById("nameTxt").focus();

        })
    }

  }

  document.body.style = 'background: black;';

  return (
    <div>
      <h1 style={{ color: 'white', padding: 3, textAlign: 'center', margin: 20 }}> Product Price Calculator </h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price per item</th>
            <th>Promotion detail</th>
            <th>Discount %</th>
            <th>Final price</th>
          </tr>
        </thead>
        <tbody>
          {row?.map((prod, index) => {
            return <tr key={index}>
              <td>{i++}</td>
              <td>{prod?.name}</td>
              <td>{prod?.quantity}</td>
              <td>{prod?.Price}</td>
              <td>{prod?.promotion}</td>
              <td>{prod?.percentage}</td>
              <td>{prod?.finalPrice}</td>
              <td> <Button variant="warning">Edit</Button> </td>
              <td> <Button variant="danger">Delete</Button> </td>
            </tr>
          })}

          <tr>
            <td></td>
            <td><input required id='nameTxt' type={'text'} placeholder='name' ref={name}></input></td>
            <td><input required type={'text'} placeholder='quantity' ref={qt} onKeyPress={(e) => insertOnEnter(e)}></input></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td><Button variant="primary" onClick={() => insert()}> Insert</Button></td>
          </tr>
        </tbody>
      </Table>
      <Button variant="outline-info" onClick={handleShow}>Checkout</Button> {'    '}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirm to checkout all items </Modal.Title>
        </Modal.Header>
        <Modal.Body>list of products displayed here.....</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Go to Payment Page
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="outline-info">Save as Excel</Button> {'    '}
      <Button variant="outline-info">Save as PDF</Button>





    </div>
  )
};

export default App;