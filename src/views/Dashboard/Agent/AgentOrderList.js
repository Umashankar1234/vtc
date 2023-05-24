import React, { useState, useEffect, useContext } from "react";
import $ from "jquery";
import ReactPaginate from "react-paginate";
import { Link, useHistory } from "react-router-dom";
import banner from "../../../images/vtc-banner.jpg";
import Footer from "../../../components/Footer/AgentFooter";
import AgentHeader from "../Header/AgentHeader";
import { AuthContext } from "../../../CommonMethods/Authentication";
import { APIURL, APIPath } from "../../../CommonMethods/Fetch";
import { postRecord } from "../../../CommonMethods/Save";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import Title from "../../../CommonMethods/Title";
import AgentDashBoardHeader from "./AgentDashBoardHeader";
const APIGetUserData = APIURL() + "user-details";
const APIGetOrderList = APIURL() + "orders-list";
export default function AgentOrderList(props) {
  let history = useHistory();
  const context = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});
  const [allOrders, setAllOrders] = useState([]);
  const [postPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [allData, setAllData] = useState([]);
  const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 9999,
        color: '#fff',
    },
}));
  useEffect(() => {
    $(".gee_cross").hide();
    $(".gee_menu").hide();
  }, []);
  const ShowMenu = () => {
    $(".gee_menu").slideToggle("slow", function () {
      $(".gee_hamburger").hide();
      $(".gee_cross").show();
    });
  };
  const HideMenu = () => {
    $(".gee_menu").slideToggle("slow", function () {
      $(".gee_cross").hide();
      $(".gee_hamburger").show();
    });
  };
  useEffect(() => {
    if (context.state.user) {
      const objusr = {
        authenticate_key: "abcd123XYZ",
        agent_id: JSON.parse(context.state.user).agentId,
      };
      console.log("started");
      setOpen(true);
      postRecord(APIGetUserData, objusr).then((res) => {
        setOpen(false);
        if (res.data[0].response.status === "success") {
          console.log("ended");

          setCurrentUser(res.data[0].response.data.agent_profile);
        }
      });
    }
  }, [context.state.user]);
  useEffect(() => {
    if (context.state.user) {
      const objusr = {
        authenticate_key: "abcd123XYZ",
        agent_id: JSON.parse(context.state.user).agentId,
      };
      postRecord(APIGetOrderList, objusr).then((res) => {
        if (res.data[0].response.status === "success") {
          setAllOrders(res.data[0].response.data);
        }
      });
    }
  }, [context.state.user]);
  const handleDetails = (id) => {
    history.push(APIPath() + "order-details/" + id);
  };
  useEffect(() => {
    if (allOrders.length > 0) {
      filterData();
    }
  }, [offset, allOrders]);
  const filterData = async () => {
    const endOffset = offset + postPerPage;
    setAllData(allOrders.slice(offset, endOffset));
    setPageCount(Math.ceil(allOrders.length / postPerPage));
    // const slice = imagesetList.slice(offset - 1, offset - 1 + 6);
    // setTotalData(slice);
    // setAllData(slice);
    // setPageCount(Math.ceil(imagesetList.length / postPerPage));
  };
  const handlePageClick = (event) => {
    // setOffset(selectedPage + 6);
    const newOffset = (event.selected * postPerPage) % allOrders.length;
    setOffset(newOffset);
  };
  const [open, setOpen] = useState(false);
  const classes = useStyles();


  return (
    <div>
    <Title title="Agent Order List"/>
      <AgentHeader path={props.location.pathname} />
      <section
        class="vtc_agent_banner"
        style={{ backgroundImage: "url(" + banner + ")" }}
      >
        <div class="vtc_top_menu">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12">
              <AgentDashBoardHeader ShowMenu={ShowMenu} HideMenu={HideMenu} />

                <div class="gee_menu">
                  <ul>
                    <li class="">
                      <Link to={APIPath() + "agent-dashboard"}>My Cafe</Link>
                    </li>
                   
                    <li>
                      <Link to={APIPath() + "agent-tour-list"}>Tours</Link>
                    </li>
                    <li class="">
                      <Link to={APIPath() + "agent-flyer"}>Flyers</Link>
                    </li>
                    <li>
                      <Link to={APIPath() + "agent-video-list"}>Videos</Link>
                    </li>
                    <li>
                      <Link to={APIPath() + "agent-setting"}>Settings</Link>
                    </li>
                    <li>
                      <Link to={APIPath() + "agent-preferred-vendor"}>
                        Preferred Vendors
                      </Link>
                    </li>
                    <li>
                      <a href="https://www.xpressdocs.com/next/index.php?uuid=458143677bda0010f37b603828f3b783">
                        Xpressdocs
                      </a>
                    </li>
                    <li>
                      <Link to={APIPath() + "agent-support"}>Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-title">
          <h2>Order List</h2>
        </div>
      </section>
      <section class="vtc_agent_profile">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 mx-auto">
              <div class="vtc_agent_profile_main">
                <table class="table table-bordered">
                  <thead class="thead-light">
                    <tr>
                      <th style={{ textAlign: "center" }}>Order No</th>
                      <th style={{ textAlign: "center" }}>Transaction Id</th>
                      <th style={{ textAlign: "center" }}>Reference Id</th>
                      <th style={{ textAlign: "center" }}>Payment Status</th>
                      <th style={{ textAlign: "center" }}>Amount</th>
                      <th style={{ textAlign: "center" }}>Payment Date</th>
                      <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allData.length > 0 ? (
                      allData.map((res) => (
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            {res.order_no}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {res.transaction_id}
                          </td>
                          <td style={{ textAlign: "center" }}>{res.refid}</td>
                          <td style={{ textAlign: "center" }}>
                            {res.payment_status}
                          </td>
                          <td style={{ textAlign: "center" }}>{res.amount}</td>
                          <td style={{ textAlign: "center" }}>
                            {res.payment_date}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <a
                              style={{ marginRight: "20px" }}
                              onClick={() => handleDetails(res.id)}
                              class="btn btn-warning"
                              title="View Details"
                            >
                              View Details
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">No Orders Found ..</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ReactPaginate
            previousLabel={"«"}
            nextLabel={"»"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={3}
            ageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      </section>
      <Footer />
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
