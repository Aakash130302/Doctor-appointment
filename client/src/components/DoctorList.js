import React from "react";
import { useNavigate } from "react-router-dom";
const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        className="card m-2"
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header fs-5">
         <b>Dr. {doctor.firstName} {doctor.lastName}</b> 
        </div>
        <div className="card-body">
          <p>
            <b>Specialization:</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience:</b> {`${doctor.experience} yrs`}
          </p>
          <p>
            <b>Fees per Cunsaltation:</b> {`${doctor.feesPerCunsaltation } Rs`}
          </p>
          <p>
            <b>Timings:</b> {doctor.timings[0]}-{doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
