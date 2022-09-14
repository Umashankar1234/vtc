import React, { useEffect, useState, useContext } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Logo from "../../images/vtc-logo.png";
import banner from "../../images/broker-banner.jpg";
import user from "../../images/user.jpg";
import Skeleton from '@material-ui/lab/Skeleton';
import Footer from "../../components/Footer/Footer";
import { APIPath, APIURL } from "../../CommonMethods/Fetch";
import { postRecord } from "../../CommonMethods/Save";
import { AuthContext } from "../../CommonMethods/Authentication";
import Footer1 from "../../components/Footer/Footer1";
const APITermPagedata = APIURL() + "privacypolicy";
const APIGetSiteSetting = APIURL() + "sitesetting";
const APIGetUserData = APIURL() + "user-details";
const APIGetBrokerDetails = APIURL() + "get-BrokerDetails";
export default function Error() {
    const { dispatch } = useContext(AuthContext);
    const context = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState({});
    const [data, setData] = useState({});
    const [siteData, setSiteData] = useState({});
    const [currentBroker, setCurrentBroker] = useState({});
    useEffect(() => {
        window.scroll(0, 0);
        const obj = { authenticate_key: "abcd123XYZ" };
        postRecord(APITermPagedata, obj)
            .then(res => {
                if (res.data[0].response.status === "success") {
                    setData(res.data[0].response.data.termpage_content);
                }
            });
    }, []);
    useEffect(() => {
        window.scroll(0, 0);
        const obj = { authenticate_key: "abcd123XYZ" };
        postRecord(APIGetSiteSetting, obj)
            .then(res => {
                if (res.data[0].response.status === "success") {
                    setSiteData(res.data[0].response.data);
                }
            });
    }, []);
    useEffect(() => {
        if (context.state.user) {
            const objusr = { authenticate_key: "abcd123XYZ", agent_id: JSON.parse(context.state.user).agentId };
            postRecord(APIGetUserData, objusr)
                .then(res => {
                    if (res.data[0].response.status === "success") {
                        setCurrentUser(res.data[0].response.data.agent_profile);
                    }
                });
        }
    }, [context.state.user]);
    useEffect(() => {
        if (context.state.user) {
            const objusr = { authenticate_key: "abcd123XYZ", broker_id: JSON.parse(context.state.user).user_id };
            postRecord(APIGetBrokerDetails, objusr)
                .then(res => {
                    setCurrentBroker(res.data[0].response.data.broker_profile);
                })


        }
    }, [context.state.user])
    const handleScroll = () => {
        window.scrollTo(0, 0);
    };
    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
    };
    const openBox = () => {
        if (!$("#mob_btn").hasClass('active')) {
            $("#mob_btn").addClass('active');
            $("#mobilemenu").addClass('active');
            return $('body').css('overflow', 'hidden');
        } else {
            $("#mob_btn").removeClass('active');
            $("#mobilemenu").removeClass('active');
            return $('body').css('overflow', 'auto');
        }
    }
    return (
        <div>
            <section class="home_page">
                <div class="mobile_on mobile_slide">
                    <div class="mob_head">
                        <div class="hm_logo">
                            <a href="#">
                                <img src={Logo} alt="Logo" title="Logo" />
                            </a>
                        </div>


                        <div id="mobilemenu">
                            <div class="mobilemenu-wrapper">
                                <div class="mobilemenu-trigger">
                                    <button id="mob_btn" class="trigger" onClick={openBox}>
                                        <span class="box">
                                            <span class="bar top"></span>
                                            <span class="bar middle"></span>
                                            <span class="bar bottom"></span>
                                        </span>
                                    </button>
                                </div>
                                <div class="mobilemenu-view">
                                    <div class="menu">
                                        <ul>
                                            <li>
                                                <Link to={APIPath() + "login"}>Login</Link>
                                            </li>
                                            <li>
                                                <Link to={APIPath() + "agent"}>Register</Link>
                                            </li>
                                            <li class="">
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
                                            <li>
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
                <hr class="spacer1px"></hr>
                <div class="home_page_banner inner_banner">
                    <img src={banner} alt="" title="" />
                    <div class="inner_banner_cont">
                        <div class="inner_banner_cont_sec">
                            <h2>{Object.keys(data).length > 0 ? (
                                data.title
                            ) : (
                                <Skeleton variant="text" width={350} height={100} style={{ background: "#bbbbbb" }} />
                            )}</h2>
                            <h5>{Object.keys(data).length > 0 ? (
                                data.banner_underneath_title
                            ) : (
                                <Skeleton variant="text" width={350} height={50} style={{ background: "#bbbbbb" }} />
                            )}</h5>
                        </div>
                    </div>
                    <div class="inner_page_breadcumb">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="inner_page_breadcumb_main">
                                        <ul>
                                            <li>
                                                <Link to={APIPath()}><i class="fas fa-home"></i>Home</Link>
                                            </li>
                                            <li>
                                                <a href="#">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="head_sec">
                    <header class="desktop_sticky">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="head_main">
                                        <div class="head_cont_left">
                                            <ul>
                                                <li><a href="mailto:support@VirtualTourCafe.com"><i class="far fa-envelope"></i>
                                                    {Object.keys(data).length > 0 ? (
                                                        data.site_email
                                                    ) : (
                                                        <Skeleton variant="text" width={150} height={30} style={{ background: "#bbbbbb" }} />
                                                    )}
                                                </a></li>
                                                <li><a href="tel:(877) 744-8285 or (925) 609-2408"><i class="fas fa-phone-alt"></i>
                                                    {Object.keys(data).length > 0 ? (
                                                        data.phone_number
                                                    ) : (
                                                        <Skeleton variant="text" width={150} height={30} style={{ background: "#bbbbbb" }} />
                                                    )}
                                                </a></li>
                                            </ul>
                                        </div>
                                        <div class="head_cont_right">

                                            {(context.state.isAuthenticated) && (JSON.parse(context.state.user).role == "broker") ? (
                                                <ul>
                                                    {/* <li><Link to={APIPath() + "register"} class="register_btn"><i class="fas fa-edit"></i>Register</Link></li> */}
                                                    <li class="dashboard nav-item nav-profile dropdown dropdown-animate">
                                                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="profileDropdown" aria-expanded="false">
                                                            <div class="user_img">
                                                            <img src={user} alt="profile" />
                                                            </div>
                                                        </a>
                                                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown profile-top" aria-labelledby="profileDropdown" style={{ zIndex: "99" }}>
                                                            <div class="profile-header d-flex align-items-center">
                                                                <div class="thumb-area">
                                                                <img src={user} alt="profile" />
                                                                </div>
                                                                <div class="content-text">
                                                                    <h6>{currentBroker.name}</h6>
                                                                </div>
                                                            </div>
                                                            <Link to={APIPath() + "broker-dashboard"} class="dropdown-item"><i class="fas fa-user profile-icon"></i>Dashboard</Link>
                                                            {/* <a href="#" class="dropdown-item"><i class="fas fa-user-edit profile-icon"></i>Edit profile</a> */}

                                                            <a href={APIPath() + "broker-setting"} class="dropdown-item"><i class="fas fa-cog profile-icon"></i>Settings</a>

                                                            <Link to={APIPath() + "broker-reports"} class="dropdown-item"><i class="fas fa-info-circle profile-icon"></i>Support</Link>

                                                            {/* <a href="#" class="dropdown-item"><i class="fas fa-chart-line profile-icon"></i>Activity</a> */}

                                                            <Link onClick={handleLogout} to={APIPath()} class="dropdown-item"><i class="fas fa-sign-out-alt profile-icon"></i>Sign Out</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            ) : ((context.state.isAuthenticated) && (JSON.parse(context.state.user).role == "agent") ? (
                                                <ul>
                                                    {/* <li><Link to={APIPath() + "register"} class="register_btn"><i class="fas fa-edit"></i>Register</Link></li> */}
                                                    <li class="dashboard nav-item nav-profile dropdown dropdown-animate">
                                                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="profileDropdown" aria-expanded="false">
                                                            <div class="user_img">
                                                                <img src={currentUser && currentUser.profile_img} alt="profile" />
                                                            </div>
                                                        </a>
                                                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown profile-top" aria-labelledby="profileDropdown" style={{ zIndex: "99" }}>
                                                            <div class="profile-header d-flex align-items-center">
                                                                <div class="thumb-area">
                                                                    <img src={currentUser && currentUser.profile_img} alt="profile" />
                                                                </div>
                                                                <div class="content-text">
                                                                    <h6>{currentUser.name}</h6>
                                                                </div>
                                                            </div>
                                                            <Link to={APIPath() + "agent-dashboard"} class="dropdown-item"><i class="fas fa-user profile-icon"></i>Dashboard</Link>
                                                            {/* <a href="#" class="dropdown-item"><i class="fas fa-user-edit profile-icon"></i>Edit profile</a> */}

                                                            <a href={APIPath() + "agent-setting"} class="dropdown-item"><i class="fas fa-cog profile-icon"></i>Settings</a>

                                                            <Link to={APIPath() + "agent-support"} class="dropdown-item"><i class="fas fa-info-circle profile-icon"></i>Support</Link>

                                                            {/* <a href="#" class="dropdown-item"><i class="fas fa-chart-line profile-icon"></i>Activity</a> */}

                                                            <Link onClick={handleLogout} to={APIPath()} class="dropdown-item"><i class="fas fa-sign-out-alt profile-icon"></i>Sign Out</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            ) :
                                                (<ul>
                                                    <li><Link to={APIPath() + "appointment"} class="login_btn"><i class="fal fa-book"></i>BookUs</Link></li>
                                                    <li><Link to={APIPath() + "login"} class="login_btn"><i class="far fa-lock-alt"></i>Login</Link></li>
                                                    <li><Link to={APIPath() + "agent"} class="register_btn"><i class="fas fa-edit"></i>Register</Link></li>
                                                </ul>)

                                            )}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div class="head_menu_sec_new">
                        <div class="container">
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
                                                        <li >
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
                                                        <li>
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
                        </div>
                    </div>
                </div>
            </section>
            <section class="privacy_policy_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="privacy_policy_sec_main">
                                {Object.keys(data).length > 0 ? (
                                    <div
                                        // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                data.banner_underneath_desc
                                        }}
                                    >
                                    </div>
                                ) : (
                                    <div>
                                        <Skeleton variant="text" width={1000} height={100} />
                                        <Skeleton variant="text" width={700} height={50} />
                                        <Skeleton variant="text" width={1000} height={100} />
                                        <Skeleton variant="text" width={700} height={50} />
                                        <Skeleton variant="text" width={1000} height={100} />
                                        <Skeleton variant="text" width={700} height={50} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="ftr_get">
                <Footer1></Footer1>
                <Footer />
            </div>
            <a onClick={handleScroll} id="return-to-top" class="bounce" style={{ display: "block", cursor: "pointer" }}><i class="fas fa-angle-double-up"></i></a>
        </div>
    );
};