import { message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      dispatch(ShowLoading());
      const { data } = await axios.post(
        "https://abmestri-api.onrender.com/api/portfolio/admin-login",
        user
      );
      dispatch(HideLoading());
      console.log(data);
      if (data.success) {
        message.success(data.message);
        localStorage.setItem("token", data.data._id);
        window.location.href = "/admin";
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-primary ">
      <form
        method="POST"
        className="flex flex-col gap-5 lg:border border-tertiary lg:p-10 lg:w-1/4"
      >
        <div className="text-white text-5xl text-center">Admin Login</div>
        <hr />

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="text-center"
          onChange={(e) => {
            setUser({
              ...user,
              username: e.target.value,
            });
          }}
          value={user.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="text-center"
          value={user.password}
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="p-3 bg-primary text-white border border-tertiary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
