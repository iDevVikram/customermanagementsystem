import React from "react";
import { deleteCustomer } from "../BLL/CustomerBLL";
function DisplayCustomer(props) {
  function btnDelete_Click(id) {
    deleteCustomer(id);
    props.updateArrCustomers();
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.arrCus.map((e, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.address}</td>
              <td>{e.mobileNo}</td>
              <td>
                <button
                  onClick={() => btnDelete_Click(e.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DisplayCustomer;
