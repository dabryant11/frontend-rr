// import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
// import MyRecyclables from "./MyRecyclables";
// import RecyclingSites from "./RecyclingSites";
// import RecyclingCategories from "./RecyclingCategories";
// import FavoriteSites from "./FavoriteSites";
import Header from "./Header";
import Footer from "./Footer";
import Activism from "./Activism";
import HOR from "./HOR";
import Senate from "./Senate";
// import Login from "./Login";
// import SitePage from "./SitePage";
// import SiteType from "./SiteType";
// import TextileSites from "./TextileSites";
// import ElectronicSites from "./ElectronicSites";
// import GeneralSites from "./GeneralSites";

function App({ site }) {
  // const [sites, setSites] = useState([]);
  // const [favSites, setFavSites] = useState([]);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/sites")
  //     .then((r) => r.json())
  //     .then((sites) => {
  //       setSites(sites);
  //     });
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:3000/categories")
  //     .then((r) => r.json())
  //     .then((categories) => {
  //       setCategories(categories);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/user_sites")
  //     .then((r) => r.json())
  //     .then((favSites) => {
  //       setFavSites(favSites);
  //     });
  // }, []);

  // const generalSites = sites.filter(
  //   (site) => site.ig === "https://www.instagram.com/nycsanitation/?hl=en"
  // );
  // const textileSites = sites.filter(
  //   (site) => site.ig === "https://www.instagram.com/wearablecollections/?hl=en"
  // );

  // const electronicSites = sites.filter(
  //   (site) => site.ig === "https://www.instagram.com/nysdec/?hl=en"
  // );

  return (
    <div className="app">
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Complete Bootstrap 4 Website Layout</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link href="style.css" rel="stylesheet" />
      </div>
      <Header />

      <Switch>
        {/* <Route exact path="/recyclables">
          <MyRecyclables sites={sites} />
        </Route>
        <Route exact path="/fav_sites">
          <FavoriteSites fav_sites={favSites} set_fav_sites={setFavSites} />
        </Route>
        <Route exact path="/sites">
          <RecyclingSites
            sites={sites}
            fav_sites={favSites}
            set_fav_sites={setFavSites}
          />
        </Route>
        <Route exact path="/categories">
          <RecyclingCategories categories={categories} />
        </Route> */}
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/activism">
          <Activism />
        </Route>
        <Route exact path="/HOR">
          <HOR />
        </Route>
        <Route exact path="/senates">
          <Senate />
        </Route>

        {/* <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/site-type">
          <SiteType />
        </Route>
        <Route exact path="/sites/general">
          <GeneralSites generalSites={generalSites} />
        </Route>
        <Route exact path="/sites/textiles">
          <TextileSites textileSites={textileSites} />
        </Route>
        <Route exact path="/sites/electronics">
          <ElectronicSites electronicSites={electronicSites} />
        </Route> */}
        {/* <Route exact path="/sites/:id">
          <SitePage site={site} />
        </Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
