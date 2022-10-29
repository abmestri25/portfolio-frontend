import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const Intro = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const { data } = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
      });
      dispatch(HideLoading());
      if (data.success) {
        message.success(data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={portfolioData && portfolioData.intro}
    >
      <Form.Item name="welcomeText" label="Welcome Text">
        <input type="text" placeholder="Welcome Text" />
      </Form.Item>
      <Form.Item name="firstName" label="First Name">
        <input type="text" placeholder="First Name" />
      </Form.Item>
      <Form.Item name="middleName" label="Middle Name">
        <input type="text" placeholder="Middle Name" />
      </Form.Item>
      <Form.Item name="lastName" label="Last Name">
        <input type="text" placeholder="Last Name" />
      </Form.Item>
      <Form.Item name="caption" label="Caption">
        <input type="text" placeholder="Caption" />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <textarea type="text" placeholder="Description"></textarea>
      </Form.Item>
      <Form.Item name="resume_link" label="Resume Link">
        <input type="text" placeholder="Resume Link" />
      </Form.Item>
      <Form.Item name="image" label="Right Image">
        <input type="text" placeholder="Right Image" />
      </Form.Item>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-5 py-3 uppercase bg-primary text-white"
        >
          Save
        </button>
      </div>
    </Form>
  );
};

export default Intro;
