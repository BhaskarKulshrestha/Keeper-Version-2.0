import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footerdiv">
        <p>Copyright ⓒ {year} by Bhaskar Kulshrestha</p>
      </div>
    </footer>
  );
}

export default Footer;
