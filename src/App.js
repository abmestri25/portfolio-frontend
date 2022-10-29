import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages";
import axios from "axios";
import {
  HideLoading,
  ReloadData,
  SetPortfolioData,
  ShowLoading,
} from "./redux/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const { data } = await axios.get(
        "https://portfolio-rwp7.onrender.com/api/portfolio/get-portfolio-data"
      );
      dispatch(SetPortfolioData(data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/admin-login" element={<Login />}></Route>
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
