import React from "react";
import company_img from "../../../../../images/company.png";


export default function FlyerTheme6(props) {
    const { tourData, allData, link } = props;
    return (
        <React.Fragment>
            <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style={{ "maxWidth": "816px", "color": "#606060", "fontFamily": "'Roboto', sans-serif", "fontSize": "14px" }}>
                <tr>
                    <td height="1121" align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="left" valign="top">
                                {Object.keys(allData).length > 0 &&
                                    <img src={allData.image_url[4]} alt="" width="816" height="490" />
                                }
                            </td>
                        </tr><tr>
                            <td height="30" align="left" valign="middle" bgcolor="#cf62a5" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr style={{ background: "#cf62a5" }}>
                                    <td width="50%" align="left" valign="middle" style={{ color: "#FFFFFF" }}>
                                        {Object.keys(tourData).length > 0 &&
                                            tourData.city + " , " + tourData.countryname
                                        }
                                    </td>
                                    <td width="50%" align="right" valign="middle" style={{ color: "#FFFFFF" }}><h6 style={{ "color": "#fff", "fontSize": "22px", "margin": "0px", "padding": "0px", "textTransform": "uppercase" }}>${Object.keys(tourData).length > 0 &&
                                        tourData.price
                                    }
                                    </h6></td>
                                </tr>
                            </table></td>
                        </tr>
                        <tr>
                            <td height="10" align="left" valign="top"></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="34%" align="left" valign="top" bgcolor="#d260a9" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr style={{ background: "#cf62a5" }}>
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
                                        <tr style={{ background: "#cf62a5" }}>
                                            <td height="10"></td>
                                        </tr>
                                        <tr style={{ background: "#cf62a5" }}>
                                            <td align="center" valign="top" style={{ color: "#FFFFFF" }}>
                                                <strong>
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
                                                </strong>
                                            </td>
                                        </tr>
                                    </table></td>
                                    <td width="1%" height="315" align="left" valign="top" bgcolor="#fff">&nbsp;</td>
                                    <td width="65%" align="left" valign="top" bgcolor="#d260a9"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr style={{ background: "#cf62a5" }}>
                                            <td height="130" align="center" valign="top" bgcolor="#FFFFFF" style={{ padding: "15px" }}>
                                                <h1 style={{ "color": "#d260a9", "fontSize": "32px", "margin": "0px 0px 0px 0px", "padding": "0px", "textTransform": "uppercase" }}>
                                                    {Object.keys(tourData).length > 0 &&
                                                        tourData.caption
                                                    }
                                                </h1>
                                            </td>
                                        </tr>
                                        <tr style={{ background: "#cf62a5" }}>
                                            <td valign="top" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ color: "#FFFFFF" }}>
                                                <tr style={{ background: "#cf62a5" }}>
                                                    <td colspan="2" align="left" valign="top" style={{ "paddingBottom": "10px" }}><h6 style={{ "fontSize": "20px", "margin": "0px", "padding": "0px", "textTransform": "uppercase" }}>
                                                        FEATURES
                                                    </h6></td>
                                                </tr>
                                                <tr style={{ background: "#cf62a5" }}>
                                                    <td width="50%" align="left" valign="top"><table width="100%" cellspacing="0" cellpadding="3" border="0">
                                                        <tbody>
                                                            <tr style={{ background: "#cf62a5" }}>
                                                                <td valign="top" align="left">BEDROOMS : {Object.keys(tourData).length > 0 &&
                                                                    tourData.totalbedrooms
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: "#cf62a5" }}>
                                                                <td valign="top" align="left">BATHROOMS : {Object.keys(tourData).length > 0 &&
                                                                    tourData.totalbathrooms
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: "#cf62a5" }}>
                                                                <td valign="top" align="left">GARAGE : {Object.keys(tourData).length > 0 &&
                                                                    tourData.garagesize
                                                                }</td>
                                                            </tr>
                                                        </tbody>
                                                    </table></td>
                                                    <td width="50%" align="left" valign="top"><table width="100%" cellspacing="0" cellpadding="3" border="0">
                                                        <tbody>
                                                            <tr style={{ background: "#cf62a5" }}>
                                                                <td valign="top" align="left">YEAR BUILT : {Object.keys(tourData).length > 0 &&
                                                                    tourData.yearbuilt
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: "#cf62a5" }}>
                                                                <td valign="top" align="left">LOT SIZE: {Object.keys(tourData).length > 0 &&
                                                                    tourData.lotsize
                                                                } </td>
                                                            </tr>
                                                            <tr style={{ background: "#cf62a5" }}>
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
                            <td height="10" align="left" valign="top"></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="35%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[1]} alt="" width="300" height="200" />
                                        }
                                    </td>
                                    <td width="1%" align="left" valign="top">&nbsp;</td>
                                    <td width="35%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[2]} alt="" width="300" height="200" />
                                        }
                                    </td>
                                    <td width="1%" align="left" valign="top">&nbsp;</td>
                                    <td width="28%" align="center" valign="middle" bgcolor="#d260a9" style={{ padding: "15px 0px" }}><table width="80%" border="0" cellspacing="0" cellpadding="0">
                                        <tr style={{ background: "#cf62a5" }}>
                                            <td align="center" valign="top"><p style={{ "margin": "10px 0px 0px 0px", "fontSize": "12px", "color": "#FFFFFF" }}>
                                                Visit the virtual tour
                                            </p>
                                                <p style={{ "margin": "5px 0px 5px 0px", "fontSize": "14px", "wordBreak": "break-all", "color": "#FFFFFF" }}>
                                                    <a href="#" style={{ "color": "#FFFFFF", "textDecoration": "none" }}>
                                                        https://virtualtourcafe.com/tour/theme-template/{link}/{tourData.userid}
                                                    </a>
                                                </p>
                                            </td>
                                        </tr>
                                    </table></td>
                                </tr>
                            </table></td>
                        </tr>
                        <tr>
                            <td height="10" align="left" valign="top"></td>
                        </tr>
                        <tr>
                            <td height="30" align="left" valign="middle" bgcolor="#51304f" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr style={{ background: "#51304f" }}>
                                    <td width="50%" align="left" valign="top" style={{ color: "#FFFFFF" }}>https://virtualtourcafe.com/tour/theme-template/{link}/{tourData.userid}</td>
                                    <td width="50%" align="right" valign="top" style={{ color: "#FFFFFF" }}>All information deemed reliable, but not guaranteed.</td>
                                </tr>
                            </table></td>
                        </tr>
                    </table></td>
                </tr>
                <tr>
                    <td height="1121" align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td height="314" align="left" valign="top" bgcolor="#d260a9" style={{ padding: "15px 0px" }}><p style={{ color: "#FFFFFF" }}>As the manager of two leading real estate offices in the Bay Area, I am always looking for ways to differentiate our agents and be more competitive in the local market. VirtualTourCafe has been a great tool in helping our agents get more exposure and leads. We have been using VirtualTourCafe since they launched in 2010 and they just keep getting better. The product is excellent and the support is even better. As the manager of two leading real estate offices in the Bay Area, I am always looking for ways to differentiate our agents and be more competitive in the local market. VirtualTourCafe has been a great tool in helping our agents get more exposure and leads. We have been using VirtualTourCafe since they launched in 2010 and they just keep getting better. The product is excellent and the support is even better.VirtualTourCafe has been a great tool in helping our agents get more exposure and leads.The product is excellent and the support is even better.VirtualTourCafe has been a great
                            </p></td>
                        </tr>
                        <tr>
                            <td height="20"></td>
                        </tr>
                        <tr>
                            <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="49%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[0]} alt="" width="300" height="200" />
                                        }
                                    </td>
                                    <td align="left" valign="top">&nbsp;</td>
                                    <td width="49%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[1]} alt="" width="300" height="200" />
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
                                            <img src={allData.image_url[2]} alt="" width="300" height="200" />
                                        }
                                    </td>
                                    <td align="left" valign="top">&nbsp;</td>
                                    <td align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[3]} alt="" width="300" height="200" />
                                        }
                                    </td>
                                </tr>
                            </table></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td height="30" align="left" valign="middle" bgcolor="#532853" style={{ padding: "15px 0px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr style={{ background: "#532853" }}>
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