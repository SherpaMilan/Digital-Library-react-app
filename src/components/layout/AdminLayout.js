import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header goes here  */}
      <div className="main">{children}</div>
      {/* footer goes here  */}
    </div>
  );
};

export default AdminLayout;
