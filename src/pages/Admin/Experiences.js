import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, message, Modal } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

const Experiences = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const { data } = await axios.post(
        "https://abmestri-api.onrender.com/api/portfolio/delete-experience",
        {
          _id: item._id,
        }
      );

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
      if (selectedItemForEdit) {
        res = await axios.post(
          "https://abmestri-api.onrender.com/api/portfolio/update-experience",
          {
            ...values,
            _id: selectedItemForEdit._id,
          }
        );
      } else {
        res = await axios.post(
          "https://abmestri-api.onrender.com/api/portfolio/add-experience",
          values
        );
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
          Add Experience
        </button>
      </div>

      <div className="grid lg:grid-cols-3 grid-row-1 gap-5">
        {experiences.map((experience, index) => (
          <div key={index} className="shadow border p-5 border-tertiary ">
            <h1 className="text-2xl text-primary font-semibold">
              {experience.period}
            </h1>
            <hr />
            <h1 className="text-xl text-secondary pt-2">{experience.title}</h1>
            <h1 className="text-tertiary">{experience.company}</h1>
            <h1>{experience.description}</h1>
            <div className="flex justify-end gap-5">
              <button
                onClick={() => {
                  onDelete(experience);
                }}
                className="py-2 px-3 bg-secondary text-white"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setSelectedItemForEdit(experience);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
                className="py-2 px-3 bg-primary text-white"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          footer={null}
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          onCancel={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(false);
          }}
          maskClosable={false}
        >
          <Form
            initialValues={selectedItemForEdit || {}}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item name="period" label="Period">
              <input type="text" placeholder="Period" />
            </Form.Item>
            <Form.Item name="company" label="Company">
              <input type="text" placeholder="Company name" />
            </Form.Item>
            <Form.Item name="title" label="Designation">
              <input type="text" placeholder="Designation" />
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

export default Experiences;
