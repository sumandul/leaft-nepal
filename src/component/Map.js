import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { provincestate } from '../province';
import District from "../district.json"
import Mun from "../municipaltiy.json"
// Define colors for each province
const provinceColors = [
  'red',        // Color for Province 1
  'green',      // Color for Province 2
  'blue',       // Color for Province 3
  'lightblue',  // Color for Province 4
  'lightgreen', // Color for Province 5
  'yellow',     // Color for Province 6
  'orange'      // Color for Province 7
];

const getProvinceColor = (province) => {
  return provinceColors[province - 1] || 'skyblue'; // Default color if province number not found
};

const style = (feature) => {
  return {
    weight: 2,
    opacity: 1,
    color: '#FFF',
    dashArray: '1',
    fillOpacity: 0.7,
    fillColor: getProvinceColor(feature.properties.Province)
  };
};

const Map = ({ setOpen }) => {
  const [tab, setTab] = useState("province")
  const [provinceData, setProvinceData] = useState(null);

  useEffect(() => {
    // Set the GeoJSON data (assuming only one province data is included)
    setProvinceData(provincestate);
  }, []);
  const handleOpen = () => {
     setOpen(true)

  }

  return (
    <div className=' '>
      <div className='bg-blue-500 py-6 flex justify-center items-center' >
        <div className='flex gap-8 text-white '>

          <button className={`${tab === "province" && 'bg-yellow-300'}  rounded-md py-2 px-3 font-medium  capitalize text-lg`} onClick={() => setTab("province")}>province</button>
          <button className={`${tab === "district" && 'bg-yellow-300'} rounded-md py-2 px-3 font-medium  capitalize text-lg`} onClick={() => setTab("district")}>district</button>
          <button className={`${tab === "mun" && 'bg-yellow-300'} rounded-md py-2 px-3 font-medium  capitalize text-lg`} onClick={() => setTab("mun")}>municipaltiy</button>
        </div>
        <button className={`${tab === "mun" && 'bg-yellow-300'} rounded-md py-2 px-3 font-medium  capitalize text-lg`} onClick={handleOpen}>Contact us</button>
      </div>

      {provinceData ? (
        <MapContainer className='z-[-1]' center={[28.3949, 84.124]} zoom={8} style={{ height: '1000px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

          />
          {
            tab === "province" && <GeoJSON
              data={provincestate}
              style={style}

            />


          }
          {
            tab === "district" && <GeoJSON
              data={District}
            // style={style}

            />
          }
          {
            tab === "mun" && <GeoJSON
              data={Mun}


            />
          }
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default Map;
