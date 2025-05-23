import { useState } from "react";

import { Provider } from "react-redux";
import store from "./store/store";
import { Routes, Route } from "react-router-dom";

import PuppyDetails from "./features/puppies/PuppyDetails";
import PuppyList from "./features/puppies/PuppyList";
import PuppyForm from "./features/puppies/PuppyForm";
import Nav from "./features/Nav";

import "./App.scss";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState();
  const [puppyName, setPuppyName] = useState("");

  return (
    // <Provider store={store}>
    //   <h1>Puppy Bowl</h1>
    //   <PuppyForm />
    //   <main>
    //     <PuppyList setSelectedPuppyId={setSelectedPuppyId} />
    //     <PuppyDetails
    //       selectedPuppyId={selectedPuppyId}
    //       setSelectedPuppyId={setSelectedPuppyId}
    //     />
    //   </main>
    // </Provider>
    <Provider store={store}>
      <Nav setPuppyName={setPuppyName}/>
        <Routes>
          <Route path="/" element={<PuppyList setSelectedPuppyId={setSelectedPuppyId} puppyName={puppyName}/>}/>
          <Route path="/PuppyForm" element={<PuppyForm/>}/>
          <Route path="/PuppyDetails" element={<PuppyDetails selectedPuppyId={selectedPuppyId} setSelectedPuppyId={setSelectedPuppyId}/>}/>
        </Routes>
    </Provider>
  );
}
