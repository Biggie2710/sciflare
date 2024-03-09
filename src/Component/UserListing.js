import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const UserListing = (API_KEY) => {
    let key = API_KEY?.API_KEY;
    const [userdata, setUserdatachange] = useState(null);
    const navigate = useNavigate();
    const LoadDetail = (id) => {
        navigate("/user/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/user/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch(`https://crudcrud.com/api/${key}/unicorns/` + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch(`https://crudcrud.com/api/${key}/unicorns/`).then((res) => {
            return res.json();
        }).then((resp) => {
            setUserdatachange(resp);

        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>User Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="user/create" className="btn btn-success">Add User (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Colour</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {userdata &&
                                userdata?.map(item => (
                                    <tr key={item?._id}>
                                        <td>{item?.name}</td>
                                        <td>{item?.age}</td>
                                        <td>{item?.colour}</td>
                                        <td>
                                            <a onClick={() => { LoadDetail(item?._id) }} className="btn btn-primary">Details</a>
                                            <a onClick={() => { LoadEdit(item?._id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item?._id) }} className="btn btn-danger">Delete</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserListing