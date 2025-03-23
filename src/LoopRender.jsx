import React from "react";
// destructuring the device object
const DeviceList = ({ device }) => {
  console.log(device);
  return (
    <div id={device.id} className="">
      <div className="flex  text-white rounded-lg flex-col items-center border-2 bg-blue-500 p-4 m-4">
        <h2 className="text-xl font-bold">Device name:{device.name} </h2>
        <ul>
          <li>Device Type:{device.type}</li>
          <li>Work with :{device.work}</li>
        </ul>
      </div>
    </div>
  );
};

export { DeviceList };

