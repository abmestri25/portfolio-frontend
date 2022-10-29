import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-primary">
      <div className="flex lg:flex-row flex-col text-center gap-5">
        <h1 className="text-5xl font-semibold text-secondary abhishek">Abhishek</h1>
        <h1 className="text-5xl font-semibold text-white sanjay ">Sanjay</h1>
        <h1 className="text-5xl font-semibold text-tertiary mestri">Mestri</h1>
      </div>
    </div>
  );
};

export default Loader;
