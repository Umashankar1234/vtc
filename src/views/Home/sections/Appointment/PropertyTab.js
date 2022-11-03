import React, { useState, useEffect } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import dateFormat from "dateformat";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        // width: "50%",
    },
}));
export default function PropertyTab(props) {
    const classes = useStyles();
    const { setPropertyTab, setReviewTab, setFinalPreviewtab } = props;
    const initialState = {
        caption: "",
        description: "",
        bed_room: "",
        bath_room: "",
        year_built: "",
        square_footage: "",
        mls: "",
        price: "",
        first_choice: "",
        first_time: "",
        second_choice: "",
        second_time: "",
        third_choice: "",
        third_time: ""
    }
    const [data, setData] = useState(JSON.parse(localStorage.getItem("Property_Info")) === null ? initialState : JSON.parse(localStorage.getItem("Property_Info")));
    const [openError, setOpenError] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [message, setMessage] = useState("");
    const handleDateChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };
    useEffect(() => {
        window.scrollTo(0, 400);
    }, []);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenWarning(false);
        setOpenError(false);
    };
    const handleInputchange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };
    const saveThisToLocal = () => {
        if (data.caption === "") {
            setMessage("please add caption");
            setOpenError(true);
        }
        else if (data.first_choice === "") {
            setMessage("please select 1st choice");
            setOpenError(true);
        }
        else if (data.second_choice === "") {
            setMessage("please select 2nd choice");
            setOpenError(true);
        }
        else if (data.third_choice === "") {
            setMessage("please select 3rd choice");
            setOpenError(true);
        }
        else {
            localStorage.setItem("Property_Info", JSON.stringify(data));
            setPropertyTab(false);
            setFinalPreviewtab(true);
        }

    }
    const selectHandleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }
    return (
        <div class="appointment_page_right">
            <div class="row">
                <div class="col-md-12 appointment-steps">
                    <h4>Property Information</h4>
                </div>
            </div>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    //saveThisToLocal();
                }}
            >
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="text1">Caption/Title</label>
                            <input type="text" onChange={handleInputchange} name="caption" value={data.caption} class="form-control" required />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="text1">Bedrooms</label>
                            <input type="text" onChange={handleInputchange} name="bed_room" value={data.bed_room} class="form-control" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="text1">Bathrooms</label>
                            <input type="text" onChange={handleInputchange} name="bath_room" value={data.bath_room} class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="text1">Year Built</label>
                            <input type="text" onChange={handleInputchange} name="year_built" value={data.year_built} class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="text1">Square Footage</label>
                            <input type="text" onChange={handleInputchange} name="square_footage" value={data.square_footage} class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="text1">MLS# (optional)</label>
                            <input type="text" onChange={handleInputchange} name="mls" value={data.mls} class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="text1">Price (Optional)</label>
                            <input type="text" onChange={handleInputchange} name="price" value={data.price} class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="text1">Description</label>
                            <textarea onChange={handleInputchange} name="description" value={data.description} id="description" class="form-control" rows="3" cols="2"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-12 appointment-steps">
                            <h4>Appointment</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p>Twilight Shoots” will be scheduled same day as photo shoot 15 minutes prior to sunset unless otherwise notified. Weekends are by special request only with limited availability</p>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <form className={classes.container} noValidate>
                                <TextField
                                    style={{ width: "250px" }}
                                    required
                                    label="1st Choice*"
                                    name="first_choice"
                                    type="date"
                                    value={data.first_choice}
                                    onChange={handleDateChange}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <div>
                                    <select class="form-control formbox1select" name="first_time" id="first_time" value={data.first_time} onChange={selectHandleChange} style={{ width: "250px", marginTop: "16px" }}  >

                                        <option value="">Slect Time</option>

                                        <option value="10:00">10am</option>

                                        <option value="11:00">11am</option>

                                        <option value="12:00">12 noon</option>

                                        <option value="13:00">1pm</option>

                                        <option value="14:00">2pm</option>

                                        <option value="15:00">3pm</option>

                                        <option value="other">other</option>

                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <form className={classes.container} noValidate>
                                <TextField
                                    style={{ width: "250px" }}
                                    required
                                    label="2nd Choice*"
                                    name="second_choice"
                                    type="date"
                                    value={data.second_choice}
                                    onChange={handleDateChange}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <div>
                                    <select class="form-control formbox1select" name="second_time" id="second_time" value={data.second_time} onChange={selectHandleChange} style={{ width: "250px", marginTop: "16px" }} >

                                        <option value="">Slect Time</option>

                                        <option value="10:00">10am</option>

                                        <option value="11:00">11am</option>

                                        <option value="12:00">12 noon</option>

                                        <option value="13:00">1pm</option>

                                        <option value="14:00">2pm</option>

                                        <option value="15:00">3pm</option>

                                        <option value="other">other</option>

                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <form className={classes.container} noValidate>
                                <TextField
                                    style={{ width: "250px" }}
                                    required
                                    label="3rd Choice*"
                                    name="third_choice"
                                    // type="datetime-local"
                                    type="date"
                                    value={data.third_choice}
                                    onChange={handleDateChange}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <div>
                                    <select class="form-control formbox1select" name="third_time" id="third_time" value={data.third_time} onChange={selectHandleChange} style={{ width: "250px", marginTop: "16px" }} >

                                        <option value="">Slect Time</option>

                                        <option value="10:00">10am</option>

                                        <option value="11:00">11am</option>

                                        <option value="12:00">12 noon</option>

                                        <option value="13:00">1pm</option>

                                        <option value="14:00">2pm</option>

                                        <option value="15:00">3pm</option>

                                        <option value="other">other</option>

                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 mx-auto">
                        <a href="#" onClick={() => {
                            setReviewTab(true);
                            setPropertyTab(false);
                        }} class="let_start" style={{ margin: "0 20px 0 0" }}><i style={{ marginRight: "20px", marginLeft: "0" }} class="fas fa-arrow-left"></i>Back </a>
                        <a type="submit" style={{ cursor: "pointer" }} class="let_start_new" onClick={() => {
                            saveThisToLocal();
                            // setReviewTab(false);
                            // setPropertyTab(true);
                        }}>Next <i class="fas fa-arrow-right"></i></a>
                    </div>
                    {/* <div class="col-md-12">
                        <button style={{ borderRadius: "5px" }} type="submit" class="btn-style-one"
                        >Submit</button>
                    </div> */}
                </div>
            </form>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={openWarning} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning">
                    {message}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={openError} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}