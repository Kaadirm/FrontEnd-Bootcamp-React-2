import axios from 'axios'
import React, {useEffect, useState} from 'react'


function Suppliers() {
    const [supplier, setsupplier] = useState([])
    
    const getSupplier = () => {axios.get("https://northwind.vercel.app/api/suppliers")
    .then(res => {
        setsupplier(res.data)
    })
}

useEffect(() => {
    getSupplier();
}, [])

const deleteSupplier = (id) => {

    var result = window.confirm("Want to delete?");
    if (result) {

        axios.delete('https://northwind.vercel.app/api/orders/' + id)
            .then(res => {
                getSupplier();
            })
    }


}

    return (<>
        <table className="w3-table-all w3-hoverable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Adress</th>
                </tr>
            </thead>
            <tbody>
                {
                    supplier && supplier.map(item =>{
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>address</td>
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                        </tr> 
                    })
                }
            </tbody>
        </table>
        </>
  )
}

export default Suppliers