import Image from "next/image.js";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { Fragment } from "react";


export default function Footer() {
    return (
        <div className="Footer">
            <div className="FooterEmailSub">
                <input className="FooterEmailSubInput" placeholder="Enter your email to know when applications open!"></input>
                <Fragment>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={{ fontSize: 40, color:"black", marginRight:"5px" }} />
                </Fragment>
            </div>
            <div className="FooterSocials">
                <Link
                    rel="noopener noreferrer" target="_blank"
                    smooth="true"
                    href="mailto:team@hackumass.org"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faSquareEnvelope} />
                </Link>

                <Link
                    smooth="true"
                    rel="noopener noreferrer" target="_blank"
                    href="https://www.facebook.com/HackUMass/"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
                <Link
                    smooth="true"
                    rel="noopener noreferrer" target="_blank"
                    href="https://x.com/hackumass"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                </Link>
                <Link
                    smooth="true"
                    rel="noopener noreferrer" target="_blank"
                    href="https://www.instagram.com/hackumass/"
                    className="social-links"
                >
                    <FontAwesomeIcon icon={faSquareInstagram} />
                </Link>
            </div>
            <div className="FooterContent">
                <div className="FooterContentLeft">
                    <p>HackUMass XII</p>
                    <p>Why HackUMass</p>
                    <p style={{ marginBottom: "0" }}>Sponsors</p>
                </div>
                <Image src="/FullBlueLogo.png" sizes={2000} width={0} height={0} priority={true} />
                <div className="FooterContentRight">
                    <p>FAQ</p>
                    <p>Team</p>
                    <p style={{ marginBottom: "0" }}>Contact Us</p>
                </div>
            </div>
        </div>
    )
}