import React from 'react'
import { Link } from "react-router-dom";
 function Productlist() {
    return (

        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Prouctlist</h1>
                <Link to="/Createproduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> create Product</Link>
            </div>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>
                        <Link to="/Editprouct" className='btn btn-primary btn-sm'>Edit</Link>
                            <button className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td>$170,750</td>
                        <td>
                        <Link to="/Edituser" className='btn btn-primary btn-sm'>Edit</Link>
                            <button className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}
export default Productlist