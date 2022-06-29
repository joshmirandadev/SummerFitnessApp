import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  //needs to be reflected all across the app, not just in searchexercise comp

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercisees={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercisees={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
