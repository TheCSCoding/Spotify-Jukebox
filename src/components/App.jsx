import React from "react";
import Header from "./Header";
import Artist from "./Artist";
import Footer from "./Footer";


function App(props) {
  return (
    <div>
      <Header />
      <Artist 
      name="Silence Is Golden"
      img="https://i.scdn.co/image/ab67616d0000b273893ae0ff717a26b9504b91f0"

      />
      <Footer />
   </div>
  );
}

export default App;
