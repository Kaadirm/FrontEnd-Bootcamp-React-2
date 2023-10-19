import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const addSupplierValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name boş bırakılmaz"),
    unitPrice: Yup.number().positive().required("Unit Price boş bırakılmaz"),
    unitsInStock: Yup.number().positive("0'dan küçük olamaz").required("Stock boş bırakılmaz"),
    quantityPerUnit: Yup.string().required("Quantity Per Unit boş bırakılmaz")

})

function MyForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            unitPrice: "",
            unitsInStock: "",
            quantityPerUnit: ""
        },
        validationSchema:addSupplierValidationSchema,
        onSubmit: (values) => {

            axios.post('https://northwind.vercel.app/api/products', values)
                .then(res => {
                    console.log('Success!');
                })
                .catch((error) => console.error("error") )
        }
    })

  return (
    <>
    <div className='cont'>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor=''>Name:</label>
                <input type="text" name='name' onChange={formik.handleChange}
                        value={formik.values.name}></input>
                {formik.errors.name ? <p style={{color:'red'}}>{formik.errors.name}</p> : <></>}
            </div>
            <div>
                <label htmlFor=''>Unit Price:</label>
                <input type="text" name='unitPrice' onChange={formik.handleChange}
                        value={formik.values.unitPrice}></input>
                {formik.errors.unitPrice ? <p style={{color:'red'}}>{formik.errors.unitPrice}</p> : <></>}
            </div>
            <div>
                <label htmlFor=''>Stock:</label>
                <input type="text" name='unitsInStock' onChange={formik.handleChange}
                        value={formik.values.unitsInStock}></input>
                {formik.errors.unitsInStock ? <p style={{color:'red'}}>{formik.errors.unitsInStock}</p> : <></>}
            </div>
            <div>
                <label htmlFor=''>Quantity Per Unit:</label>
                <input type="text" name='quantityPerUnit' onChange={formik.handleChange}
                        value={formik.values.quantityPerUnit}></input>
                {formik.errors.quantityPerUnit ? <p style={{color:'red'}}>{formik.errors.quantityPerUnit}</p> : <></>}
            </div>
            <button type="submit">Add</button>
        </form>
    </div>
    </>
  )
}

export default MyForm;