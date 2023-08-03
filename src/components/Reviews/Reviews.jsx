import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import Footer from '../Footer/Footer'

const Reviews = () => {
    return (
        <>
            <div className='reviews'
                style={{
                    marginTop: "100px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "800px"
                    }}
                >
                    <Typography variant='h6'>Reviews</Typography>
                    <Typography
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "5px"
                        }}
                    >
                        5.0
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "12px" }}>(1 Rating)</span>
                    </Typography>
                </div>
                <Card
                    style={{
                        backgroundColor: "rgb(255, 252, 242)",
                        // backgroundColor: "red",
                        height: "25vh",
                        width: "30vw",
                        marginLeft: "130px",
                        marginTop: "30px",
                        borderRadius: "10px"
                    }}
                >
                    <CardContent>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "30px",
                                marginTop: "15px"
                            }}
                        >
                            <img
                                style={{
                                    height: "60px"
                                }}
                                src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Favatar.png&w=1920&q=75"
                                alt="pro" />
                            <div style={{ textAlign: "left" }}>
                                <Typography style={{ fontWeight: "bold" }}>Vishal Naik</Typography>
                                <Typography>
                                    <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                                    <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                                    <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                                    <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                                    <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                                </Typography>
                            </div>
                        </div>
                        <Typography
                            style={{
                                color: "#757575",
                                fontSize: "15px",
                                textAlign: "left",
                                marginTop: "20px"
                            }}>Awsome bootcamp like very much</Typography>
                    </CardContent>
                </Card>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1000px",
                        marginTop: "30px"
                    }}
                >
                    <Typography style={{ color: "skyblue" }}>Prev</Typography>
                    <Typography style={{ color: "skyblue" }}>Next</Typography>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reviews
