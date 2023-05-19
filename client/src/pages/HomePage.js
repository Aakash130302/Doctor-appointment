import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  const [doctors, setdoctors] = useState([]);
  //login user data
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctor", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setdoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h3 className="text-center" style={{
        textDecorationLine: "underline"
      }}>Registered Doctors</h3>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
