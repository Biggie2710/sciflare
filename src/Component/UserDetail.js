import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

const UserDetail = (API_KEY) => {
    let key = API_KEY?.API_KEY;
    const { userId } = useParams();
    const [userdata, setUSerDataChange] = useState({});
    useEffect(() => {
        fetch(`https://crudcrud.com/api/${key}/unicorns/` + userId).then((res) => {
            return res.json();
        }).then((resp) => {
            setUSerDataChange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            <div className="container">
                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>User Details</h2>
                    </div>
                    <div className="card-body"></div>
                    {userdata &&
                        <div>
                            <h2>The Employee name is : <b>{userdata?.name}</b></h2>
                            <h5>Email is : {userdata?.age}</h5>
                            <h5>Phone is : {userdata?.colour}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default UserDetail