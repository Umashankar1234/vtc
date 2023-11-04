import React, { useEffect, useState } from "react";
import company_img from "../../../../../images/company.png";

export default function FlyerTheme2(props) {
  const { tourData, allData, link } = props;
  const [bgColor, setBgColor] = useState("#bd1e1e");
  const [bgColor2, setBgColor2] = useState("#bd1e1e");
  useEffect(() => {
    if (allData.themeId == 5) {
      setBgColor("#022a79");
      setBgColor2("#222222");
    } else if (allData.themeId == 6) {
      setBgColor("#b2030c");
      setBgColor2("#acacac");
    } else if (allData.themeId == 7) {
      setBgColor("#e5193a");
      setBgColor2("#1b2f7e");
    } else if (allData.themeId == 4) {
      setBgColor("#e29900");
      setBgColor2("#181411");
    } else if (allData.themeId == 257) {
      setBgColor("#000000");
      setBgColor2("#1d1916");
    } else if (allData.themeId == 258) {
      setBgColor("#000000");
      setBgColor2("#989898");
    } else if (allData.themeId == 130) {
      setBgColor("#3a527e");
      setBgColor2("#383838");
    } else if (allData.themeId == 141) {
      setBgColor("#031937");
      setBgColor2("#e22334");
    } else if (allData.themeId == 237) {
      setBgColor("#923c72");
      setBgColor2("#8f8f8f");
    } else if (allData.themeId == 84) {
      setBgColor("#428a37");
      setBgColor2("#3e3e3e");
    } else if (allData.themeId == 75) {
      setBgColor("#b8894e");
      setBgColor2("#7a7a7a");
    } else if (allData.themeId == 3) {
      setBgColor("#045864");
      setBgColor2("#9b0034");
    } else if (allData.themeId == 145) {
      setBgColor("#e20f30");
      setBgColor2("#282828");
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
          color: "#fff",
          fontFamily: "'Roboto', sans-serif",
          fontSize: "14px",
        }}
      >
        <tr>
          <td
            width="62%"
            align="center"
            valign="middle"
            bgcolor={bgColor}
            style={{ padding: "0px 10px" }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize: "32px",
                margin: "0px 0px 0px 0px",
                padding: "0px",
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
          <td width="1%" height="120" align="center" valign="middle">
            &nbsp;
          </td>
          <td
            width="37%"
            align="center"
            valign="middle"
            bgcolor={bgColor2}
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr style={{ background: bgColor2 }}>
                <td align="center">
                  {Object.keys(allData).length > 0 && (
                    <img
                      src={allData.agentphoto}
                      alt=""
                      width="90"
                      height="90"
                    />
                  )}
                  {Object.keys(allData).length > 0 && allData.companylogo ? (
                    <img
                      src={allData.companylogo}
                      alt=""
                      width="90"
                      height="90"
                    />
                  ) : (
                    <img src={company_img} alt="" width="90" height="90" />
                  )}
                </td>
              </tr>
              <tr style={{ background: bgColor2 }}>
                <td height="10"></td>
              </tr>
              <tr style={{ background: bgColor2 }}>
                <td align="center" valign="top">
                  <strong>
                    {Object.keys(allData).length > 0 && allData.agentname}
                  </strong>
                  <br />
                  <strong>
                    {Object.keys(allData).length > 0 && allData.companyname}
                  </strong>
                  <br />
                  <span id="agentInfo" style={{ fontSize: "14px" }}>
                    Lic# {Object.keys(allData).length > 0 && allData.licenceno}
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td height="5" colspan="3" align="left" valign="top"></td>
        </tr>

        <tr>
          <td align="left" valign="top">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td>
                  <img
                    src={allData.image_url[0]}
                    alt=""
                    srcset=""
                    style={{ width: "650px" }}
                  />
                </td>
              </tr>
              <tr>
                <td height="10" colspan="3" align="left" valign="top"></td>
              </tr>
              <tr>
                <td colspan="3" align="left" valign="top">
                  <div
                    style={{
                      float: "left",
                      width: "100%",
                      height: "300px",
                      overflow: "hidden",
                    }}
                  >
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
                              src={allData.image_url[1]}
                              alt=""
                              width="250"
                              height="150"
                            />
                          )}
                        </td>
                        <td width="2%" align="left" valign="top"></td>
                        <td height="49%" align="right" valign="top">
                          {Object.keys(allData).length > 0 && (
                            <img
                              src={allData.image_url[2]}
                              alt=""
                              width="250"
                              height="150"
                            />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td align="left" valign="top">
                          {Object.keys(allData).length > 0 && (
                            <img
                              src={allData.image_url[3]}
                              alt=""
                              width="250"
                              height="150"
                            />
                          )}
                        </td>
                        <td align="left" valign="top">
                          &nbsp;
                        </td>
                        <td align="right" valign="top">
                          {Object.keys(allData).length > 0 && (
                            <img
                              src={allData.image_url[4]}
                              alt=""
                              width="250"
                              height="150"
                            />
                          )}
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
            </table>
          </td>
          <td height="685" align="left" valign="top">
            &nbsp;
          </td>
          <td align="left" valign="top" bgcolor={bgColor}>
            <table
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tr>
                <td valign="top" style={{ padding: "10px" }} bgcolor={bgColor}>
                  <p style={{ margin: "0px", color:"white",fontSize:"14px" }}>
                    {Object.keys(tourData).length > 0 && tourData.description}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td height="5" colspan="3" align="left" valign="top"></td>
        </tr>
        <tr>
          <td
            align="center"
            valign="middle"
            bgcolor={bgColor}
            style={{ padding: "10px" }}
          >
            <table
              width="96%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tr style={{ background: bgColor }}>
                <td colspan="2">
                  <h4
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      margin: "0px 0px 10px 0px",
                      padding: "0px",
                      textTransform: "uppercase",
                    }}
                  >
                    Offered at : ${" "}
                    {Object.keys(tourData).length > 0 && tourData.price}
                  </h4>
                  <h6
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      margin: "0px 0px 10px 0px",
                      padding: "0px",
                      textTransform: "uppercase",
                    }}
                  >
                    FEATURES
                  </h6>
                </td>
              </tr>
              <tr style={{ background: bgColor }}>
                <td width="50%" valign="top">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="3"
                  >
                    <tr style={{ background: bgColor }}>
                      <td align="left" valign="top">
                        BEDROOMS :
                        {Object.keys(tourData).length > 0 &&
                          tourData.totalbedrooms}
                      </td>
                    </tr>
                    <tr style={{ background: bgColor }}>
                      <td align="left" valign="top">
                        BATHROOMS :{" "}
                        {Object.keys(tourData).length > 0 &&
                          tourData.totalbathrooms}
                      </td>
                    </tr>
                    <tr style={{ background: bgColor }}>
                      <td align="left" valign="top">
                        GARAGE :{" "}
                        {Object.keys(tourData).length > 0 &&
                          tourData.garagesize}
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="50%">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="3"
                  >
                    <tr style={{ background: bgColor }}>
                      <td align="left" valign="top">
                        YEAR BUILT :{" "}
                        {Object.keys(tourData).length > 0 && tourData.yearbuilt}
                      </td>
                    </tr>
                    <tr style={{ background: bgColor }}>
                      <td align="left" valign="top">
                        LOT SIZE{" "}
                        {Object.keys(tourData).length > 0 && tourData.lotsize}
                      </td>
                    </tr>
                    <tr style={{ background: bgColor }}>
                      <td align="left" valign="top">
                        INTERIOR SQ. FT :{" "}
                        {Object.keys(tourData).length > 0 && tourData.sqfootage}{" "}
                      </td>
                    </tr>
                    <tr style={{ background: bgColor }}>
                      <td align="left" valign="top">
                        SUBDIVISION :{" "}
                        {Object.keys(tourData).length > 0 &&
                          tourData.subdivision}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td height="202" align="left" valign="top">
            &nbsp;
          </td>
          <td
            align="center"
            valign="middle"
            bgcolor={bgColor2}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            <table width="80%" border="0" cellspacing="0" cellpadding="0">
              <tr style={{ background: bgColor2 }}>
                <td align="center" valign="top">
                  <a
                    href={`https://virtualtourcafe.com/alpha/tour/${link}`}
                    style={{
                      margin: "5px 0px 5px 0px",
                      fontSize: "14px",
                      wordBreak: "break-all",
                      color: "white",
                    }}
                  >
                    View Tour
                  </a>

                  <p
                    style={{ margin: "0px", fontSize: "12px", color: "white" }}
                  >
                    All information deemed reliable, but not guaranteed.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </React.Fragment>
  );
}
