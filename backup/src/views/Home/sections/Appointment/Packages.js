import React, { useState, useEffect } from "react";
import okimg from "../../../../images/ok.png";
import img2 from "../../../../images/photo-5.jpg";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => ({
  package_sec_cont_single_img: {
    position: "relative",
    borderRadius: "5px",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      background: "#000",
      opacity: " 0.50",
      zIndex: 1,
    },
    "& img": {
      width: "225px",
      height: "200px",
      borderRadius: "5px",
      position: "relative",
    },
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Packages(props) {
  const { setAppointment, setPackageTab, setSecondPackageTab, allPackages } =
    props;
  const [openError, setOpenError] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [message, setMessage] = useState("");
  const [virtualStag, setVirtualStag] = useState(false);
  const [twlightPhoto, setTwlightPhoto] = useState(false);
  const [iguide, setIguide] = useState(false);
  const [virtual, setVirtual] = useState(false);
  const [photoshoot, setPhotoshoot] = useState(false);
  const [Walkthrough, setWalkthrough] = useState(false);
  const [aerialDrone, setAerialDrone] = useState(false);
  const [signature, setSignature] = useState(false);
  const [cartePackageData, setCartePackageData] = useState(
    JSON.parse(localStorage.getItem("Carte_Package")) === null
      ? []
      : JSON.parse(localStorage.getItem("Carte_Package")).filter(
          (item, i, ar) => ar.indexOf(item) === i
        )
  );
  const [signaturePackageData, setSignaturePackageData] = useState(
    JSON.parse(localStorage.getItem("Combo_Package")) === null
      ? []
      : JSON.parse(localStorage.getItem("Combo_Package")).filter(
          (item, i, ar) => ar.indexOf(item) === i
        )
  );
  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWarning(false);
    setOpenError(false);
  };
  console.log(cartePackageData);
  useEffect(() => {
    cartePackageData.forEach((res) => {
      var element = document.getElementById("myDIV" + res);
      if (res === 19) {
        if (twlightPhoto === false) {
          setTwlightPhoto(true);
          element.classList.add("op");
          setCartePackageData((prevArray) => [...prevArray, res]);
        } else {
          setTwlightPhoto(false);
          element.classList.remove("op");
          const index = arrayRemove(cartePackageData, "19");
          setCartePackageData(index);
        }
      }
      if (res === 18) {
        if (virtualStag === false) {
          setVirtualStag(true);
          element.classList.add("op");
          setCartePackageData((prevArray) => [...prevArray, res]);
        } else {
          setVirtualStag(false);
          element.classList.remove("op");
          const index = arrayRemove(cartePackageData, "18");
          setCartePackageData(index);
        }
      }
      if (res === 17) {
        if (iguide === false) {
          setIguide(true);
          element.classList.add("op");
          setCartePackageData((prevArray) => [...prevArray, res]);
        } else {
          setIguide(false);
          element.classList.remove("op");
          const index = arrayRemove(cartePackageData, "17");
          setCartePackageData(index);
        }
      }
      if (res === 16) {
        if (virtual === false) {
          setVirtual(true);
          element.classList.add("op");
          setCartePackageData((prevArray) => [...prevArray, res]);
        } else {
          setVirtual(false);
          element.classList.remove("op");
          const index = arrayRemove(cartePackageData, "16");
          setCartePackageData(index);
        }
      }
      if (res === 15) {
        if (photoshoot === false) {
          setPhotoshoot(true);
          element.classList.add("op");
          setCartePackageData((prevArray) => [...prevArray, res]);
        } else {
          setPhotoshoot(false);
          element.classList.remove("op");
          setCartePackageData(
            cartePackageData.filter((item) => item.id !== 15)
          );
          const index = arrayRemove(cartePackageData, "15");
          setCartePackageData(index);
        }
      }
      if (res === 12) {
        if (Walkthrough === false) {
          setWalkthrough(true);
          element.classList.add("op");
          setCartePackageData((prevArray) => [...prevArray, res]);
        } else {
          setWalkthrough(false);
          element.classList.remove("op");
          const index = arrayRemove(cartePackageData, "12");
          setCartePackageData(index);
        }
      }
      if (res === 11) {
        if (aerialDrone === false) {
          setAerialDrone(true);
          element.classList.add("op");
          setCartePackageData((prevArray) => [...prevArray, res]);
        } else {
          setAerialDrone(false);
          element.classList.remove("op");
          const index = arrayRemove(cartePackageData, "11");
          setCartePackageData(index);
        }
      }
      signaturePackageData.forEach((res) => {
        var element = document.getElementById("sigDIV" + res);
        if (res === 9) {
          if (signature === false) {
            setSignature(true);
            element.classList.add("op");
            setSignaturePackageData((prevArray) => [...prevArray, res]);
          } else {
            setSignature(false);
            element.classList.remove("op");
            setSignaturePackageData(
              signaturePackageData.filter((item) => item.id === res)
            );
          }
        }
      });
    });
  }, []);
  const setCartePackage = (data) => {
    var element = document.getElementById("myDIV" + data.id);
    if (data.id === 19) {
      // if (signaturePackageData.length === 0) {
      if (twlightPhoto === false) {
        setTwlightPhoto(true);
        element.classList.add("op");
        setCartePackageData((prevArray) => [...prevArray, data.id]);
      } else {
        setTwlightPhoto(false);
        element.classList.remove("op");
        const index = arrayRemove(cartePackageData, "19");
        setCartePackageData(index);
      }
    }
    if (data.id === 18) {
      if (virtualStag === false) {
        setVirtualStag(true);
        element.classList.add("op");
        setCartePackageData((prevArray) => [...prevArray, data.id]);
      } else {
        setVirtualStag(false);
        element.classList.remove("op");
        const index = arrayRemove(cartePackageData, "18");
        setCartePackageData(index);
      }
    }
    if (data.id === 17) {
      if (iguide === false) {
        setIguide(true);
        element.classList.add("op");
        setCartePackageData((prevArray) => [...prevArray, data.id]);
      } else {
        setIguide(false);
        element.classList.remove("op");
        const index = arrayRemove(cartePackageData, "17");
        setCartePackageData(index);
      }
    }
    if (data.id === 16) {
      if (virtual === false) {
        setVirtual(true);
        element.classList.add("op");
        setCartePackageData((prevArray) => [...prevArray, data.id]);
      } else {
        setVirtual(false);
        element.classList.remove("op");
        const index = arrayRemove(cartePackageData, "16");
        setCartePackageData(index);
      }
    }
    if (data.id === 15) {
      if (photoshoot === false) {
        setPhotoshoot(true);
        element.classList.add("op");
        setCartePackageData((prevArray) => [...prevArray, data.id]);
      } else {
        setPhotoshoot(false);
        element.classList.remove("op");
        setCartePackageData(cartePackageData.filter((item) => item.id !== 15));
        const index = arrayRemove(cartePackageData, "15");
        setCartePackageData(index);
      }
    }
    if (data.id === 12) {
      if (Walkthrough === false) {
        setWalkthrough(true);
        element.classList.add("op");
        setCartePackageData((prevArray) => [...prevArray, data.id]);
      } else {
        setWalkthrough(false);
        element.classList.remove("op");
        const index = arrayRemove(cartePackageData, "12");
        setCartePackageData(index);
      }
    }
    if (data.id === 11) {
      if (aerialDrone === false) {
        setAerialDrone(true);
        element.classList.add("op");
        setCartePackageData((prevArray) => [...prevArray, data.id]);
      } else {
        setAerialDrone(false);
        element.classList.remove("op");
        const index = arrayRemove(cartePackageData, "11");
        setCartePackageData(index);
      }
    }
  };
  const setSignaturePackage = (data) => {
    var element = document.getElementById("sigDIV" + data.id);
    if (data.id === 9) {
      if (signature === false) {
        setSignature(true);
        element.classList.add("op");
        setSignaturePackageData((prevArray) => [...prevArray, data.id]);
      } else {
        setSignature(false);
        element.classList.remove("op");
        setSignaturePackageData(
          signaturePackageData.filter((item) => item.id === data.id)
        );
      }
    }
  };
  function arrayRemove(arr, value) {
    return arr.filter(function (geeks) {
      return geeks != value;
    });
  }
  const saveDataToLocalStorage = () => {
    if (cartePackageData.length === 0 && signaturePackageData.length === 0) {
      setMessage("Please select any package");
      setOpenError(true);
    } else {
      // let obj = { Carte_Package: JSON.stringify(cartePackageData), Combo_Package: JSON.stringify(signaturePackageData) };
      localStorage.setItem("Carte_Package", JSON.stringify(cartePackageData));
      localStorage.setItem(
        "Combo_Package",
        JSON.stringify(signaturePackageData)
      );
      setPackageTab(false);
      setSecondPackageTab(true);
    }
  };
  return (
    <div class="appointment_page_right">
      <div class="row">
        <div class="col-md-12">
          <h3>Photo Packages</h3>
          <div class="step_progress">
            <span>Step 2/4</span>
            <div class="progress" style={{ height: "20px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="33"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="Order_cont">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="package_sec">
              <div class="col-md-12 appointment-steps">
                <h4>A-La-Carte Package</h4>
              </div>
              <div class="package_sec_cont">
                {Object.keys(allPackages).length > 0 ? (
                  <div class="row">
                    {allPackages.package.map((res) => (
                      <div class="col-md-6">
                        {res.url ? (
                          <a href={res.url} target="blank">
                            <div class="package-box-appointment1">
                              <i class="fad fa-check-circle"></i>
                              <img
                                style={{ height: "250px", objectFit: "cover" }}
                                src={res.image}
                                alt=""
                              />
                              <h4>{res.title}</h4>
                              <div
                                id={"myDIV" + res.id}
                                class="package_sec_cont_single_check"
                              >
                                <img src={okimg} />
                              </div>
                            </div>
                          </a>
                        ) : (
                          <a onClick={() => setCartePackage(res)}>
                            <div class="package-box-appointment1">
                              <i class="fad fa-check-circle"></i>
                              <img
                                style={{ height: "250px", objectFit: "cover" }}
                                src={res.image}
                                alt=""
                              />
                              <h4>{res.title}</h4>
                              <div
                                id={"myDIV" + res.id}
                                class="package_sec_cont_single_check"
                              >
                                <img src={okimg} />
                              </div>
                            </div>
                          </a>
                        )}
                      </div>
                      // <div class="col-lg-4 col-md-4" style={{ margintop: "20px" }}>
                      //     <div class="package_sec_cont_single">
                      //         <a onClick={() => setCartePackage(res)}>
                      //             <div className={classes.package_sec_cont_single_img}>
                      //                 <img src={res.image} alt="" title="" />
                      //             </div>
                      //             <h5>{res.title}</h5>
                      //             <div id={"myDIV" + res.id} class="package_sec_cont_single_check">
                      //                 <img src={okimg} />
                      //             </div>
                      //         </a>
                      //     </div>
                      // </div>
                    ))}
                  </div>
                ) : (
                  <div class="row">
                    <Skeleton
                      variant="text"
                      width={200}
                      height={300}
                      style={{ background: "#bbbbbb", marginRight: "50px" }}
                    />
                    <Skeleton
                      variant="text"
                      width={200}
                      height={300}
                      style={{ background: "#bbbbbb", marginRight: "50px" }}
                    />
                    <Skeleton
                      variant="text"
                      width={200}
                      height={300}
                      style={{ background: "#bbbbbb", marginRight: "50px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr class="spacer40px" />
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="package_sec">
              <div class="package_sec_head">
                <h4>Combo Package</h4>
              </div>
              <div class="package_sec_cont">
                {Object.keys(allPackages).length > 0 ? (
                  <div class="row">
                    <div class="col-md-6">
                      <a
                        onClick={() =>
                          setSignaturePackage(allPackages.combopackage[0])
                        }
                      >
                        <div class="package-box-appointment1">
                          <i class="fad fa-check-circle"></i>
                          <img
                            style={{ height: "250px", objectFit: "cover" }}
                            src={allPackages.combopackage[0].image}
                            alt=""
                          />
                          <h4>{allPackages.combopackage[0].title}</h4>
                          <div
                            id={"sigDIV" + allPackages.combopackage[0].id}
                            class="package_sec_cont_single_check"
                          >
                            <img src={okimg} alt="" />
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <div class="col-lg-4 col-md-4">
                                            <div class="package_sec_cont_single">
                                                <a onClick={() => setSignaturePackage(allPackages.combopackage[0])}>
                                                    <div class="package_sec_cont_single_img">
                                                        <img src={allPackages.combopackage[0].image} alt="" title="" />
                                                    </div>
                                                    <h5>{allPackages.combopackage[0].title}</h5>
                                                    <div id={"sigDIV" + allPackages.combopackage[0].id} class="package_sec_cont_single_check">
                                                        <img src={okimg} alt="" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div> */}
                  </div>
                ) : (
                  <div class="row">
                    <Skeleton
                      variant="text"
                      width={200}
                      height={300}
                      style={{ background: "#bbbbbb", marginRight: "50px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr class="spacer50px" />
        <div class="row">
          <div class="col-lg-6 col-md-6 mx-auto">
            <a
              href="#"
              onClick={() => {
                setPackageTab(false);
                setAppointment(true);
              }}
              class="let_start"
              style={{ margin: "0 20px 0 0" }}
            >
              <i
                style={{ marginRight: "20px", marginLeft: "0" }}
                class="fas fa-arrow-left"
              ></i>
              Back{" "}
            </a>
            <a
              style={{ cursor: "pointer" }}
              class="let_start_new"
              onClick={() => {
                saveDataToLocalStorage();
              }}
            >
              Next <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openWarning}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          {message}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openError}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
