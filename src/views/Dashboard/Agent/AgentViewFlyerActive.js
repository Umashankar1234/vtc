import React, { useState, useEffect, useContext } from "react";
import { Recorder } from 'react-voice-recorder'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import banner from "../../../images/vtc-banner.jpg";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import up_img from "../../../images/up.png";
import middle_img from "../../../images/middle.png";
import bottom_img from "../../../images/bottom.png";
import man from "../../../images/man.png";
import house_img from "../../../images/house-img.jpg";
import CancelIcon from '@material-ui/icons/Cancel';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import Footer from "../../../components/Footer/AgentFooter";
import AgentHeader from "../Header/AgentHeader";
import Skeleton from '@material-ui/lab/Skeleton';
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../../CommonMethods/Authentication";
import { APIURL, APIPath } from "../../../CommonMethods/Fetch";
import { postRecord } from "../../../CommonMethods/Save";
import logo from "../../../images/wallpaper.jpg";
import photo from "../../../images/photo.jpg";
import logo1 from "../../../images/logo.jpg"
import FlyerTheme1 from "./components/flyer/FlyerTheme1";
import FlyerTheme2 from "./components/flyer/FlyerTheme2";
import FlyerTheme3 from "./components/flyer/FlyerTheme3";
import FlyerTheme4 from "./components/flyer/FlyerTheme4";
import FlyerTheme5 from "./components/flyer/FlyerTheme5";
import FlyerTheme6 from "./components/flyer/FlyerTheme6";
import FlyerTheme7 from "./components/flyer/FlyerTheme7";
import FlyerTheme8 from "./components/flyer/FlyerTheme8";
const APIGetViewFlyerData = APIURL() + "view-flyer";
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AgentViewFlyerActive(props) {
    const flyerId = props.match.params.flyerid;
    const { dispatch } = useContext(AuthContext);
    const context = useContext(AuthContext);
    let history = useHistory();
    const [sync, setSync] = useState(true);
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [tourData, setTourData] = useState({});
    const [link, setLink] = useState("");
    const [allData, setAllData] = useState({});
    const [openAlertModal, setopenAlertModal] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
        setOpenError(false);
    };
    useEffect(() => {
        if (context.state.user) {
            const objusr = { authenticate_key: "abcd123XYZ", tourId: flyerId, agent_id: JSON.parse(context.state.user).agentId };
            postRecord(APIGetViewFlyerData, objusr)
                .then(res => {

                    if (res.data[0].response.status === "success") {
                        setAllData(res.data[0].response);
                        setTourData(res.data[0].response.tourData)
                        setLink(res.data[0].response.tourData.tourid);
                    }
                    else {
                        setopenAlertModal(true);
                    }
                })
        }
    }, [sync, context.state.user, flyerId]);
    const handleViewFlyerActiveLink = () => {
        window.location.href = APIPath() + "agent-flyer-tour/" + flyerId;
    }
    console.log(allData);
    return (
        <>
            <div class="container">
                {allData && allData.flyerId === "flyer01" ? (
                    <FlyerTheme1 tourData={tourData} allData={allData} link={link} />
                ) : (
                    ""
                )}
                {allData && allData.flyerId === "flyer02" ? (
                    <FlyerTheme2 tourData={tourData} allData={allData} link={link} />
                ) : (
                    ""
                )}
                {allData && allData.flyerId === "flyer03" ? (
                    <FlyerTheme3 tourData={tourData} allData={allData} link={link} />
                ) : (
                    ""
                )}
                {allData && allData.flyerId === "flyer04" ? (
                    <FlyerTheme4 tourData={tourData} allData={allData} link={link} />
                ) : (
                    ""
                )}
                {allData && allData.flyerId === "flyer05" ? (
                    <FlyerTheme5 tourData={tourData} allData={allData} link={link} />
                ) : (
                    ""
                )}
                {allData && allData.flyerId === "flyer06" ? (
                    <FlyerTheme6 tourData={tourData} allData={allData} link={link} />
                ) : (
                    ""
                )}
                {allData && allData.flyerId === "flyer07" ? (
                    <FlyerTheme7 tourData={tourData} allData={allData} link={link} />
                ) : (
                    ""
                )}
                {allData && allData.flyerId === "flyer08" ? (
                    <FlyerTheme8 tourData={tourData} allData={allData} link={link} />
                ) : (
                    ""
                )}



                {/* <div class="container-fluid">
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItem: "center", width: "100%", height: "auto" }}>
                        <div class="col-lg-7 col-md-7" style={{ backgroundColor: "rgb(0, 174, 229)", marginLeft: "10px" }} >
                            <p style={{ color: "white", textAlign: "center", width: "100%", lineHeight: "80px" }}>
                                TEST<br></br>
                                {Object.keys(tourData).length > 0 ? (
                                    <span style={{ textTransform: "uppercase" }}>{tourData.city} {tourData.countryname}</span>
                                ) : (
                                    <Skeleton variant="text" width={250} height={100} style={{ background: "#bbbbbb", margin: "0 auto" }} />
                                )}
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-4" style={{ backgroundColor: "rgb(52, 52, 52)", marginLeft: "10px" }}>
                            <div class="row">
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                    {Object.keys(allData).length > 0 ?
                                        <img src={allData.agentphoto} width="80px" height="80px" style={{ border: "2px solid white", margin: "5px" }}></img>
                                        :
                                        <img src={photo} width="80px" height="80px" style={{ border: "2px solid white", margin: "5px" }}></img>
                                    }
                                    {Object.keys(allData).length > 0 ?
                                        <img src={allData.companylogo} width="80px" height="80px" style={{ border: "2px solid white", margin: "5px" }}></img>
                                        :
                                        <img src={logo1} width="80px" height="80px" style={{ border: "2px solid white", margin: "5px" }}></img>
                                    }

                                </div>
                                <div style={{ textAlign: "center", width: '100%', color: "white" }}>
                                    <p style={{ color: "white", marginBottom: "0px" }}>
                                        {Object.keys(tourData).length > 0 ? (
                                            <span style={{ textTransform: "capitalize" }}>{tourData.caption} {tourData.countryname}</span>
                                        ) : (
                                            <Skeleton variant="text" width={250} height={60} style={{ background: "#bbbbbb", margin: "0 auto" }} />
                                        )}
                                    </p>
                                    <p style={{ color: "white", marginBottom: "0px" }}>{allData.companyname}
                                    </p >
                                    <p style={{ color: "white" }}></p>
                                </div>
                                <div style={{ textAlign: "center", width: '100%', color: "white" }}>
                                    <p style={{ color: "white" }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItem: "center", width: "100%", marginTop: "05px" }}>
                        <div class="col-lg-7 col-md-7" style={{ marginLeft: "10px", }} >
                            {Object.keys(allData).length > 0 ? (
                                allData.image_url.map(res => (
                                    <div class="col-lg-6 col-md-6" style={{ display: "block", float: "left" }}>

                                        <img src={res} />
                                    </div>
                                ))
                            ) : (
                                ""
                            )}

                        </div>
                        <div class="col-lg-4 col-md-4" style={{ backgroundColor: "rgb(0, 174, 229)", marginLeft: "10px" }}>
                            <h5></h5>
                        </div>
                    </div>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItem: "center", width: "100%", height: "250px", marginTop: "05px" }}>
                        <div class="col-lg-7 col-md-7" style={{ backgroundColor: "rgb(0, 174, 229)", marginLeft: "10px" }} >
                            <h5>
                                Offered At: c$36,587,648
                            </h5>
                            <h6>Features</h6>
                            <div style={{ display: "flex", justifyContent: "space-around", alignItem: "center", width: "100%" }} >
                                <div>
                                    <p style={{ color: "white" }}> BEDROOMS :</p>
                                    <p style={{ color: "white" }}>BATHROOMS :</p>
                                    <p style={{ color: "white" }}>GARAGE</p>
                                </div>
                                <div>
                                    <p style={{ color: "white" }}>YEAR BUILT :</p>
                                    <p style={{ color: "white" }}>LOT SIZE:</p>
                                    <p style={{ color: "white" }}>INTERIOR SQ. FT :</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4" style={{ backgroundColor: "rgb(52, 52, 52)", marginLeft: "10px" }}>
                            <div class="row">
                                <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "80px" }}>
                                    <p class="img_set_para">
                                        <a onClick={handleViewFlyerActiveLink} style={{ color: "black" }}><span style={{ color: "", textDecoration: "underline", fontStyle: "italic", marginBottom: "5px" }}>https://virtualtourcafe.com/agent-flyer-tour/{link}</span></a>
                                    </p>
                                    <p style={{ color: "white" }}>All information deemed reliable, but not guaranteed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Dialog disableBackdropClick={true} disableEscapeKeyDown={true} aria-labelledby="customized-dialog-title" open={openAlertModal}>
                    <DialogTitle align="center" style={{ backgroundColor: "red", color: "white" }} id="customized-dialog-title">
                        Alert !!!
                    </DialogTitle>
                    <DialogContent dividers>
                        <ErrorOutlineIcon style={{ display: "block", margin: "0 auto", fontSize: "80px", color: "#ff5722" }} />
                        <div style={{ padding: "5px 40px 28px 40px" }}>
                            <h3 style={{ fontSize: "26px", margin: "10px" }}>
                                Your Flyer is not active.
                            </h3>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={openSuccess} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {message}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={openError} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}
