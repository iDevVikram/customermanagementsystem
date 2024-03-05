import React, { useState } from "react";
import {
  addCustomer,
  deleteCustomer,
  getCustomerList,
  modifyCustomer,
  searchCustomer,
} from "../BLL/CustomerBLL";
import DisplayCustomer from "./DisplayCustomer";
function Customer(props) {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNO] = useState("");
  const [arrCus, setArrCus] = useState([]);
  function updateStateArray() {
    let arr = getCustomerList();
    setArrCus(arr);
  }
  function id_OnChange(e) {
    setID(e.target.value);
  }
  function name_OnChange(e) {
    setName(e.target.value);
  }
  function address_OnChange(e) {
    setAddress(e.target.value);
  }
  function mobile_OnChange(e) {
    setMobileNO(e.target.value);
  }
  function addBtn_click(e) {
    addCustomer(id, name, address, mobileNo);
    updateStateArray();
  }
  function delBtn_click(e) {
    deleteCustomer(id);
    updateStateArray();
  }
  function searchBtn_click(e) {
    var e = searchCustomer(id);
    if (e) {
      setName(e.name);
      setAddress(e.address);
      setMobileNO(e.mobileNo);
    } else {
      alert("enter valid Id");
    }
  }
  function modifyBtn_click(e) {
    var msg = modifyCustomer(id, name, address, mobileNo);
    if (msg !== undefined) {
      alert(msg);
    }
    updateStateArray();
  }
  return (
    <>
      <div className="container mt-5 mb-3 p-4 bg-info bg-opacity-50 border border-info rounded-2">
        <form>
          <h3 className="text-center text-danger mb-5">
            Customer Management System
          </h3>

          <div className="row mb-3">
            <label className="col-sm-2 fw-semibold col-form-label">Id :</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Id No."
                value={id}
                onChange={id_OnChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 fw-semibold col-form-label">
              Name :
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Your Name"
                value={name}
                onChange={name_OnChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 fw-semibold col-form-label">
              Address :
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Your Address"
                value={address}
                onChange={address_OnChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 fw-semibold col-form-label">
              Mobile No. :
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                className="form-control "
                placeholder="Enter Your Mobile No."
                value={mobileNo}
                onChange={mobile_OnChange}
              />
            </div>
          </div>
        </form>

        <button onClick={addBtn_click} className="btn btn-primary m-2">
          Add
        </button>
        <button onClick={delBtn_click} className="btn btn-primary m-2">
          Delete
        </button>
        <button onClick={searchBtn_click} className="btn btn-primary m-2">
          Search
        </button>
        <button onClick={modifyBtn_click} className="btn btn-primary m-2">
          Modify
        </button>
      </div>
      <div className="container">
        <DisplayCustomer
          arrCus={arrCus}
          updateArrCustomers={updateStateArray}
        />
      </div>
    </>
  );
}

export default Customer;
