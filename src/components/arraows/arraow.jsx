// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Show arrow when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
      {showArrow && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            backgroundColor: "rgb(105, 208, 215)",
            // background: "blue",
            transform: "all 0.3s",
            color: "black",
            border: "none",
            borderRadius: "50%",
            padding: "10px 15px",
            cursor: "pointer",
            boxShadow: "2px 2px 10px black, 2px 2px 20px black",
            // boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
          
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTop;
