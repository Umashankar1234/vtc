import React, { useEffect, useState } from "react";
import company_img from "../../../../../images/company.png";

export default function FlyerTheme5(props) {
  const { tourData, allData, link } = props;
  const [bgColor, setBgColor] = useState("#bd1e1e");
  const [bgColor2, setBgColor2] = useState("#bd1e1e");
  useEffect(() => {
    if (allData.themeId == 5) {
      setBgColor("#042878");
      setBgColor2("#252525");
    } else if (allData.themeId == 6) {
      setBgColor("#b4010d");
      setBgColor2("#a8a8a8");
    } else if (allData.themeId == 7) {
      setBgColor("#e71935");
      setBgColor2("#15307e");
    } else if (allData.themeId == 4) {
      setBgColor("#ed9101");
      setBgColor2("#1c1c1c");
    } else if (allData.themeId == 257) {
      setBgColor("#000000");
      setBgColor2("#000000");
    } else if (allData.themeId == 258) {
      setBgColor("#000000");
      setBgColor2("#999999");
    } else if (allData.themeId == 130) {
      setBgColor("#314c6f");
      setBgColor2("#353535");
    } else if (allData.themeId == 141) {
      setBgColor("#031930");
      setBgColor2("#df2230");
    } else if (allData.themeId == 237) {
      setBgColor("#903c7a");
      setBgColor2("#939393");
    } else if (allData.themeId == 84) {
      setBgColor("#46883e");
      setBgColor2("#3f3f3f");
    } else if (allData.themeId == 75) {
      setBgColor("#b6874a");
      setBgColor2("#262626");
    } else if (allData.themeId == 3) {
      setBgColor("#025865");
      setBgColor2("#8e002f");
    } else if (allData.themeId == 145) {
      setBgColor("#de1432");
      setBgColor2("#232323");
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
                <td
                  align="left"
                  valign="top"
                  style={{
                    position: "relative",
                  }}
                  bgcolor={bgColor}
                >
                  {Object.keys(allData).length > 0 && (
                    <>
                      <img
                        src={allData.image_url[0]}
                        alt=""
                        width="816"
                        height="600"
                      />
                      <div
                        style={{
                          width: 200,
                          backgroundColor: bgColor,
                          position: "absolute",
                          zIndex: 99,
                          top: 0,
                          right: 0,
                          padding: "10px 10px 20px 10px",
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        <h3
                          style={{
                            margin: "0 0 10px 0",
                            fontSize: 18,
                            fontWeight: 500,
                            textTransform: "uppercase",
                            color: "#fff",
                          }}
                        >
                          Offered At:
                        </h3>
                        <h4
                          style={{
                            margin: "0 0 0 0",
                            fontSize: 26,
                            fontWeight: 500,
                            color: "#fff",
                          }}
                        >
                          $ {Object.keys(tourData).length > 0 && tourData.price}
                        </h4>
                      </div>
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td
                  height="120"
                  align="center"
                  valign="middle"
                  bgcolor={bgColor}
                  style={{ padding: "10px" }}
                >
                  <h1
                    style={{
                      color: "#fff",
                      fontSize: "32px",
                      margin: "0px 0px 20px 0px",
                      padding: "0px",
                      textTransform: "uppercase",
                    }}
                  >
                    {Object.keys(tourData).length > 0 && tourData.caption}
                  </h1>
                  <h6
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      margin: "0px",
                      padding: "0px",
                      textTransform: "uppercase",
                    }}
                  >
                    {Object.keys(tourData).length > 0 &&
                      tourData.city + " , " + tourData.countryname}
                  </h6>
                </td>
              </tr>
              <tr>
                <td
                  height="323"
                  align="left"
                  valign="top"
                  bgcolor="#f0f0f0"
                  style={{ padding: "15px" }}
                >
                  <p style={{ fontSize: "14px" }}>
                    {Object.keys(tourData).length > 0 && tourData.description}
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  height="30"
                  align="left"
                  valign="middle"
                  bgcolor={bgColor2}
                  style={{ padding: "10px" }}
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
                        valign="top"
                        style={{ color: "#FFFFFF" }}
                      >
                        <a
                          href={`https://virtualtourcafe.com/alpha/tour/${link}`}
                          style={{ color: "#FFFFFF", textDecoration: "none" }}
                        >
                          https://virtualtourcafe.com/alpha/tour/{link}
                        </a>
                      </td>
                      <td
                        width="50%"
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
        <tr>
          <td height="1121" align="left" valign="top">
            <table
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
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
                            src={allData.image_url[0]}
                            alt=""
                            width="400"
                            height="300"
                          />
                        )}
                      </td>
                      <td align="left" valign="top">
                        &nbsp;
                      </td>
                      <td width="49%" align="left" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[1]}
                            alt=""
                            width="400"
                            height="300"
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
                      <td width="49%" align="left" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[2]}
                            alt=""
                            width="400"
                            height="300"
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
                            height="300"
                          />
                        )}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="left" valign="top">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td
                  height="141"
                  align="left"
                  valign="top"
                  bgcolor="eff1ee"
                  style={{ padding: "15px" }}
                >
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr style={{ background: "eff1ee" }}>
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
                    <tr style={{ background: "eff1ee" }}>
                      <td width="50%" align="left" valign="top">
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="3"
                          border="0"
                        >
                          <tbody>
                            <tr style={{ background: "eff1ee" }}>
                              <td valign="top" align="left">
                                BEDROOMS :
                                {Object.keys(tourData).length > 0 &&
                                  tourData.totalbedrooms}
                              </td>
                            </tr>
                            <tr style={{ background: "eff1ee" }}>
                              <td valign="top" align="left">
                                BATHROOMS :{" "}
                                {Object.keys(tourData).length > 0 &&
                                  tourData.totalbathrooms}
                              </td>
                            </tr>
                            <tr style={{ background: "eff1ee" }}>
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
                            <tr style={{ background: "eff1ee" }}>
                              <td valign="top" align="left">
                                YEAR BUILT :{" "}
                                {Object.keys(tourData).length > 0 &&
                                  tourData.yearbuilt}
                              </td>
                            </tr>
                            <tr style={{ background: "eff1ee" }}>
                              <td valign="top" align="left">
                                LOT SIZE:{" "}
                                {Object.keys(tourData).length > 0 &&
                                  tourData.lotsize}{" "}
                              </td>
                            </tr>
                            <tr style={{ background: "eff1ee" }}>
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
              <tr>
                <td align="left" valign="top">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td
                  align="left"
                  valign="top"
                  bgcolor="#eff1ee"
                  style={{ padding: "15px" }}
                >
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td width="49%" align="left" valign="top">
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr style={{ background: "#FFFFFF" }}>
                            <td
                              height="6"
                              align="left"
                              valign="top"
                              bgcolor={bgColor}
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height="200"
                              align="left"
                              valign="top"
                              bgcolor="#FFFFFF"
                              style={{ padding: "15px" }}
                            >
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr style={{ background: "#FFFFFF" }}>
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
                                    &nbsp;
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
                                <tr style={{ background: "#FFFFFF" }}>
                                  <td height="10"></td>
                                </tr>
                                <tr style={{ background: "#FFFFFF" }}>
                                  <td align="center" valign="top">
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
                          <tr>
                            <td
                              height="6"
                              align="left"
                              valign="top"
                              bgcolor={bgColor}
                            ></td>
                          </tr>
                        </table>
                      </td>
                      <td width="2%" align="left" valign="top">
                        &nbsp;
                      </td>
                      <td width="49%" align="left" valign="top">
                        <table
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          bgcolor="#FFFFFF"
                        >
                          <tr style={{ background: "#FFFFFF" }}>
                            <td
                              height="50"
                              align="center"
                              valign="middle"
                              bgcolor={bgColor}
                            >
                              <h6
                                style={{
                                  color: "#fff",
                                  fontSize: "22px",
                                  margin: "0px",
                                  padding: "0px",
                                  textTransform: "uppercase",
                                }}
                              >
                                OFFERED AT: $
                                {Object.keys(tourData).length > 0 &&
                                  tourData.price}{" "}
                              </h6>
                            </td>
                          </tr>
                          <tr style={{ background: "#FFFFFF" }}>
                            <td>&nbsp;</td>
                          </tr>
                          <tr style={{ background: "#FFFFFF" }}>
                            <td height="175" valign="middle">
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr style={{ background: "#FFFFFF" }}>
                                  <td align="center" valign="top">
                                    Visit the virtual tour
                                    <br />
                                    <a
                                      href={`https://virtualtourcafe.com/alpha/tour/${link}`}
                                      target="_blank"
                                    >
                                      Click Here!
                                    </a>
                                  </td>
                                </tr>
                                <tr style={{ background: "#FFFFFF" }}>
                                  <td align="center" valign="top">
                                    &nbsp;
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
                <td
                  height="30"
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
