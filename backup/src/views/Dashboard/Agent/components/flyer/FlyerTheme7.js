import React from "react";
import company_img from "../../../../../images/company.png";


export default function FlyerTheme7(props) {
    const { tourData, allData, link } = props;
    return (
        <React.Fragment>
            <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style={{ "maxWidth": "816px", "color": "#606060", "fontFamily": "'Roboto', sans-serif", "fontSize": "14px" }}>
                <tr>
                    <td height="1121" align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="left" valign="top">
                                {Object.keys(allData).length > 0 &&
                                    <img src={allData.image_url[4]} alt="" width="816" height="450" />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td height="10" align="left" valign="middle" bgcolor="#fff"></td>
                        </tr>
                        <tr>
                            <td height="90" align="center" valign="middle" bgcolor="#514d4a" style={{ padding: "15px" }}><h1 style={{ "color": "#F5BF27", "fontSize": "32px", "margin": "0px 0px 0px 0px", "padding": "0px", "textTransform": "uppercase" }}>
                                {Object.keys(tourData).length > 0 &&
                                    tourData.caption
                                }
                            </h1></td>
                        </tr>
                        <tr>
                            <td height="10" align="left" valign="top"></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="49%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[0]} alt="" width="400" height="240" />
                                        }
                                    </td>
                                    <td align="left" valign="top">&nbsp;</td>
                                    <td width="49%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[1]} alt="" width="400" height="240" />
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" valign="top">&nbsp;</td>
                                    <td align="left" valign="top">&nbsp;</td>
                                    <td align="left" valign="top">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[2]} alt="" width="400" height="240" />
                                        }
                                    </td>
                                    <td align="left" valign="top">&nbsp;</td>
                                    <td align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[3]} alt="" width="400" height="240" />
                                        }
                                    </td>
                                </tr>
                            </table></td>
                        </tr>
                        <tr>
                            <td height="10" align="left" valign="top"></td>
                        </tr>
                        <tr>
                            <td height="27" align="left" valign="middle" bgcolor="#534f4c" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr style={{ background: "#534f4c" }}>
                                    <td width="50%" align="left" valign="middle" style={{ color: "#FFFFFF" }}>
                                        {Object.keys(tourData).length > 0 &&
                                            tourData.city + " , " + tourData.countryname
                                        }
                                    </td>
                                    <td width="50%" align="right" valign="middle" style={{ color: "#FFFFFF" }}>
                                        All information deemed reliable, but not guaranteed.</td>
                                </tr>
                            </table></td>
                        </tr>
                    </table></td>
                </tr>
                <tr>
                    <td height="1121" align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="35%" align="left" valign="top" bgcolor="#534f4c"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr style={{ background: "#534f4c" }}>
                                            <td align="left" valign="top" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr style={{ background: "#534f4c" }}>
                                                    <td align="center">
                                                        {Object.keys(allData).length > 0 &&
                                                            <img src={allData.agentphoto} alt="" width="90" height="90" style={{ "border": "2px solid #fff" }} />
                                                        }
                                                        {Object.keys(allData).length > 0 && allData.companylogo ?
                                                            <img src={allData.companylogo} alt="" width="90" height="90" style={{ "border": "2px solid #fff" }} />
                                                            :
                                                            <img src={company_img} alt="" width="90" height="90" style={{ "border": "2px solid #fff" }} />
                                                        }
                                                    </td>
                                                </tr>
                                                <tr style={{ background: "#534f4c" }}>
                                                    <td height="10"></td>
                                                </tr>
                                                <tr style={{ background: "#534f4c" }}>
                                                    <td align="center" valign="top" style={{ color: "#FFFFFF" }}> <strong>
                                                        {Object.keys(allData).length > 0 &&
                                                            allData.agentname
                                                        }
                                                    </strong>
                                                        <br />
                                                        {Object.keys(allData).length > 0 &&
                                                            allData.agentemail
                                                        }
                                                        <br />
                                                        <strong>
                                                            {Object.keys(allData).length > 0 &&
                                                                allData.companyname
                                                            }
                                                        </strong></td>
                                                </tr>
                                            </table></td>
                                        </tr>
                                        <tr style={{ background: "#534f4c" }}>
                                            <td align="left" valign="top" bgcolor="#FFFFFF" height="10"></td>
                                        </tr>
                                        <tr style={{ background: "#534f4c" }}>
                                            <td align="left" valign="top" style={{ padding: "15px" }}><table width="80%" border="0" cellspacing="0" cellpadding="0">
                                                <tr style={{ background: "#534f4c" }}>
                                                    <td align="center" valign="top"><h6 style={{ "color": "#fff", "fontSize": "22px", "margin": "0px", "padding": "0px", "textTransform": "uppercase" }}>${Object.keys(tourData).length > 0 &&
                                                        tourData.price
                                                    }</h6></td>
                                                </tr>
                                                <tr style={{ background: "#534f4c" }}>
                                                    <td align="center" valign="top"><p style={{ "margin": "10px 0px 0px 0px", "fontSize": "12px", "color": "#FFFFFF" }}>
                                                        Visit the virtual tour
                                                    </p>
                                                        <p style={{ "margin": "5px 0px 5px 0px", "fontSize": "14px", "wordBreak": "break-all", "color": "#FFFFFF" }}>
                                                            <a href="#" style={{ "color": "#FFFFFF", "textDecoration": "none" }}>
                                                                https://virtualtourcafe.com/tour/theme-template/{link}/{tourData.userid}
                                                            </a>
                                                        </p></td>
                                                </tr>
                                            </table></td>
                                        </tr>
                                    </table></td>
                                    <td width="1%" height="400" align="left" valign="top"></td>
                                    <td width="64%" align="left" valign="top" bgcolor="#F3C029"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr style={{ background: "#F3C029" }}>
                                            <td align="left" valign="top" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ color: "#FFFFFF" }}>
                                                <tr style={{ background: "#F3C029" }}>
                                                    <td colspan="2" align="left" valign="top" style={{ paddingBottom: "10px" }}><h6 style={{ "fontSize": "20px", "margin": "0px", "padding": "0px", "textTransform": "uppercase" }}>
                                                        FEATURES
                                                    </h6></td>
                                                </tr>
                                                <tr style={{ background: "#F3C029" }}>
                                                    <td width="50%" align="left" valign="top"><table width="100%" cellspacing="0" cellpadding="3" border="0">
                                                        <tbody>
                                                            <tr style={{ background: "#F3C029" }}>
                                                                <td valign="top" align="left">BEDROOMS : {Object.keys(tourData).length > 0 &&
                                                                    tourData.totalbedrooms
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: "#F3C029" }}>
                                                                <td valign="top" align="left">BATHROOMS : {Object.keys(tourData).length > 0 &&
                                                                    tourData.totalbathrooms
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: "#F3C029" }}>
                                                                <td valign="top" align="left">GARAGE : {Object.keys(tourData).length > 0 &&
                                                                    tourData.garagesize
                                                                }</td>
                                                            </tr>
                                                        </tbody>
                                                    </table></td>
                                                    <td width="50%" align="left" valign="top"><table width="100%" cellspacing="0" cellpadding="3" border="0">
                                                        <tbody>
                                                            <tr style={{ background: "#F3C029" }}>
                                                                <td valign="top" align="left">YEAR BUILT : {Object.keys(tourData).length > 0 &&
                                                                    tourData.yearbuilt
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: "#F3C029" }}>
                                                                <td valign="top" align="left">LOT SIZE: {Object.keys(tourData).length > 0 &&
                                                                    tourData.lotsize
                                                                } </td>
                                                            </tr>
                                                            <tr style={{ background: "#F3C029" }}>
                                                                <td valign="top" align="left">INTERIOR SQ. FT : {Object.keys(tourData).length > 0 &&
                                                                    tourData.sqfootage
                                                                }</td>
                                                            </tr>
                                                        </tbody>
                                                    </table></td>
                                                </tr>
                                            </table></td>
                                        </tr>
                                    </table></td>
                                </tr>
                            </table></td>
                        </tr>

                        <tr>
                            <td height="10"></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="49%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[0]} alt="" width="400" height="650" />
                                        }
                                    </td>
                                    <td align="left" valign="top">&nbsp;</td>
                                    <td width="49%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[1]} alt="" width="400" height="650" />
                                        }
                                    </td>
                                </tr>

                            </table></td>
                        </tr>
                        <tr>
                            <td height="10"></td>
                        </tr>
                        <tr>
                            <td height="287" align="left" valign="top" bgcolor="#f3c029" style={{ padding: "15px" }}><p style={{ color: "#FFFFFF" }}>As the manager of two leading real estate offices in the Bay Area, I am always looking for ways to differentiate our agents and be more competitive in the local market. VirtualTourCafe has been a great tool in helping our agents get more exposure and leads. We have been using VirtualTourCafe since they launched in 2010 and they just keep getting better. The product is excellent and the support is even better. As the manager of two leading real estate offices in the Bay Area, I am always looking for ways to differentiate our agents and be more competitive in the local market. VirtualTourCafe has been a great tool in helping our agents get more exposure and leads. We have been using VirtualTourCafe since they launched in 2010 and they just keep getting better. The product is excellent and the support is even better.VirtualTourCafe has been a great tool in helping our agents get more exposure and leads.The product is excellent and the support is even better.VirtualTourCafe has been a great
                            </p></td>
                        </tr>
                        <tr>
                            <td height="10"></td>
                        </tr>
                        <tr>
                            <td height="27" align="left" valign="middle" bgcolor="#534f4c" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr style={{ background: "#534f4c" }}>
                                    <td align="right" valign="top" style={{ color: "#FFFFFF" }}>All information deemed reliable, but not guaranteed.</td>
                                </tr>
                            </table></td>
                        </tr>
                    </table></td>
                </tr>
            </table>
        </React.Fragment>
    );
};