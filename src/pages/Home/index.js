import React, { useState } from "react";
// PAGES | COMPONENTS
import LoginModal from "../../components/LoginModal";
// STYLES| STATIC
import "./styles.css";

const Home = () => {
  const [modalActive, setModalActive] = useState(true);

  function handleModalControls() {
    setModalActive(!modalActive);
  }

  return (
    <div id="home-screen">
      <h1>Home screen.</h1>

      <button onClick={handleModalControls}>Modal</button>

      {modalActive && <LoginModal handleModalControls={handleModalControls} />}
    </div>
  );
};

export default Home;
