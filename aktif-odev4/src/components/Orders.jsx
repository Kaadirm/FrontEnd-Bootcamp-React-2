import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Orders() {
    const [orders, setorders] = useState([])

    const getOrders = () => {
        axios.get("https://northwind.vercel.app/api/orders")
        .then(res => {
        setorders(res.data)
    })
}

useEffect(() => {
    getOrders();
}, [])

const deleteOrders = (id) => {

    var result = window.confirm("Want to delete?");
    if (result) {

        axios.delete('https://northwind.vercel.app/api/orders/' + id)
            .then(res => {
                getOrders();
            })
    }
}

  return (
    <>
        <table className="w3-table-all w3-hoverable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Customer Id</th>
                    <th>Employee Id</th>
                    <th>Order Date</th>
                    <th>Required Date</th>
                    <th>Shipped Date</th>
                    <th>Ship Via</th>
                    <th>Freight</th>
                    <th>Ship Name</th>
                    <th>Ship Address</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map(item =>{
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.customerId}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.orderDate}</td>
                            <td>{item.requiredDate}</td>
                            <td>{item.shippedDate}</td>
                            <td>{item.shipVia}</td>
                            <td>{item.freight}</td>
                            <td>{item.shipName}</td>
                            <td>Ship Address</td>
                            <td>Details</td>
                            <td><button onClick={() => deleteOrders(item.id)}>Delete</button></td>
                        </tr> 
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Orders