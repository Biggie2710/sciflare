import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const UserCreate = (API_KEY) => {
  let key = API_KEY?.API_KEY;
  const [name, namechange] = useState("");
  const [age, agechange] = useState("");
  const [colour, colourchange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    fetch(`https://crudcrud.com/api/${key}/unicorns/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      mode: 'no-cors',
      body: JSON.stringify({
        // "id":1,
        "name": name,
        "age": age,
        "colour": colour,
      }),
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
            <div className="card" style={{ "textAlign": "left" }}>
              <div className="card-title">
                <h2>Employee Create</h2>
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

export default UserCreate