/* eslint-disable react/prop-types */
import React from "react";
import Star from "./ColorStar.jsx";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
const Detail = ({ info, color }) => {
  //console.log(color);
  const TableHeader = ["Patient", "Date", "Time", "Doctor", "Injury", "Action"];

  return (
    <div className="border shadow-md rounded-md px-10">
      <div className="my-10 pl-2">
        <h1 className="text-3xl font-bold text-gray-500">{`Today's Appointment List`}</h1>
      </div>

      <div>
        <div className="my-5">
          <div className="border rounded-md">
            <table className="w-full shadow-md">
              <thead className="bg-slate-100">
                <tr>
                  {TableHeader.map((item, index) => (
                    <th
                      className="text-center"
                      style={{ paddingBottom: "2rem", paddingTop: "2rem" }}
                      key={index}
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {info.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <div className="py-5 ">
                        <div className="flex flex-row justify-center items-center gap-2">
                          <img
                            src={item.Image}
                            alt={item.Name}
                            className="rounded-full h-12 w-12"
                          />
                          <div className="flex flex-col justify-center items-left">
                            <h3 className="font-bold text-lg">{item.Name}</h3>
                            <p className="text-black/50">{item.PhoneNumber}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <CiCalendarDate />
                        <p>{new Date().toLocaleDateString("en-GB")}</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <IoTimeOutline />
                        <p>
                          {new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-row justify-center items-center gap-3">
                        <Star color={color[index]} />
                        <p className="text-center">{item.DoctorName}</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="w-28 h-auto rounded-xl p-2 text-center bg-slate-100">
                          <p>{item.Injury}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <button>
                        <PiDotsThreeOutlineVerticalLight />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
