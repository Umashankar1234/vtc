import React, { useEffect, useState } from "react";
import company_img from "../../../../../images/company.png";


export default function FlyerTheme6(props) {
    const { tourData, allData, link } = props;
    const [bgColor, setBgColor] = useState("#bd1e1e");
    const [bgColor2, setBgColor2] = useState("#bd1e1e");
    useEffect(() => {
        if(allData.themeId == 5){
            setBgColor("#052776")
            setBgColor2("#5478ab")
        }        
        else if(allData.themeId == 6){
            setBgColor("#b10007")
            setBgColor2("#adacb3")
        }
        else if(allData.themeId == 7){
            setBgColor("#e4193e")
            setBgColor2("#1c377e")
        }
        else if(allData.themeId == 4){
            setBgColor("#ed9200")
            setBgColor2("#1d1916")
        }
        else if(allData.themeId == 257){
            setBgColor("#000000")
            setBgColor2("#000000")
        }
        else if(allData.themeId == 258){
            setBgColor("#000000")
            setBgColor2("#9c9ba0")
        }
        else if(allData.themeId == 130){
            setBgColor("#324c6c")
            setBgColor2("#323232")
        }
        else if(allData.themeId == 141){
            setBgColor("#00122e")
            setBgColor2("#ea2a37")
        }
        else if(allData.themeId == 237){
            setBgColor("#933b77")
            setBgColor2("#8f8e92")
        }
        else if(allData.themeId == 84){
            setBgColor("#438a3c")
            setBgColor2("#41423c")
        }
        else if(allData.themeId == 75){
            setBgColor("#b9854a")
            setBgColor2("#7a797d")
        }
        
        else if(allData.themeId == 3){
            setBgColor("#015964")
            setBgColor2("#990033")
        }
        else if(allData.themeId == 145){
            setBgColor("#de1130")
            setBgColor2("#262626")
        }
    }, [allData])
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
                            <td height="30" align="left" valign="middle" bgcolor={bgColor} style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr style={{ background: bgColor }}>
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
                                    <td width="34%" align="left" valign="top" bgcolor={bgColor} style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr style={{ background: bgColor }}>
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
                                        <tr style={{ background: bgColor }}>
                                            <td height="10"></td>
                                        </tr>
                                        <tr style={{ background: bgColor }}>
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
                                    <td width="65%" align="left" valign="top" bgcolor={bgColor}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr style={{ background: bgColor }}>
                                            <td height="130" align="center" valign="top" bgcolor="#FFFFFF" style={{ padding: "15px" }}>
                                                <h1 style={{ "color": bgColor, "fontSize": "32px", "margin": "0px 0px 0px 0px", "padding": "0px", "textTransform": "uppercase" }}>
                                                    {Object.keys(tourData).length > 0 &&
                                                        tourData.caption
                                                    }
                                                </h1>
                                            </td>
                                        </tr>
                                        <tr style={{ background: bgColor }}>
                                            <td valign="top" style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0" style={{ color: "#FFFFFF" }}>
                                                <tr style={{ background: bgColor }}>
                                                    <td colspan="2" align="left" valign="top" style={{ "paddingBottom": "10px" }}><h6 style={{ "fontSize": "20px", "margin": "0px", "padding": "0px", "textTransform": "uppercase" }}>
                                                        FEATURES
                                                    </h6></td>
                                                </tr>
                                                <tr style={{ background: bgColor }}>
                                                    <td width="50%" align="left" valign="top"><table width="100%" cellspacing="0" cellpadding="3" border="0">
                                                        <tbody>
                                                            <tr style={{ background: bgColor }}>
                                                                <td valign="top" align="left">BEDROOMS : {Object.keys(tourData).length > 0 &&
                                                                    tourData.totalbedrooms
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: bgColor }}>
                                                                <td valign="top" align="left">BATHROOMS : {Object.keys(tourData).length > 0 &&
                                                                    tourData.totalbathrooms
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: bgColor }}>
                                                                <td valign="top" align="left">GARAGE : {Object.keys(tourData).length > 0 &&
                                                                    tourData.garagesize
                                                                }</td>
                                                            </tr>
                                                        </tbody>
                                                    </table></td>
                                                    <td width="50%" align="left" valign="top"><table width="100%" cellspacing="0" cellpadding="3" border="0">
                                                        <tbody>
                                                            <tr style={{ background: bgColor }}>
                                                                <td valign="top" align="left">YEAR BUILT : {Object.keys(tourData).length > 0 &&
                                                                    tourData.yearbuilt
                                                                }</td>
                                                            </tr>
                                                            <tr style={{ background: bgColor }}>
                                                                <td valign="top" align="left">LOT SIZE: {Object.keys(tourData).length > 0 &&
                                                                    tourData.lotsize
                                                                } </td>
                                                            </tr>
                                                            <tr style={{ background: bgColor }}>
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
                                    <td width="28%" align="center" valign="middle" bgcolor={bgColor} style={{ padding: "15px 0px" }}><table width="80%" border="0" cellspacing="0" cellpadding="0">
                                        <tr style={{ background: bgColor }}>
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
                            <td height="30" align="left" valign="middle" bgcolor={bgColor2} style={{ padding: "15px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr style={{ background: bgColor2 }}>
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
                            <td height="314" align="left" valign="top" bgcolor={bgColor} style={{ padding: "15px 0px" }}><p style={{ color: "#FFFFFF" }}>As the manager of two leading real estate offices in the Bay Area, I am always looking for ways to differentiate our agents and be more competitive in the local market. VirtualTourCafe has been a great tool in helping our agents get more exposure and leads. We have been using VirtualTourCafe since they launched in 2010 and they just keep getting better. The product is excellent and the support is even better. As the manager of two leading real estate offices in the Bay Area, I am always looking for ways to differentiate our agents and be more competitive in the local market. VirtualTourCafe has been a great tool in helping our agents get more exposure and leads. We have been using VirtualTourCafe since they launched in 2010 and they just keep getting better. The product is excellent and the support is even better.VirtualTourCafe has been a great tool in helping our agents get more exposure and leads.The product is excellent and the support is even better.VirtualTourCafe has been a great
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
                            <td height="30" align="left" valign="middle" bgcolor={bgColor2} style={{ padding: "15px 0px" }}><table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr style={{ background: bgColor2}}>
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