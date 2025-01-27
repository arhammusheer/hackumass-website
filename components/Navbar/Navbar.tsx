"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function NavigationBarLand() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar-landing">
        <div className="navbar-container">
          <Link
            href="/"
            className="navbar-logo landing"
            onClick={closeMobileMenu}
          >
            <Image src="/FullBlueLogo.png" alt="logo" width={120} height={60} />
          </Link>

          <div className="menu-icon landing" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ fontSize: 20, color: "black" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                style={{ fontSize: 20, color: "black" }}
              />
            )}
          </div>

          <ul
            className={click ? "nav-menu active landing" : "nav-menu landing"}
          >
            <li className="nav-item landing">
              <Link
                href="#aboutus"
                className="nav-links-landing landing"
                style={{ borderTop: "none" }}
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#sponsors"
                className="nav-links-landing landing"
                style={{ borderTop: "none" }}
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Sponsors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#faq"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#team"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://hackumass-xi.devpost.com/project-gallery"
                className="nav-links-landing landing"
                style={{ borderTop: "none" }}
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                2024
              </Link>
            </li>
            <li className="nav-item">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/HackUMass/"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://x.com/hackumass"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/hackumass/"
                className="nav-links-landing landing"
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </Link>
            </li>
            {/* 
                        <li className="nav-item application-button" style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", paddingLeft: "20px", paddingRight: "20px", paddingTop: "7px", paddingBottom: "7px", borderRadius: "30px" }}>
                            <Link
                                rel="noopener noreferrer" target="_blank"
                                style={{ color: "black" }}
                                
                                href="https://dashboard.hackumass.com"
                                className="nav-links-landing landing"
                                onClick={closeMobileMenu}>
                                Coming Soon!
                            </Link>
                        </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
