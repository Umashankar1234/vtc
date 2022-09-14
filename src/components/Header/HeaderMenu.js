import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { APIURL, APIPath } from "../../CommonMethods/Fetch";
import Logo from "../../images/vtc-logo.png";
export default function HeaderMenu() {
    return (
        <>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="head_sec_menu">
                        <div class="row">
                            <div class="col-lg-2 col-md-2">
                                <div class="vtc_logo">
                                    <Link to={APIPath()}>
                                        <img src={Logo} alt="Logo" title="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-10 col-md-10">
                                <div class="head_sec_menu_main">
                                    <ul>
                                        <li>
                                            <Link to={APIPath()}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to={APIPath() + "features"}>Features</Link>
                                        </li>
                                        <li>
                                            <Link to={APIPath() + "agent"}>Agents</Link>
                                        </li>
                                        <li>
                                            <Link to={APIPath() + "broker"}>Brokers</Link>
                                        </li>
                                        <li>
                                            <Link to={APIPath() + "association"}>Associations</Link>
                                        </li>
                                        <li>
                                            <Link to={APIPath() + "preferred-vendors"}>Preferred Vendors</Link>
                                        </li>
                                        <li class="active">
                                            <Link to={APIPath() + "about-us"}>About</Link>
                                        </li>
                                        <li>
                                            <Link to={APIPath() + "example"}>Example</Link>
                                        </li>
                                        <li>
                                            <Link to={APIPath() + "pricing"}>Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to={APIPath() + "faq"}>FAQ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}