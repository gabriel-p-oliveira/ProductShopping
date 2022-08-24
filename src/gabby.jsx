import React, {  useState, useRef } from 'react'
import Table from 'react-bootstrap/Table';

function Gabby() {
    const [row, setRow] = useState([])
    const name = useRef(null)
    const qt = useRef(null)

    async function insert() {
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
            })
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>name</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>promotion</th>
                    <th>percentage</th>
                    <th>final price</th>
                </tr>
            </thead>
            <tbody>
                {row?.map((prod, index) => {
                    return <tr key={index}>
                        <td>{prod?.name}</td>
                        <td>{prod?.quantity}</td>
                        <td>{prod?.Price}</td>
                        <td>{prod?.promotion}</td>
                        <td>{prod?.percentage}</td>
                        <td>{prod?.finalPrice}</td>
                    </tr>
                })}

                <tr>
                    <td><input type={'text'} placeholder='name' ref={name}></input></td>
                    <td><input type={'text'} placeholder='quantity' ref={qt}></input></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button onClick={() => insert()}>insert</button></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Gabby