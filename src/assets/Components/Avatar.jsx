/* eslint-disable react/prop-types */
import React from "react";

const Avatar = ({ info }) => {
  //console.log(info);

  const { patient_name } = info;
  const initials =
    patient_name.split(" ")[0].charAt(0) + patient_name.split(" ")[1].charAt(0);

  return (
    <div className="flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
        <span className="text-sm font-bold">{initials}</span>
      </div>
    </div>
  );
};

export default Avatar;
