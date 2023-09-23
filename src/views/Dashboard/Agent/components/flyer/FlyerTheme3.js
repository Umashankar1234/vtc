import React, { useEffect, useState } from "react";
import company_img from "../../../../../images/company.png";

export default function FlyerTheme3(props) {
  const { tourData, allData, link } = props;
  const [bgColor, setBgColor] = useState("#bd1e1e");
  const [bgColor2,setBgColor2]=useState("#bd1e1e");
  useEffect(() => {
    if(allData.themeId == 5){
        setBgColor("#5776a4")
        setBgColor2("#022974")
    }        
    else if(allData.themeId == 6){
        setBgColor("#acacac")
        setBgColor2("#b8040f")
    }
    else if(allData.themeId == 7){
        setBgColor("#17317d")
        setBgColor2("#e91837")
    }
    else if(allData.themeId == 4){
        setBgColor("#1d1916")
        setBgColor2("#ee9101")
    }
    else if(allData.themeId == 257){
        setBgColor("#000000")
        setBgColor2("#020202")
    }
    else if(allData.themeId == 258){
        setBgColor("#989898")
        setBgColor2("#020202")
    }
    else if(allData.themeId == 130){
        setBgColor("#000000")
        setBgColor2("#314c73")
    }
    else if(allData.themeId == 141){
        setBgColor("#e12334")
        setBgColor2("#051933")
    }
    else if(allData.themeId == 237){
        setBgColor("#8e8e8e")
        setBgColor2("#8d3d7b")
    }
    else if(allData.themeId == 84){
        setBgColor("#3e3e3e")
        setBgColor2("#3f8d37")
    }
    else if(allData.themeId == 75){
        setBgColor("#7a7a7a")
        setBgColor2("#b68748")
    }
    
    else if(allData.themeId == 3){
        setBgColor("#990134")
        setBgColor2("#015a6a")
    }
    else if(allData.themeId == 145){
        setBgColor("#1d1916")
        setBgColor2("#da1029")
    }
}, [allData])
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
            height="70"
            align="center"
            valign="middle"
            bgcolor={bgColor2}
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
            </h1>{" "}
          </td>
        </tr>
        <tr>
          <td align="center">
            {Object.keys(allData).length > 0 && (
              <img src={allData.image_url[0]} alt="" width="816" height="450" />
            )}
          </td>
        </tr>
        <tr>
          <td bgcolor={bgColor} style={{ padding: "10px" }}>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
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
                      {" "}
                      <tr style={{ background: bgColor }}>
                        <td align="left" valign="top">
                          YEAR BUILT :{" "}
                          {Object.keys(tourData).length > 0 &&
                            tourData.yearbuilt}
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
                          {Object.keys(tourData).length > 0 &&
                            tourData.sqfootage}{" "}
                        </td>
                      </tr>
                      <tr style={{ background: bgColor }}>
                        <td align="left" valign="top">
                          SUBDIVISION :{" "}
                          {Object.keys(tourData).length > 0 &&
                            tourData.subdivision}
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
          <td height="10"></td>
        </tr>
        <tr>
          <td>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="33.333%" align="left" valign="top">
                  {Object.keys(allData).length > 0 && (
                    <img
                      src={allData.image_url[1]}
                      alt=""
                      width="250"
                      height="150"
                    />
                  )}
                </td>
                <td width="33.333%" align="left" valign="top">
                  {Object.keys(allData).length > 0 && (
                    <img
                      src={allData.image_url[2]}
                      alt=""
                      width="250"
                      height="150"
                    />
                  )}
                </td>
                <td width="33.333%" align="left" valign="top">
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
        <tr>
          <td height="10"></td>
        </tr>
        <tr>
          <td height="40" align="left" valign="middle" bgcolor={bgColor}>
            <table
              width="96%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tr style={{ background: bgColor }}>
                <td width="30%" align="left" valign="middle">
                  <h6
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      margin: "0px",
                      padding: "0px",
                      textTransform: "uppercase",
                    }}
                  >
                    {" "}
                    Price : $
                    {Object.keys(tourData).length > 0 && tourData.price}
                  </h6>
                </td>
                <td width="70%" align="right" valign="middle">
                  {Object.keys(tourData).length > 0 &&
                    tourData.city + " , " + tourData.countryname}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td height="10"></td>
        </tr>
        <tr>
          <td>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="62%" align="left" valign="top" bgcolor={bgColor}>
                  <table
                    width="100%"
                    border="0"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr style={{ background: bgColor }}>
                      <td valign="top" style={{ padding: "10px" }}>
                        <p style={{ margin: "0px", color: "white" }}>
                          As the manager of two leading real estate offices in
                          the Bay Area, I am always looking for ways to
                          differentiate our agents and be more competitive in
                          the local market. VirtualTourCafe has been a great
                          tool in helping our agents get more exposure and
                          leads. We have been using VirtualTourCafe since they
                          launched in 2010 and they just keep getting better.
                          The product is excellent and the support is even
                          better. As the manager of two leading real estate
                          offices in the Bay Area, I am always looking for ways
                          to differentiate our agents and be more competitive in
                          the local market. VirtualTourCafe has been a great
                          tool in helping our agents get more exposure and
                          leads. We have been using VirtualTourCafe since they
                          launched in 2010 and they just keep getting better.
                          The product is excellent and the support is even
                          better.VirtualTourCafe has been a great tool in
                          helping our agents get more exposure and leads.The
                          product is excellent and the support is even
                          better.VirtualTourCafe has been a great
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="1%" height="291" align="left" valign="top">
                  &nbsp;
                </td>
                <td width="37%" align="left" valign="top" bgcolor={bgColor}>
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr style={{ background: bgColor }}>
                      <td bgcolor={bgColor2} style={{ padding: "10px" }}>
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
                                  style={{
                                    border: "2px solid #fff",
                                    WebkitBorderRadius: "50%",
                                    MozBorderRadius: "50%",
                                    borderRadius: "50%",
                                  }}
                                />
                              )}
                              {Object.keys(allData).length > 0 &&
                              allData.companylogo ? (
                                <img
                                  src={allData.companylogo}
                                  alt=""
                                  width="90"
                                  height="90"
                                  style={{
                                    border: "2px solid #fff",
                                    WebkitBorderRadius: "50%",
                                    MozBorderRadius: "50%",
                                    borderRadius: "50%",
                                  }}
                                />
                              ) : (
                                <img
                                  src={company_img}
                                  alt=""
                                  width="90"
                                  height="90"
                                  style={{
                                    border: "2px solid #fff",
                                    WebkitBorderRadius: "50%",
                                    MozBorderRadius: "50%",
                                    borderRadius: "50%",
                                  }}
                                />
                              )}
                            </td>
                          </tr>
                          <tr style={{ background: bgColor2 }}>
                            <td height="10"></td>
                          </tr>
                          <tr style={{ background: bgColor2 }}>
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
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        valign="top"
                        bgcolor={bgColor}
                        style={{ padding: "10px" }}
                      >
                        <a
                          style={{ textDecoration: "none", color: "#FFF" }}
                          target="_blank"
                          href="https://virtualtourcafe.com/beta/tour/6139332"
                        >
                          https://virtualtourcafe.com/tour/theme-template/{link}
                          /{tourData.userid}
                        </a>
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
