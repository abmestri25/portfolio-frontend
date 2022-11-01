import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const About = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const handleFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(" , ");
      values.skills = tempSkills;
      dispatch(ShowLoading());
      const { data } = await axios.post(
        "https://portfolio-rwp7.onrender.comhttps://abmestri-api.onrender.com/api/portfolio/update-about",
        {
          ...values,
          _id: portfolioData.about._id,
        }
      );
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
      onFinish={handleFinish}
      layout="vertical"
      initialValues={{
        ...portfolioData.about,
        skills: portfolioData.about.skills.join(" , "),
      }}
    >
      <Form.Item name="hero_img" label="Hero Image">
        <input type="text" placeholder="Hero Image URL" />
      </Form.Item>

      <Form.Item name="description1" label="Description 1">
        <textarea placeholder="Description 1"></textarea>
      </Form.Item>
      <Form.Item name="description2" label="Description 2">
        <textarea placeholder="Description 2"></textarea>
      </Form.Item>

      <Form.Item name="skills" label="Skills">
        <textarea placeholder="Skills"></textarea>
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

export default About;
