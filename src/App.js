import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { User } from './user';
function App() {
  // const [pincodedata, setPincodeData] = useState([]);

  // useEffect(() => {
  //   const url = "https://api.postalpincode.in/pincode/679511";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setPincodeData(data[0].PostOffice))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="App"> 
      {/* <ul>
        {pincodedata.map((item, index) => (
          <li key={index}>{JSON.stringify(item.Name)}</li>
        ))}
      </ul> */}
   


    
      <Routes>
     
        
        {/* Define a route with a parameter */}
        <Route path="/user/:id" component={User} />

     
      
    </Routes>
       {/* Create links to navigate to different user profiles */}
       <ul>
          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="/user/3">User 3</Link></li>
        </ul>
    </div>
  );
}

export default App;
