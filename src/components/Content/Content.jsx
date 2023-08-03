import React, { useState } from 'react';
import './Content.css';
import { Button, Card, Typography, CardContent, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import { CheckCircle, GroupOutlined, ThumbUpOutlined } from '@material-ui/icons';
import Overview from '../Overview/Overview';
// import { CDropdownItem, CDropdownMenu, CDropdown } from '@coreui/react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';

const Content = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            <div className='content'>
                {/* <img className='content__img' src="https://e0.pxfuel.com/wallpapers/359/503/desktop-wallpaper-curly-wave-of-light-green-smoke-on-white-background-white-with-green-background-neon-green-smoke.jpg" alt="bgimg" /> */}
                <div className="content__left">
                    <Typography
                        style={{
                            fontWeight: "bold",
                            color: "#3A3F46"
                        }}
                    >Skillup</Typography>
                    <Typography style={{
                        fontSize: "12px",
                        color: "#71717A"
                    }}>
                        Skillup
                        <span style={{
                            fontWeight: "bold",
                            color: "#3F3F46"
                        }}>/ Burpsuite Bootcamp</span>
                    </Typography>
                    <Typography
                        style={{
                            fontSize: "30px",
                            fontWeight: "bold"
                        }}
                    >Burpsuite Bootcamp</Typography>
                    <Typography
                        style={{
                            width: "630px",
                            fontSize: "15px",
                            color: "#71717A"
                        }}
                    >BurpSuite is an all-in-one tool used for WAPT. There are various functions that the burp
                        suite can perform that help one in the process of pen-testing a website. We can intercept traffic,
                        such as requests and responses sent to web servers, and also perform various analyses on those requests.
                        BurpSuite is used by professionals in the field of testing security for websites. BurpSuite comes in
                        versions: professional,a paid product, and the free, Community edition.</Typography>
                    <Typography>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        <span style={{ fontSize: "25px", color: "orange" }}>&#9733;</span>
                        5.0
                    </Typography>
                    <Button variant='contained'
                        style={{
                            backgroundColor: "#BBF7D0",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            // height: "70px",
                            width: "150px",
                            borderRadius: "10px"
                        }}
                    >Login To Enroll</Button>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "40px"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}
                        >
                            <ThumbUpOutlined style={{ color: "#27272A" }} />
                            <Typography style={{ fontSize: "13px", color: "#27272A" }}>Beginner</Typography>
                        </div>
                        <span> | </span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}
                        >
                            <GroupOutlined style={{ color: "#27272A" }} />
                            <Typography style={{ fontSize: "13px", color: "#27272A" }}>37 Enrolled Students</Typography>
                        </div>
                    </div>
                </div>
                <div className="content__right">
                    <Card
                        style={{
                            width: "25vw",
                            position: "relative",
                            bottom: "230px",
                            borderRadius: "10px",
                        }}
                    >
                        <CardContent style={{ height: "430px" }}>
                            <Typography>Course Content</Typography>
                            <hr />
                            <FormControl variant="standard" style={{ width: "300px" }}>
                                <InputLabel id="demo-simple-select-standard-label">1. Introduction</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                >
                                    <MenuItem style={{ color: "#71717A" }} value={""}>None</MenuItem>
                                    <MenuItem value={1} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Introduction to Burpsuite</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" style={{ width: "300px" }}>
                                <InputLabel id="demo-simple-select-standard-label">2. What is Burpsuite</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                >
                                    <MenuItem value={""} style={{ color: "#71717A" }}>None</MenuItem>
                                    <MenuItem value={2} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Defining Burpsuite</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" style={{ width: "300px" }}>
                                <InputLabel id="demo-simple-select-standard-label">3. Setting up Burpsuite</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                >
                                    <MenuItem value={""} style={{ color: "#71717A" }}>None</MenuItem>
                                    <MenuItem value={2} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Manual Setup</MenuItem>
                                    <MenuItem value={3} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Foxy Proxy</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" style={{ width: "300px" }}>
                                <InputLabel id="demo-simple-select-standard-label">4. Features of Burpsuite</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                >
                                    <MenuItem value={""} style={{ color: "#71717A" }}>None</MenuItem>
                                    <MenuItem value={4} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Community edition features</MenuItem>
                                    <MenuItem value={5} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Proxy</MenuItem>
                                    <MenuItem value={6} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Repeater</MenuItem>
                                    <MenuItem value={7} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Intruder</MenuItem>
                                    <MenuItem value={8} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Decoder</MenuItem>
                                    <MenuItem value={9} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Comparer</MenuItem>
                                    <MenuItem value={10} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Sequencer</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" style={{ width: "300px" }}>
                                <InputLabel id="demo-simple-select-standard-label">5. Burpsuite Browser</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                >
                                    <MenuItem value={""} style={{ color: "#71717A" }}>None</MenuItem>
                                    <MenuItem value={11} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Introduction</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" style={{ width: "300px" }}>
                                <InputLabel id="demo-simple-select-standard-label">6. Scoping</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                >
                                    <MenuItem value={""} style={{ color: "#71717A" }}>None</MenuItem>
                                    <MenuItem value={12} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Introduction</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" style={{ width: "300px" }}>
                                <InputLabel id="demo-simple-select-standard-label">7. Sitmap</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                >
                                    <MenuItem value={""} style={{ color: "#71717A" }}>None</MenuItem>
                                    <MenuItem value={13} style={{ color: "#71717A" }}><CheckCircle />&nbsp;&nbsp;&nbsp;&nbsp;Introduction</MenuItem>
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Overview />
        </>
    )
}

export default Content
