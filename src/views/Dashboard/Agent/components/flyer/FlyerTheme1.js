import React, { useEffect, useState } from "react";

export default function FlyerTheme1(props) {
  const { tourData, allData, link } = props;
  const [bgColor, setBgColor] = useState("#bd1e1e");
  const [bgColor2, setBgColor2] = useState("#bd1e1e");
  useEffect(() => {
    if (allData.themeId == 5) {
      setBgColor("#032a75");
      setBgColor2("#00307f");
    } else if (allData.themeId == 6) {
      setBgColor("#bc0009");
      setBgColor2("#ababab");
    } else if (allData.themeId == 7) {
      setBgColor("#da2641");
      setBgColor2("#14317f");
    } else if (allData.themeId == 4) {
      setBgColor("#eb9200");
      setBgColor2("#231918");
    } else if (allData.themeId == 257) {
      setBgColor("#040404");
      setBgColor2("##000004");
    } else if (allData.themeId == 258) {
      setBgColor("#010101");
      setBgColor2("#9a9c9b");
    } else if (allData.themeId == 130) {
      setBgColor("#334c74");
      setBgColor2("#333736");
    } else if (allData.themeId == 141) {
      setBgColor("#051a35");
      setBgColor2("#df262c");
    } else if (allData.themeId == 237) {
      setBgColor("#8e3d78");
      setBgColor2("#909090");
    } else if (allData.themeId == 84) {
      setBgColor("#3f8a37");
      setBgColor2("#3c3c3c");
    } else if (allData.themeId == 75) {
      setBgColor("#ba864c");
      setBgColor2("#767877");
    } else if (allData.themeId == 3) {
      setBgColor("#015965");
      setBgColor2("#950131");
    } else if (allData.themeId == 145) {
      setBgColor("#e0112f");
      setBgColor2("#272727");
    }
  }, [allData]);
  return (
    <React.Fragment>
      <table
        className="flyer01-6"
        width="100%"
        border="0"
        align="center"
        cellpadding="0"
        cellspacing="0"
        style={{
          maxWidth: "816px",
          color: "#666666",
          fontFamily: "Roboto",
          fontSize: "14px",
        }}
      >
        <tr>
          <td
            height="70"
            align="center"
            valign="middle"
            bgcolor={bgColor}
            style={{ padding: "5px" }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize: "26px",
                margin: "0px 0px 0px 0px",
                padding: "0px",
              }}
            >
              {Object.keys(tourData).length > 0 && tourData.caption}
            </h1>
          </td>
        </tr>
        <tr>
          <td height="10" bgcolor="#fff"></td>
        </tr>
        <tr>
          <td height="40" align="center" valign="middle" bgcolor={bgColor2}>
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
          <td align="center" style={{ position: "relative" }}>
            {Object.keys(allData).length > 0 && (
              <img src={allData.image_url[4]} alt="" width="816" height="410" />
            )}
            <div
              style={{
                width: "300px",
                background: bgColor2,
                position: "absolute",
                zIndex: "99",
                top: "0px",
                right: "0px",
                padding: "10px 10px 20px 10px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0 0",
                  color: "#fff",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Property
              </h3>
              <h4
                style={{
                  margin: "0 0 0 0",
                  color: "#fff",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Property
              </h4>
            </div>
          </td>
        </tr>
        <tr>
          <td height="10" bgcolor="#fff"></td>
        </tr>
        <tr>
          <td bgcolor="#eeeeee" style={{ padding: "8px" }}>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td style={{ border: "3px solid #fff" }}>
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td width="33%" align="center" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[1]}
                            alt=""
                            width="250"
                            height="150"
                          />
                        )}
                      </td>
                      <td width="33%" align="center" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[2]}
                            alt=""
                            width="250"
                            height="150"
                          />
                        )}
                      </td>
                      <td width="33%" align="center" valign="top">
                        {Object.keys(allData).length > 0 && (
                          <img
                            src={allData.image_url[3]}
                            alt=""
                            width="250"
                            height="150"
                          />
                        )}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#eeeeee" style={{ padding: "15px" }}>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="30%" align="left" valign="top">
                  <table width="98%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="left" valign="top">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td align="left" valign="top">
                        <table
                          width="100%"
                          border="0"
                          cellspacing="2"
                          cellpadding="2"
                          style={{ fontSize: "16px" }}
                        >
                          <tr>
                            <td colspan="2" align="left" valign="middle">
                              <h4
                                style={{
                                  margin: "0 0 0",
                                  color: "#C03131",
                                  fontSize: "18px",
                                  fontWeight: "500",
                                }}
                              >
                                {" "}
                                Price: $
                                {Object.keys(tourData).length > 0 &&
                                  tourData.price}
                              </h4>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" align="left" valign="middle">
                              <h4
                                style={{
                                  margin: "0 0 0",
                                  color: "#333",
                                  fontFamily: "Roboto",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                }}
                              >
                                Property
                              </h4>
                            </td>
                          </tr>
                          <tr>
                            <td width="67%" align="left" valign="middle">
                              BEDROOMS :
                            </td>
                            <td
                              width="33%"
                              align="left"
                              valign="middle"
                              style={{ color: "#C03131" }}
                            >
                              {Object.keys(tourData).length > 0 &&
                                tourData.totalbedrooms}
                            </td>
                          </tr>
                          <tr>
                            <td align="left" valign="middle">
                              BATHROOMS :
                            </td>
                            <td
                              align="left"
                              valign="middle"
                              style={{ color: "#C03131" }}
                            >
                              {Object.keys(tourData).length > 0 &&
                                tourData.totalbathrooms}
                            </td>
                          </tr>
                          <tr>
                            <td align="left" valign="middle">
                              GARAGE SIZE :
                            </td>
                            <td
                              align="left"
                              valign="middle"
                              style={{ color: "#C03131" }}
                            >
                              {Object.keys(tourData).length > 0 &&
                                tourData.garagesize}
                            </td>
                          </tr>
                          <tr>
                            <td align="left" valign="middle">
                              YEAR BUILT :
                            </td>
                            <td
                              align="left"
                              valign="middle"
                              style={{ color: "#C03131" }}
                            >
                              {Object.keys(tourData).length > 0 &&
                                tourData.yearbuilt}
                            </td>
                          </tr>
                          <tr>
                            <td align="left" valign="middle">
                              LOT SIZE :
                            </td>
                            <td
                              align="left"
                              valign="middle"
                              style={{ color: "#C03131" }}
                            >
                              {Object.keys(tourData).length > 0 &&
                                tourData.lotsize}
                            </td>
                          </tr>
                          <tr>
                            <td align="left" valign="middle">
                              INTERIOR SQ. FT :{" "}
                            </td>
                            <td
                              align="left"
                              valign="middle"
                              style={{ color: "#C03131" }}
                            >
                              {Object.keys(tourData).length > 0 &&
                                tourData.sqfootage}
                            </td>
                          </tr>
                          <tr>
                            <td align="left" valign="middle">
                              SUBDIVISION :
                            </td>
                            <td
                              align="left"
                              valign="middle"
                              style={{ color: "#C03131" }}
                            >
                              {Object.keys(tourData).length > 0 &&
                                tourData.subdivision}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td
                  width="70%"
                  height="288"
                  align="left"
                  valign="top"
                  bgcolor="#fff"
                  style={{ border: "1px solid #dddddd" }}
                >
                  <table
                    width="95%"
                    border="0"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td>
                        <p>
                          {Object.keys(tourData).length > 0 &&
                            tourData.description}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ background: bgColor, padding: "10px" }}>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr style={{ background: bgColor }}>
                <td width="20%" height="91" align="left" valign="middle">
                  {Object.keys(allData).length > 0 && (
                    <img
                      src={allData.agentphoto}
                      alt=""
                      width="90"
                      height="90"
                      style={{ width: "100%" }}
                    />
                  )}
                </td>
                <td width="32%" align="left" valign="middle">
                  <h6
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      display: "block",
                      margin: "0 0",
                    }}
                  >
                    <span id="agentInfo" style={{ fontSize: "14px" }}>
                      {Object.keys(allData).length > 0 && allData.agentname}
                    </span>
                  </h6>
                  <span style={{ color: "#fff" }}>
                    {Object.keys(allData).length > 0 && allData.agentemail}
                  </span>
                  <h6
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      display: "block",
                      margin: "0 0",
                      fontFamily: "'Roboto'",
                    }}
                  >
                    <span id="agentInfo" style={{ fontSize: "14px" }}>
                      {Object.keys(allData).length > 0 && allData.companyname}
                    </span>
                  </h6>{" "}
                </td>
                <td width="12%" align="left" valign="middle"></td>
                <td width="44%" align="right" valign="bottom">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr style={{ background: bgColor }}>
                      <td height="100" align="left" valign="top">
                        <h6></h6>
                      </td>
                    </tr>
                    <tr style={{ background: bgColor }}>
                      <td align="right" valign="bottom">
                        <a
                          style={{ textDecoration: "none", color: "#FFF" }}
                          target="_blank"
                        ></a>
                        <br />
                        <span style={{ color: "#fff" }}>
                          All information deemed reliable, but not guaranteed.
                        </span>
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
