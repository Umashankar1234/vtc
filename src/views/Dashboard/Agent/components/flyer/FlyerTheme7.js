import React, { useEffect, useState } from "react";
import company_img from "../../../../../images/company.png";

export default function FlyerTheme7(props) {
  const { tourData, allData, link } = props;
  const [bgColor, setBgColor] = useState("#bd1e1e");
  const [bgColor2, setBgColor2] = useState("#bd1e1e");
  useEffect(() => {
    if (allData.themeId == 5) {
      setBgColor2("#5577a1");
      setBgColor("#002977");
    } else if (allData.themeId == 6) {
      setBgColor2("#ba0004");
      setBgColor("#acacac");
    } else if (allData.themeId == 7) {
      setBgColor2("#143280");
      setBgColor("#e7183c");
    } else if (allData.themeId == 4) {
      setBgColor("#e79302");
      setBgColor2("#1f1b1a");
    } else if (allData.themeId == 257) {
      setBgColor("#020202");
      setBgColor2("#020202");
    } else if (allData.themeId == 258) {
      setBgColor2("#989898");
      setBgColor("#020202");
    } else if (allData.themeId == 130) {
      setBgColor2("#363636");
      setBgColor("#324b73");
    } else if (allData.themeId == 141) {
      setBgColor2("#e1252d");
      setBgColor("#041934");
    } else if (allData.themeId == 237) {
      setBgColor2("#939393");
      setBgColor("#8d3d79");
    } else if (allData.themeId == 84) {
      setBgColor2("#3e3e3e");
      setBgColor("#448a39");
    } else if (allData.themeId == 75) {
      setBgColor2("#7a7a7a");
      setBgColor("#bb8352");
    } else if (allData.themeId == 3) {
      setBgColor2("#960234");
      setBgColor("#025864");
    } else if (allData.themeId == 145) {
      setBgColor2("#282828");
      setBgColor("#db1236");
    }
  }, [allData]);
  return (
    <React.Fragment>
      <table
        width="100%"
        border="0"
        align="center"
        cellpadding="0"
        cellspacing="0"
        style={{
          maxWidth: "816px",
          color: "#606060",
          fontFamily: "'Roboto', sans-serif",
          fontSize: "14px",
        }}
      >
        <tr>
          <td height="1121" align="left" valign="top">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" valign="top">
                  {Object.keys(allData).length > 0 && (
                    <img
                      src={allData.image_url[0]}
                      alt=""
                      width="816"
                      height="450"
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td
                  height="10"
                  align="left"
                  valign="middle"
                  bgcolor="#fff"
                ></td>
              </tr>
              <tr>
                <td
                  height="90"
                  align="center"
                  valign="middle"
                  bgcolor={bgColor2}
                  style={{ padding: "15px" }}
                >
                  <h1
                    style={{
                      color: bgColor,
                      fontSize: "32px",
                      margin: "0px 0px 0px 0px",
                      padding: "0px",
                      textTransform: "uppercase",
                    }}
                  >
                    {Object.keys(tourData).length > 0 && tourData.caption}
                  </h1>
                </td>
              </tr>
              <tr>
                <td height="10" align="left" valign="top"></td>
              </tr>
              <tr>
                <td align="left" valign="top">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td width="49%" align="left" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[2]}
                            alt=""
                            width="400"
                            height="240"
                          />
                        )}
                      </td>
                      <td align="left" valign="top">
                        &nbsp;
                      </td>
                      <td width="49%" align="left" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[3]}
                            alt=""
                            width="400"
                            height="240"
                          />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td align="left" valign="top">
                        &nbsp;
                      </td>
                      <td align="left" valign="top">
                        &nbsp;
                      </td>
                      <td align="left" valign="top">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td align="left" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[4]}
                            alt=""
                            width="400"
                            height="240"
                          />
                        )}
                      </td>
                      <td align="left" valign="top">
                        &nbsp;
                      </td>
                      <td align="left" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[5]}
                            alt=""
                            width="400"
                            height="240"
                          />
                        )}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td height="10" align="left" valign="top"></td>
              </tr>
              <tr>
                <td
                  height="27"
                  align="left"
                  valign="middle"
                  bgcolor={bgColor2}
                  style={{ padding: "15px" }}
                >
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr style={{ background: bgColor2 }}>
                      <td
                        width="50%"
                        align="left"
                        valign="middle"
                        style={{ color: "#FFFFFF" }}
                      >
                        {Object.keys(tourData).length > 0 &&
                          tourData.city + " , " + tourData.countryname}
                      </td>
                      <td
                        width="50%"
                        align="right"
                        valign="middle"
                        style={{ color: "#FFFFFF" }}
                      >
                        All information deemed reliable, but not guaranteed.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td height="1121" align="left" valign="top">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" valign="top">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td
                        width="35%"
                        align="left"
                        valign="top"
                        bgcolor={bgColor2}
                      >
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr style={{ background: bgColor2 }}>
                            <td
                              align="left"
                              valign="top"
                              style={{ padding: "15px" }}
                            >
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr style={{ background: bgColor2 }}>
                                  <td align="center">
                                    {Object.keys(allData).length > 0 && (
                                      <img
                                        src={allData.agentphoto}
                                        alt=""
                                        width="90"
                                        height="90"
                                        style={{ border: "2px solid #fff" }}
                                      />
                                    )}
                                    {Object.keys(allData).length > 0 &&
                                    allData.companylogo ? (
                                      <img
                                        src={allData.companylogo}
                                        alt=""
                                        width="90"
                                        height="90"
                                        style={{ border: "2px solid #fff" }}
                                      />
                                    ) : (
                                      <img
                                        src={company_img}
                                        alt=""
                                        width="90"
                                        height="90"
                                        style={{ border: "2px solid #fff" }}
                                      />
                                    )}
                                  </td>
                                </tr>
                                <tr style={{ background: bgColor2 }}>
                                  <td height="10"></td>
                                </tr>
                                <tr style={{ background: bgColor2 }}>
                                  <td
                                    align="center"
                                    valign="top"
                                    style={{ color: "#FFFFFF" }}
                                  >
                                    {" "}
                                    <strong>
                                      {Object.keys(allData).length > 0 &&
                                        allData.agentname}
                                    </strong>
                                    <br />
                                    {Object.keys(allData).length > 0 &&
                                      allData.agentemail}
                                    <br />
                                    <strong>
                                      {Object.keys(allData).length > 0 &&
                                        allData.companyname}
                                    </strong>
                                    <br />
                                    <strong>
                                      {Object.keys(allData).length > 0 &&
                                        `Lic# ${allData.licenceno}`}
                                    </strong>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr style={{ background: bgColor2 }}>
                            <td
                              align="left"
                              valign="top"
                              bgcolor="#FFFFFF"
                              height="10"
                            ></td>
                          </tr>
                          <tr style={{ background: bgColor2 }}>
                            <td
                              align="left"
                              valign="top"
                              style={{ padding: "15px" }}
                            >
                              <table
                                width="80%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr style={{ background: bgColor2 }}>
                                  <td align="center" valign="top">
                                    <h6
                                      style={{
                                        color: "#fff",
                                        fontSize: "22px",
                                        margin: "0px",
                                        padding: "0px",
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      OFFERED AT : $
                                      {Object.keys(tourData).length > 0 &&
                                        tourData.price}
                                    </h6>
                                  </td>
                                </tr>
                                <tr style={{ background: bgColor2 }}>
                                  <td align="center" valign="top">
                                    <p
                                      style={{
                                        margin: "10px 0px 0px 0px",
                                        fontSize: "12px",
                                        color: "#FFFFFF",
                                      }}
                                    >
                                      Visit the virtual tour
                                    </p>
                                    <p
                                      style={{
                                        margin: "5px 0px 5px 0px",
                                        fontSize: "14px",
                                        wordBreak: "break-all",
                                        color: "#FFFFFF",
                                      }}
                                    >
                                      <a
                                        href={`https://virtualtourcafe.com/alpha/tour/${link}`}
                                        target="_blank"
                                      >
                                        Click Here!
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td
                        width="1%"
                        height="400"
                        align="left"
                        valign="top"
                      ></td>
                      <td
                        width="64%"
                        align="left"
                        valign="top"
                        bgcolor={bgColor}
                      >
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr style={{ background: bgColor }}>
                            <td
                              align="left"
                              valign="top"
                              style={{ padding: "15px" }}
                            >
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style={{ color: "#FFFFFF" }}
                              >
                                <tr style={{ background: bgColor }}>
                                  <td
                                    colspan="2"
                                    align="left"
                                    valign="top"
                                    style={{ paddingBottom: "10px" }}
                                  >
                                    <h6
                                      style={{
                                        fontSize: "20px",
                                        margin: "0px",
                                        padding: "0px",
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      FEATURES
                                    </h6>
                                  </td>
                                </tr>
                                <tr style={{ background: bgColor }}>
                                  <td width="50%" align="left" valign="top">
                                    <table
                                      width="100%"
                                      cellspacing="0"
                                      cellpadding="3"
                                      border="0"
                                    >
                                      <tbody>
                                        <tr style={{ background: bgColor }}>
                                          <td valign="top" align="left">
                                            BEDROOMS :{" "}
                                            {Object.keys(tourData).length > 0 &&
                                              tourData.totalbedrooms}
                                          </td>
                                        </tr>
                                        <tr style={{ background: bgColor }}>
                                          <td valign="top" align="left">
                                            BATHROOMS :{" "}
                                            {Object.keys(tourData).length > 0 &&
                                              tourData.totalbathrooms}
                                          </td>
                                        </tr>
                                        <tr style={{ background: bgColor }}>
                                          <td valign="top" align="left">
                                            GARAGE :{" "}
                                            {Object.keys(tourData).length > 0 &&
                                              tourData.garagesize}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td width="50%" align="left" valign="top">
                                    <table
                                      width="100%"
                                      cellspacing="0"
                                      cellpadding="3"
                                      border="0"
                                    >
                                      <tbody>
                                        <tr style={{ background: bgColor }}>
                                          <td valign="top" align="left">
                                            YEAR BUILT :{" "}
                                            {Object.keys(tourData).length > 0 &&
                                              tourData.yearbuilt}
                                          </td>
                                        </tr>
                                        <tr style={{ background: bgColor }}>
                                          <td valign="top" align="left">
                                            LOT SIZE:{" "}
                                            {Object.keys(tourData).length > 0 &&
                                              tourData.lotsize}{" "}
                                          </td>
                                        </tr>
                                        <tr style={{ background: bgColor }}>
                                          <td valign="top" align="left">
                                            INTERIOR SQ. FT :{" "}
                                            {Object.keys(tourData).length > 0 &&
                                              tourData.sqfootage}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td height="10"></td>
              </tr>
              <tr>
                <td align="left" valign="top">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td width="49%" align="left" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[6]}
                            alt=""
                            width="400"
                            height="650"
                          />
                        )}
                      </td>
                      <td align="left" valign="top">
                        &nbsp;
                      </td>
                      <td width="49%" align="left" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[7]}
                            alt=""
                            width="400"
                            height="650"
                          />
                        )}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td height="10"></td>
              </tr>
              <tr>
                <td
                  height="287"
                  align="left"
                  valign="top"
                  bgcolor={bgColor}
                  style={{ padding: "15px" }}
                >
                 <p style={{ fontSize: "14px" ,color:"white"}}>
                    {Object.keys(tourData).length > 0 && tourData.description}
                  </p>
                </td>
              </tr>
              <tr>
                <td height="10"></td>
              </tr>
              <tr>
                <td
                  height="27"
                  align="left"
                  valign="middle"
                  bgcolor={bgColor2}
                  style={{ padding: "15px" }}
                >
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr style={{ background: bgColor2 }}>
                      <td
                        align="right"
                        valign="top"
                        style={{ color: "#FFFFFF" }}
                      >
                        All information deemed reliable, but not guaranteed.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </React.Fragment>
  );
}
