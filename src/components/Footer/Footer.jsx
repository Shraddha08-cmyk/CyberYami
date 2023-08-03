import React from 'react'
import { BsDiscord } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { MenuList, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <div className='footer' style={{ backgroundColor: "#e8f3db", height: "50vh" }}>
            <div
                style={{
                    textAlign: "left",
                    marginLeft: "100px",
                    marginTop: "40px"
                }}
            >
                <img style={{ marginTop: "40px" }}
                    src="https://www.cyberyami.com/images/logo.svg"
                    alt="logo" />
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginTop: "20px"
                    }}
                >
                    <BsDiscord style={{ fontSize: "20px" }} />
                    <BiLogoFacebook style={{ fontSize: "20px" }} />
                    <AiOutlineInstagram style={{ fontSize: "20px" }} />
                    <AiOutlineTwitter style={{ fontSize: "20px" }} />
                    <AiFillLinkedin style={{ fontSize: "20px" }} />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "80px",
                    marginLeft: "80px",
                    // marginBottom: "80px"
                    position: "relative",
                    bottom: "70px",
                    textAlign: "left"
                }}
            >
                <div>
                    <Typography
                        style={{
                            fontSize: "13px",
                            fontWeight: "bolder",
                            color: "#71717A"
                        }}
                    >RESOURCES</Typography>
                    <MenuList>Leaderboard</MenuList>
                    <MenuList>About Us</MenuList>
                    <MenuList>Contact Us</MenuList>
                    <MenuList>Blogs</MenuList>
                </div>
                <div>
                    <Typography
                        style={{
                            fontSize: "13px",
                            fontWeight: "bolder",
                            color: "#71717A"
                        }}
                    >LEGALS</Typography>
                    <MenuList>Terms & Conditions</MenuList>
                    <MenuList>Privacy Policy</MenuList>
                    <MenuList>Refund Policy</MenuList>
                </div>
                <div>
                    <Typography
                        style={{
                            fontSize: "13px",
                            fontWeight: "bolder",
                            color: "#71717A"
                        }}
                    >FOR BUSINESSES</Typography>
                    <MenuList>Business Solutions</MenuList>
                </div>
            </div>
            <hr style={{ position: "relative", bottom: "80px" }} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    bottom: "70px",
                    gap: "600px"
                }}
            >
                <Typography style={{ fontSize: "12px" }}>©2022, All Rights Reserved -
                    <span style={{ textDecoration: "underline" }}>Cyberyami</span>
                    |Wissenhive E-Learning</Typography>
                <Typography style={{ fontSize: "12px" }}>Cookies Settings</Typography>
            </div>
        </div>
    )
}

export default Footer
