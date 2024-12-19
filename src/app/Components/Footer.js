"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/footer.css";  // Import your custom CSS for the footer

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <ul>
          <div className="footer-logo">
            {/* Use Next.js Image component for the logo */}
            <Image
              src="/Grand 1 - Furniture Store Responsive Magento Theme/logo-footer.png" // Path to your logo image
              alt="Furniture Store Logo"
              width={160} // Set the desired width
              height={40} // Set the desired height
            />
          </div>
          <p>Affordable high-quality furniture and homeware.</p>
        </ul>
        
        <ul>
          <h3>Follow Us</h3>
          <li><i className="fa-brands fa-facebook"></i> &nbsp; Facebook</li>
          <li><i className="fa-brands fa-instagram"></i> &nbsp; Instagram</li>
          <li><i className="fa-brands fa-twitter"></i> &nbsp; Twitter</li>
          <li><i className="fa-brands fa-youtube"></i> &nbsp; Youtube</li>
        </ul>

        <ul>
          <h3>Information</h3>
          {/* Use Next.js Link for client-side navigation */}
          <li><Link href="/">Home</Link></li>
          <li><Link href="/furniture">Furnitures</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="bottom-footer">
        <p>&copy; 2024 Furniture Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
