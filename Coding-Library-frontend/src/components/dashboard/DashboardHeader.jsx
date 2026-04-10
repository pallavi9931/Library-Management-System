import React from "react";

const DashboardHeader = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <h2>Coding Library</h2>
      <button
        onClick={logout}
        style={{ position: "absolute", top: "20px", right: "20px" }}
      >
        Logout
      </button>
    </>
  );
};

export default DashboardHeader;
