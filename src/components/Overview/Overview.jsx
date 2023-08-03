import React from 'react';
import { Card, CardContent, MenuList, Typography } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import About from '../About/About';

const Overview = () => {
    return (
        <>
            <div className='overview'>
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                        marginTop: "40px",
                        marginLeft: "80px"
                    }}
                >
                    <Typography
                        style={{
                            cursor: "pointer"
                        }}
                    >Overview</Typography>
                    <Typography
                        style={{
                            cursor: "pointer"
                        }}
                    >Reviews</Typography>
                </nav>
                <hr style={{ width: "90vw", marginLeft: "80px" }} />
                <div
                    style={{
                        display: "flex",
                        // alignItems: "flex-start",
                        justifyContent: "flex-start",
                        marginLeft: "80px",
                        gap: "250px"
                    }}
                >
                    <div className="overview__left"
                        style={{
                            textAlign: "left",
                            // marginLeft: "80px",
                            // marginTop: "40px"
                        }}>
                        <Typography variant='h5'
                            style={{
                                fontWeight: "normal"
                            }}
                        >Overview</Typography>
                        <Typography
                            style={{
                                width: "470px",
                                fontSize: "15px",
                                color: "#27272A",
                                marginTop: "5px"
                            }}
                        >Burpsuite bootcamp brings you a detailed, structured way of learning and
                            practicing this tool. This tool is highly used in the industry and mainly is used for
                            conducting WAPT i.e Web Application Penetration Testing. You will learn about every aspect
                            and sub-tools included in the burp suite included in this bootcamp are practice labs to get
                            your hands on the burp suite and theory lectures with interactive video demonstrations.
                        </Typography>
                    </div>
                    <div className="overview__right"
                        style={{
                            textAlign: "left",
                        }}>
                        <Typography variant='h5'
                            style={{
                                fontWeight: "normal"
                            }}
                        >Top skill you will learn</Typography>
                        <MenuList style={{ color: "#71717A" }}><CheckCircle style={{ color: "#32CD32" }} />&nbsp;&nbsp;Understanding of Burpsuite</MenuList>
                        <MenuList style={{ color: "#71717A" }}><CheckCircle style={{ color: "#32CD32" }} />&nbsp;&nbsp;Know the tools offered by the burp suite</MenuList>
                        <MenuList style={{ color: "#71717A" }}><CheckCircle style={{ color: "#32CD32" }} />&nbsp;&nbsp;Use burp suite with ease in your testing</MenuList>
                        <MenuList style={{ color: "#71717A" }}><CheckCircle style={{ color: "#32CD32" }} />&nbsp;&nbsp;Know the difference between the pro & free edition</MenuList>
                        <MenuList style={{ color: "#71717A" }}><CheckCircle style={{ color: "#32CD32" }} />&nbsp;&nbsp;Perform full-fledged WAPT using only BurpSuite</MenuList>
                        <MenuList style={{ color: "#71717A" }}><CheckCircle style={{ color: "#32CD32" }} />&nbsp;&nbsp;Learn Real-world techniques</MenuList>
                    </div>
                </div>
                <div>
                    <Typography variant='h5'
                        style={{
                            textAlign: "left",
                            marginLeft: "80px"
                        }}
                    >This course will includes:</Typography>
                    <Card style={{ height: "60vh", backgroundColor: "#F5F5F5", marginTop: "20px" }}>
                        <CardContent
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "50px",
                                marginTop: "50px"
                            }}
                        >
                            <Card
                                style={{
                                    height: "40vh",
                                    width: "23vw",
                                    borderRadius: "10px",
                                    // display: "flex",
                                    // flexDirection: "column",
                                    // justifyContent: "center"
                                }}
                            >
                                <img
                                    style={{
                                        marginTop: "50px"
                                    }}
                                    src="https://www.cyberyami.com/images/courses/theory.svg"
                                    alt="theory" />
                                <Typography variant='h6'
                                    style={{
                                        marginTop: "30px"
                                    }}
                                >Self paced - Pragmatic Topics</Typography>
                            </Card>
                            <Card
                                style={{
                                    height: "40vh",
                                    width: "23vw",
                                    borderRadius: "10px"
                                }}
                            >
                                <img
                                    style={{
                                        marginTop: "50px"
                                    }}
                                    src="https://www.cyberyami.com/images/courses/practice-lab.svg"
                                    alt="practice" />
                                <Typography variant='h6'
                                    style={{
                                        marginTop: "30px"
                                    }}
                                >Hands-on Practice Labs</Typography>
                            </Card>
                            <Card
                                style={{
                                    height: "40vh",
                                    width: "23vw",
                                    borderRadius: "10px"
                                }}
                            >
                                <img
                                    style={{
                                        marginTop: "50px"
                                    }}
                                    src="https://www.cyberyami.com/images/courses/cert-completion.svg"
                                    alt="cert" />
                                <Typography variant='h6'
                                    style={{
                                        marginTop: "30px"
                                    }}
                                >Certificate of Completion</Typography>
                            </Card>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <About />
        </>
    )
}

export default Overview
