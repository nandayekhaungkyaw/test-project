import React from "react";

const ContainerComponent = ({ children, className }) => {
  return (
    <div
      className={`w-full px-4 md:px-0 lg:px-0 mx-auto sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1200px]  ${className}`}
      >
      {children}
    </div>
  );
};

export default ContainerComponent;
