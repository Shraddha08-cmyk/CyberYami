import { Button, Card, CardContent, Typography } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import './Navbar.css';
import Content from '../Content/Content';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <Card
                    style={{
                        width: "95vw",
                        marginLeft: "35px",
                        marginTop: "20px",
                        borderRadius: "10px"
                    }}
                >
                    <CardContent
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "170px"
                        }}
                    >
                        <img src="https://www.cyberyami.com/images/logo.svg" alt="logo" />
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "40px",
                                // fontSize: "12px"
                            }}
                        >
                            <Typography
                                style={{
                                    cursor: "pointer",
                                }}
                            >Academia</Typography>
                            <Typography
                                style={{
                                    cursor: "pointer",
                                }}
                            >CTF Warriors</Typography>
                            <Typography
                                style={{
                                    cursor: "pointer",
                                }}

                            >Business Solutions</Typography>
                            <Typography
                                style={{
                                    cursor: "pointer",
                                }}
                            >Resources</Typography>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "30px"
                            }}
                        >
                            <ShoppingCartOutlined
                                style={{
                                    cursor: "pointer",
                                }}
                            />
                            <Typography
                                style={{
                                    cursor: "pointer",
                                }}
                            >Sign Up</Typography>
                            <Button variant='contained'
                                style={{
                                    backgroundColor: "#86EFAC",
                                    fontWeight: "normal",
                                    textTransform: "capitalize",
                                    width: "90px"
                                }}
                            >
                                Login
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Content />
        </>
    )
}

export default Navbar
