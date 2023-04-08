import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <>
      <h1> This is Aboutus page </h1>
      <p>
        {" "}
        I am {a.state.name} and I am in {a.state.class}
      </p>
    </>
  );
};
export default About;
