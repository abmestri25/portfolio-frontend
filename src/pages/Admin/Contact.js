import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const Contact = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const { data } = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
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
      initialValues={portfolioData && portfolioData.contact}
    >
      <Form.Item name="name" label="Name">
        <input type="text" placeholder="Name" />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <input type="text" placeholder="Email" />
      </Form.Item>
      <Form.Item name="gender" label="Gender">
        <input type="text" placeholder="Gender" />
      </Form.Item>
      <Form.Item name="mobile" label="Mobile">
        <input type="text" placeholder="Mobile" />
      </Form.Item>
      <Form.Item name="address" label="Address">
        <input type="text" placeholder="Address" />
      </Form.Item>
      <Form.Item name="marital_status" label="Marital Status">
        <input type="text" placeholder="Marital Status" />
      </Form.Item>

      <Form.Item name="instagram" label="Instagram Profile">
        <input type="text" placeholder="Instagram Profile" />
      </Form.Item>
      <Form.Item name="whatsapp" label="Whatsapp Profile">
        <input type="text" placeholder="Whatsapp Profile" />
      </Form.Item>
      <Form.Item name="twitter" label="Twitter Profile">
        <input type="text" placeholder="Twitter Profile" />
      </Form.Item>
      <Form.Item name="facebook" label="Facebook Profile">
        <input type="text" placeholder="Facebook Profile" />
      </Form.Item>
      <Form.Item name="image" label="Illustration">
        <input type="text" placeholder="Illustration" />
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

export default Contact;
