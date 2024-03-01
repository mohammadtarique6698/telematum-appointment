/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Star from "./ColorStar.jsx";
import Avatar from "./Avatar.jsx";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
const Detail = () => {
  const Link =
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";
  const [info, setInfo] = useState({ appointments: [] });
  const funcForFetchData = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data);
    setInfo(data);
  };

  useEffect(() => {
    funcForFetchData(Link);
  }, []);

  const { appointments } = info;
  //console.log(appointments);

  const TableHeader = ["Patient", "Date", "Time", "Doctor", "Injury", "Action"];

  return (
    <div className="border shadow-md rounded-md px-10">
      <div className="my-10 pl-2">
        <h1 className="text-3xl font-bold text-gray-500">{`Today's Appointment List`}</h1>
      </div>

      <div>
        <div className="my-5">
          <div className="rounded-md">
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
                {/* {appointments.map((item, index) => (
                  <Avatar key={index} info={item} />
                ))} */}
                {appointments.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="py-5 ">
                        <div className="flex flex-row justify-start items-center gap-2 pl-5">
                          <Avatar info={item} />
                          <div className="flex flex-col justify-start items-left">
                            <h3 className="font-bold text-lg">
                              {item.patient_name}
                            </h3>
                            <p className="text-black/50">
                              {item.mobile_number}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <CiCalendarDate />
                        <p>{item.appointment_date}</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-row justify-center items-center gap-1 pl-6">
                        <IoTimeOutline />
                        <p>{item.appointment_time.split(" ")[0]}</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-row justify-start items-center gap-3 pl-10 md:pl-36">
                        <Star />
                        <p className="text-center">{item.doctor}</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="w-28 h-auto rounded-xl p-2 text-center bg-slate-100">
                          <p>{item.injury}</p>
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
