import React from 'react'
import { Link } from "react-router-dom";
function Createuser() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Createuser</h1>
            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='col-lg-6'>
                        <label>Position</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='col-lg-4'>
                        <label>Office</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='col-lg-4'>
                        <label>Age</label>
                        <input type='number' className='form-control'/>
                    </div>
                    <div className='col-lg-4'>
                        <label>Date</label>
                        <input type='Date' className='form-control'/>
                    </div>
                    <div className='col-lg-12'>
                        <label>Salary</label>
                        <input type='number' className='form-control'/>
                    </div>
                    <div className='col-lg mt-3'>
                        <input type='Submit' className='btn btn-primary'/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Createuser