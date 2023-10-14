import React from "react";
import Layout from "../components/Layout";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";

const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());

      const startMoment = values.timings[0];
      const endMoment = values.timings[1];

      // Format the times in "HH:mm" format
      const startTime = startMoment.format("HH:mm");
      const endTime = endMoment.format("HH:mm")

      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timings: [startTime, endTime],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something wen wrong");
    }
  };
  return (
    <Layout>
      <h1 className="text-center">Apply Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="">Personal Details:</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your experience" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Fee per Cunsaltation"
              name="feesPerCunsaltation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="fees Per Cunsaltation" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Timings"
              name="timings"
              required
              rules={[{ required: true }]}
            >
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex" justify-content-end>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
