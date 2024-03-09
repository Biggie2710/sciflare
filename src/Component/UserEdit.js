import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";

const UserEdit = (API_KEY) => {
    let key = API_KEY?.API_KEY;
    const { userId } = useParams();
    const navigate = useNavigate();
    const [_id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [age, agechange] = useState("");
    const [colour, colourchange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);

    useEffect(() => {
        fetch(`https://crudcrud.com/api/${key}/unicorns/` + userId).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp?._id);
            namechange(resp?.name);
            agechange(resp?.age);
            colourchange(resp?.colour);
            activechange(resp?.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const handlesubmit = (e) => {
        e.preventDefault();
        const userdata = { name, age, colour };
        fetch(`https://crudcrud.com/api/${key}/unicorns/` + userId, {
            method: "PUT",
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json, text/plain',
                "content-type": "application/json"
            },
            body: JSON.stringify(userdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>                            <div className="card-title">
                            <h2>Employee Edit</h2>
                        </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Age</label>
                                            <input value={age} onChange={e => agechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Colour</label>
                                            <input value={colour} onChange={e => colourchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserEdit