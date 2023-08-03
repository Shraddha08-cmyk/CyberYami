import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import Reviews from '../Reviews/Reviews'

const About = () => {
    return (
        <>
            <div className='about'>
                <Card
                    style={{
                        backgroundColor: "#BBF7D0",
                        height: "40vh"
                    }}
                >
                    <CardContent>
                        <Typography variant='h5'
                            style={{
                                textAlign: "left",
                                marginLeft: "100px",
                                marginTop: "30px"
                            }}
                        >About the Author</Typography>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "20px"
                            }}
                        >
                            <img
                                style={{
                                    height: "120px"
                                }}
                                src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Flogo-black.png&w=1920&q=75"
                                alt="logo2" />
                            <div
                                style={{
                                    textAlign: "left",
                                    marginLeft: "50px"
                                }}
                            >
                                <Typography variant='h6'
                                    style={{
                                        // fontWeight: "normal"
                                    }}
                                >
                                    Team Cyberyami
                                </Typography>
                                <Typography
                                    style={{
                                        width: "870px",
                                        fontSize: "15px",
                                    }}
                                >
                                    CyberYami brings you a plethora of custom-designed bootcamps and courses.
                                    The learning material focuses on hands-on practice that is much needed in
                                    cyber security. We have included labs and challenges to make you understand
                                    how things work and are done in the industry. You can showcase your skills
                                    on your resume with our certification proving that you can apply the knowledge
                                    gained in a real-world scenario.
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Reviews />
        </>
    )
}

export default About
