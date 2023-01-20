import * as React from "react";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { useWeb3Context } from "./hooks";
import Layout from "./layout";
import OwnerMint from "./views/Mint/OwnerMint";
import FirstSale from "./views/Mint/FirstSale";
import SecondSale from "./views/Mint/SecondSale";
import ThirdSale from "./views/Mint/ThirdSale";

import Admin from "./views/Admin";
import AdminFirst from "./views/AdminFirst";
import { useEffect, useState, useCallback } from "react";
import AdminSecond from "./views/AdminSecond";
import AdminThird from "./views/AdminThird";
import AdminGeneral from "./views/AdminGeneral";
import { Background } from "./components/Background";

export const App = () => {
  const { connect, provider, hasCachedProvider, chainID, connected } =
    useWeb3Context();
  const [walletChecked, setWalletChecked] = useState(false);

  useEffect(() => {
    if (hasCachedProvider()) {
      connect().then(() => {
        setWalletChecked(true);
      });
    } else {
      // setWalletChecked(true);
      setWalletChecked(false);
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <Background>
        <FirstSale />
      </Background>
      {/* {walletChecked ? ( */}
      {/* <>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/first" element={<AdminFirst />} />
            <Route path="/admin/second" element={<AdminSecond />} />
            <Route path="/admin/third" element={<AdminThird />} />
            <Route path="/mint" element={<Background />}>
              <Route path="first" element={<FirstSale />} />
              <Route path="owner" element={<OwnerMint />} />
              <Route path="second" element={<SecondSale />} />
              <Route path="third" element={<ThirdSale />} />
            </Route>
            <Route path="/admin/general" element={<AdminGeneral />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </> */}
      {/* ) : (
        <>loading</>
      )} */}
    </>
  );
};

export default App;
