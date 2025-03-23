import React from "react";
import { DeviceList } from "./LoopRender";

const App = () => {
  const devices = [
    { id: 1, name: "Iphone11", type: "Mobile", work: "IOS" },
    { id: 2, name: "iphone12", type: "Mobile", work: "IOS" },
    { id: 3, name: "iphone13", type: "Mobile", work: "IOS" },
    { id: 4, name: "Samsung S21", type: "Mobile", work: "Android" },
    { id: 5, name: "Samsung S22", type: "Mobile", work: "Android" },
    { id: 6, name: "Samsung S23", type: "Mobile", work: "Android" },
    { id: 7, name: "Samsung S24", type: "Mobile", work: "Android" },
    { id: 8, name: "MAC mini", type: "Computer", work: "MacOS" },
    { id: 9, name: "MAC Pro", type: "Computer", work: "MacOS" },
    { id: 10, name: "MAC Air", type: "Computer", work: "MacOS" },
    { id: 11, name: "Dell", type: "Computer", work: "Windows" },
    { id: 12, name: "HP", type: "Computer", work: "Windows" },
    { id: 13, name: "Lenovo", type: "Computer", work: "Windows" },
    { id: 14, name: "ipad", type: "Tablet", work: "IOS" },
    { id: 15, name: "Samsung Tab", type: "Tablet", work: "Android" },
  ];
  return(
    <div className="grid grid-cols-4 gap-1">
    {
      devices.map(device=><DeviceList key={device.id} device={device} ></DeviceList>)
    }
    </div>
  )

};

export default App;
