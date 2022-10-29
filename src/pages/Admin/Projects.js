import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, message, Modal } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

const Projects = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const { data } = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });

      dispatch(HideLoading());
      if (data.success) {
        message.success(data.message);
        setShowAddEditModel(false);
        dispatch(ReloadData(true));
      } else {
        message.error(data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let res;
      const tempTechStack = values?.techStack?.split(" , ") || [];
      values.techStack = tempTechStack;
      if (selectedItemForEdit) {
        res = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        res = await axios.post("/api/portfolio/add-project", values);
      }

      dispatch(HideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        setShowAddEditModel(false);
        dispatch(ReloadData(true));
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end py-3">
        <button
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
          }}
          className="p-3 bg-primary text-white"
        >
          Add Project
        </button>
      </div>

      <div className="grid lg:grid-cols-3 grid-row-1 gap-5">
        {projects.map((project, index) => (
          <div key={index} className="shadow border p-5 border-tertiary ">
            <h1 className="text-2xl text-primary font-semibold">
              {project.title}
            </h1>
            <hr />
            <img src={project.image} alt="" />
            <div className="flex justify-start gap-5 py-2">
              {project.techStack.map((tech, index) => (
                <img key={index} src={tech} alt="teck" height={30} width={30} />
              ))}
            </div>
            <h1>{project.description}</h1>
            <div className="flex justify-between ">
              <a target="_blank" href={project.link} rel="noreferrer">
                <button className="py-2 px-3 bg-tertiary text-white">
                  Demo
                </button>
              </a>
              <div className="flex justify-between gap-5">
                <button
                  onClick={() => {
                    onDelete(project);
                  }}
                  className="py-2 px-3 bg-secondary text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setSelectedItemForEdit(project);
                    setShowAddEditModel(true);
                    setType("edit");
                  }}
                  className="py-2 px-3 bg-primary text-white"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          footer={null}
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit project" : "Add project"}
          onCancel={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(false);
          }}
          maskClosable={false}
        >
          <Form
            initialValues={{
              ...selectedItemForEdit,
              techStack: selectedItemForEdit?.techStack.join(" , "),
            }}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item name="title" label="Title">
              <input type="text" placeholder="Title" />
            </Form.Item>
            <Form.Item name="image" label="Thumbnai Image">
              <input type="text" placeholder="Image " />
            </Form.Item>
            <Form.Item name="techStack" label="Tech Stack">
              <input type="text" placeholder="Tech Stack" />
            </Form.Item>
            <Form.Item name="link" label="Demo Link">
              <input type="text" placeholder="Demo Link" />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>
            <div className="flex justify-end gap-5">
              <button
                type="button"
                onClick={() => {
                  setSelectedItemForEdit(null);
                  setShowAddEditModel(false);
                }}
                className="p-3 text-primary border border-primary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-3  bg-primary text-white"
              >
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
