import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <h3>
    You're lost little one... 404 - <Link to="/">Home</Link>
  </h3>
);

export default NotFound;
