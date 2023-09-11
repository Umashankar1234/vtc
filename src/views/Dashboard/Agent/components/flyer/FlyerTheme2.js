import React from "react";
import company_img from "../../../../../images/company.png";

export default function FlyerTheme2(props) {
    const { tourData, allData, link } = props;
    return (
        <React.Fragment>
            <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style={{ "maxWidth": "816px", "color": "#fff", "fontFamily": "'Roboto', sans-serif", "fontSize": "14px" }}>
                <tr>
                    <td width="62%" align="center" valign="middle" bgcolor="#00aee5" style={{ "padding": "0px 10px" }}>
                        <h1 style={{ "color": "#fff", "fontSize": "32px", "margin": "0px 0px 0px 0px", "padding": "0px" }}>
                            {Object.keys(tourData).length > 0 &&
                                tourData.caption
                            }
                        </h1>
                        <h6 style={{ "color": "#fff", "fontSize": "16px", "margin": "0px", "padding": "0px", "textTransform": "uppercase" }}> {Object.keys(tourData).length > 0 &&
                            tourData.city + " , " + tourData.countryname
                        }
                        </h6></td>
                    <td width="1%" height="120" align="center" valign="middle" >&nbsp;</td>
                    <td width="37%" align="center" valign="middle" bgcolor="#343434" style={{ "paddingTop": "5px", "paddingBottom": "5px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr style={{ background: "#343434" }}>
                            <td align="center">
                                {Object.keys(allData).length > 0 &&
                                    <img src={allData.agentphoto} alt="" width="90" height="90" />
                                }
                                {Object.keys(allData).length > 0 && allData.companylogo ?
                                    <img src={allData.companylogo} alt="" width="90" height="90" />
                                    :
                                    <img src={company_img} alt="" width="90" height="90" />
                                }
                            </td>
                        </tr>
                        <tr style={{ background: "#343434" }}>
                            <td height="10"></td>
                        </tr>
                        <tr style={{ background: "#343434" }}>
                            <td align="center" valign="top">
                                <strong>
                                    {Object.keys(allData).length > 0 &&
                                        allData.agentname
                                    }
                                </strong>
                                <br />
                                {Object.keys(allData).length > 0 &&
                                    allData.agentemail
                                }<br />
                                <strong>
                                    {Object.keys(allData).length > 0 &&
                                        allData.companyname
                                    }
                                </strong>
                            </td>
                        </tr>
                    </table></td>
                </tr>
                <tr>
                    <td height="5" colspan="3" align="left" valign="top"></td>
                </tr>

                <tr>
                    <td align="left" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            {Object.keys(allData).length > 0 &&
                                <td height="500" colspan="3" align="left" valign="top" bgcolor="#000099" style={{ "background": "url(" + allData.image_url[0] + ") no-repeat center center" }}> </td>
                            }

                        </tr>
                        <tr>
                            <td height="10" colspan="3" align="left" valign="top"></td>
                        </tr>
                        <tr>
                            <td colspan="3" align="left" valign="top"><div style={{ "float": "left", "width": "100%", "height": "300px", "overflow": "hidden" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="49%" align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[1]} alt="" width="250" height="150" />
                                        }
                                    </td>
                                    <td width="2%" align="left" valign="top"></td>
                                    <td height="49%" align="right" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[2]} alt="" width="250" height="150" />
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[3]} alt="" width="250" height="150" />
                                        }
                                    </td>
                                    <td align="left" valign="top">&nbsp;</td>
                                    <td align="right" valign="top">
                                        {Object.keys(allData).length > 0 &&
                                            <img src={allData.image_url[4]} alt="" width="250" height="150" />
                                        }
                                    </td>
                                </tr>
                            </table>
                            </div></td>
                        </tr>

                    </table></td>
                    <td height="685" align="left" valign="top">&nbsp;</td>
                    <td align="left" valign="top" bgcolor="#05afea"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td valign="top" style={{ padding: "10px" }}>
                                <p style={{ margin: "0px" }}>
                                    {Object.keys(tourData).length > 0 &&
                                        tourData.description
                                    }
                                </p>
                            </td>
                        </tr>
                    </table></td>
                </tr>
                <tr>
                    <td height="5" colspan="3" align="left" valign="top"></td>
                </tr>
                <tr>
                    <td align="center" valign="middle" bgcolor="#05afea" style={{ "paddingTop": "10px", "paddingBottom": "10px" }}><table width="96%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr style={{ background: "#05afea" }}>
                            <td colspan="2"><h6 style={{ "color": "#fff", "fontSize": "16px", "margin": "0px 0px 10px 0px", "padding": "0px", "textTransform": "uppercase" }}>FEATURES</h6></td>
                        </tr>
                        <tr style={{ background: "#05afea" }}>
                            <td width="50%" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="3">
                                <tr style={{ background: "#05afea" }}>
                                    <td align="left" valign="top">BEDROOMS :{Object.keys(tourData).length > 0 &&
                                        tourData.totalbedrooms
                                    }</td>
                                </tr>
                                <tr style={{ background: "#05afea" }}>
                                    <td align="left" valign="top">BATHROOMS :  {Object.keys(tourData).length > 0 &&
                                        tourData.totalbathrooms
                                    }</td>
                                </tr>
                                <tr style={{ background: "#05afea" }}>
                                    <td align="left" valign="top">GARAGE : {Object.keys(tourData).length > 0 &&
                                        tourData.garagesize
                                    }</td>
                                </tr>
                            </table></td>
                            <td width="50%"><table width="100%" border="0" cellspacing="0" cellpadding="3">
                                <tr style={{ background: "#05afea" }}>
                                    <td align="left" valign="top">YEAR BUILT :   {Object.keys(tourData).length > 0 &&
                                        tourData.yearbuilt
                                    }</td>
                                </tr>
                                <tr style={{ background: "#05afea" }}>
                                    <td align="left" valign="top">LOT SIZE  {Object.keys(tourData).length > 0 &&
                                        tourData.lotsize
                                    }</td>
                                </tr>
                                <tr style={{ background: "#05afea" }}>
                                    <td align="left" valign="top">INTERIOR SQ. FT :  {Object.keys(tourData).length > 0 &&
                                        tourData.sqfootage
                                    } </td>
                                </tr>
                                <tr style={{ background: "#05afea" }}>
                                    <td align="left" valign="top">SUBDIVISION : {Object.keys(tourData).length > 0 &&
                                        tourData.subdivision
                                    }</td>
                                </tr>
                            </table></td>
                        </tr>
                    </table></td>
                    <td height="202" align="left" valign="top">&nbsp;</td>
                    <td align="center" valign="middle" bgcolor="#343434" style={{ "paddingTop": "10px", "paddingBottom": "10px" }}><table width="80%" border="0" cellspacing="0" cellpadding="0">
                        <tr style={{ background: "#343434" }}>
                            <td align="center" valign="top">
                                <p style={{ "margin": "5px 0px 5px 0px", "fontSize": "14px", "wordBreak": "break-all", color: "white" }}>https://virtualtourcafe.com/tour/theme-template/{link}/{tourData.userid}</p>

                                <p style={{ "margin": "0px", "fontSize": "12px", color: "white" }}>All information deemed reliable, but not guaranteed.</p>
                            </td>
                        </tr>
                    </table></td>
                </tr>
            </table>
        </React.Fragment>
    );
};