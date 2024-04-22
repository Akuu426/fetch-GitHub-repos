import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "2em" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default NotFound;
