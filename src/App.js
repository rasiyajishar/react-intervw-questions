import React, { useEffect, useState } from "react";


export default function App() {
  const [pincodedata, setPincodeData] = useState([]);

  useEffect(() => {
    const url = "https://api.postalpincode.in/pincode/679511";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPincodeData(data[0]?.PostOffice || []))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Pincode Data:</h1>
      {pincodedata.length > 0 ? (
        <ul>
          {pincodedata.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
}
