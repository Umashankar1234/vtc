import React, { useEffect, useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import RGL, { WidthProvider } from "react-grid-layout";
import { Switch } from "@material-ui/core";
import { postRecord } from "../CommonMethods/Save";
import { APIURL } from "../CommonMethods/Fetch";
import up_img from "../images/up.png";
import middle_img from "../images/middle.png";
import bottom_img from "../images/bottom.png";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const ReactGridLayout = WidthProvider(RGL);
const APIGetEditTourList = APIURL() + "tour-list";

function DragAndDrop() {
  const [dragImages, setDragImages] = useState([]);
  useEffect(() => {
    const obj = {
      authenticate_key: "abcd123XYZ",
      agentId: 8485,
      tourid: "81699",
    };
    postRecord(APIGetEditTourList, obj).then((res) => {
      if (res.data[0].response.status === "success") {
        setDragImages(res.data[0].response.dataDetails.dataProvider);
      }
    });
  }, []);
  const singleImage = (res, index) => {
    return (
      <div class="col-lg-4 col-md-4" style={{ cursor: "grab" }}>
        <div id={"myDiv" + res.id} class="select_img_set_box new_edit_tour_sec">
          <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id={"nav-home" + res.id}
              role="tabpanel"
              aria-labelledby={"nav-home-tab" + res.id}
            >
              <div class="row">
                <div class="col-lg-12 col-md-12 mb-3">
                  <div class="select_img_set_box_img">
                    <img draggable="false" src={res.imageurl} alt="" />
                    {res.image_type === "panoramas" ? (
                      <img
                        src={res.flag_img}
                        style={{
                          width: "80px",
                          right: "5px",
                          top: "5px",
                          border: "none",
                          boxShadow: "none",
                        }}
                        alt=""
                        draggable="false"
                      />
                    ) : (
                      <i
                        class="far fa-edit new_edit_btn"
                        style={{ top: "20px" }}
                      ></i>
                    )}
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="select_img_set_box_cont">
                    <input
                      type="text"
                      onEnter
                      tabIndex={index + 1}
                      value={res.caption}
                      placeholder={res.caption}
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-9 formbox1" style={{ marginTop: "10px" }}>
                  <label style={{ marginRight: "35px" }}>
                    Use this Image on tour ?
                    <span style={{ color: "#ffa12d" }}></span>
                  </label>
                </div>
                <div class="col-md-3 formbox1" style={{ marginTop: "7px" }}>
                  <Switch
                    checked={res.enableontour}
                    handleDiameter={28}
                    offColor="#5D5D5D"
                    onColor="#F6AD17"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={35}
                    width={60}
                    borderRadius={6}
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "white",
                          paddingRight: 2,
                        }}
                      >
                        No
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "white",
                          paddingRight: 2,
                        }}
                      >
                        Yes
                      </div>
                    }
                    className="react-switch"
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id={"nav-profile" + res.id}
              role="tabpanel"
              aria-labelledby={"nav-profile-tab" + res.id}
            >
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="select_img_set_box_img">
                    <img src={res.imageurl} alt="" />
                    <i class="far fa-edit edit-btn"></i>
                  </div>
                </div>
                <div class="col-lg-8 col-md-8">
                  <div class="caption_setting">
                    <h6>Caption Setting</h6>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="socila_status_single cap_set">
                        <label>Font</label>
                        <select value={res.tourfontstyle}>
                          <option
                            value={"Georgia"}
                            selected={
                              res.tourfontstyle == "Georgia" ? true : ""
                            }
                          >
                            Georgia
                          </option>
                          <option
                            value={"Arial"}
                            selected={res.tourfontstyle == "Arial" ? true : ""}
                          >
                            Arial
                          </option>
                          <option
                            value={"Times New Roman"}
                            selected={
                              res.tourfontstyle == "Times New Roman" ? true : ""
                            }
                          >
                            Times New Roman
                          </option>
                          <option
                            value={"Verdana"}
                            selected={
                              res.tourfontstyle == "Verdana" ? true : ""
                            }
                          >
                            Verdana
                          </option>
                          <option
                            value={"Tahoma"}
                            selected={res.tourfontstyle == "Tahoma" ? true : ""}
                          >
                            Tahoma
                          </option>
                        </select>
                      </div>
                      <div class="socila_status_single cap_set">
                        <label>Size</label>
                        <select value={res.tourfontsize}>
                          <option value="22" selected="selected">
                            22
                          </option>
                          <option value="24" selected="selected">
                            24
                          </option>
                          <option value="26" selected="selected">
                            26
                          </option>
                          <option value="28" selected="selected">
                            28
                          </option>
                          <option value="30" selected="selected">
                            30
                          </option>
                          <option value="32" selected="selected">
                            32
                          </option>
                          <option value="34" selected="selected">
                            34
                          </option>
                          <option value="36" selected="selected">
                            36
                          </option>
                        </select>
                      </div>
                      <div class="socila_status_single cap_set">
                        <label>Color</label>
                        <select value={res.tourfontcolor}>
                          <option>Red</option>
                          <option>green</option>
                          <option>blue</option>
                          <option>yellow</option>
                          <option>cyan</option>
                          <option>pink</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="caption_loc">
                    <div class="caption_setting">
                      <h6>Caption Location</h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="pre_tour_single">
                    <input
                      style={{ display: "none" }}
                      class="radio"
                      type="radio"
                      name={"caption" + res.id}
                      value="top"
                      id={"a" + res.id}
                      checked={res.tourfontlocation === "top" ? true : false}
                    />
                    <label id="lbl" for={"a" + res.id}>
                      <img src={up_img} />
                    </label>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="pre_tour_single">
                    <input
                      class="radio"
                      type="radio"
                      name={"caption" + res.id}
                      value="center"
                      id={"b" + res.id}
                      checked={res.tourfontlocation === "center" ? true : false}
                    />
                    <label id="lbl" for={"b" + res.id}>
                      <img src={middle_img} />
                    </label>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2">
                  <div class="pre_tour_single">
                    <input
                      class="radio"
                      type="radio"
                      name={"caption" + res.id}
                      value="bottom"
                      id={"c" + res.id}
                      checked={res.tourfontlocation === "bottom" ? true : false}
                    />
                    <label id="lbl" for={"c" + res.id}>
                      <img src={bottom_img} />
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <button className="next_btn_apply_changes">
                    Apply to all images
                  </button>
                </div>
              </div>
            </div>
            {/* <div
                          class="tab-pane fade"
                          id={"nav-contact" + res.id}
                          role="tabpanel"
                          aria-labelledby={"nav-contact-tab" + res.id}
                        >
                          <div class="row">
                            <div class="col-lg-4 col-md-4">
                              <div class="select_img_set_box_img">
                                <img src={res.imageurl} alt="" />
                                <i class="far fa-edit edit-btn"></i>
                              </div>
                            </div>
                            <div class="col-lg-8 col-md-8">
                              <div class="caption_loc">
                                <div class="caption_setting">
                                  <h6>
                                    Use Ken Burns Effects on This Image:{" "}
                                  </h6>
                                  <Switch
                                    onChange={(event) => {
                                      handleKenburnTourChange(event, res.id);
                                    }}
                                    checked={res.enablekenburns}
                                    handleDiameter={28}
                                    offColor="#5D5D5D"
                                    onColor="#F6AD17"
                                    offHandleColor="#fff"
                                    onHandleColor="#fff"
                                    height={35}
                                    width={60}
                                    borderRadius={6}
                                    uncheckedIcon={
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          height: "100%",
                                          fontSize: 15,
                                          color: "white",
                                          paddingRight: 2,
                                        }}
                                      >
                                        No
                                      </div>
                                    }
                                    checkedIcon={
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          height: "100%",
                                          fontSize: 15,
                                          color: "white",
                                          paddingRight: 2,
                                        }}
                                      >
                                        Yes
                                      </div>
                                    }
                                    className="react-switch"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr class="brdr" />
                        </div> */}
          </div>
          <div class="nav_tab_sec">
            <nav>
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a
                  class="nav-item active first"
                  id={"nav-home-tab" + res.id}
                  data-toggle="tab"
                  href={"#nav-home" + res.id}
                  role="tab"
                  aria-controls={"#nav-home" + res.id}
                  aria-selected="true"
                >
                  <i class="far fa-dot-circle"></i>
                </a>
                <a
                  class="nav-item middle"
                  id={"nav-profile-tab" + res.id}
                  data-toggle="tab"
                  href={"#nav-profile" + res.id}
                  role="tab"
                  aria-controls={"nav-profile" + res.id}
                  aria-selected="false"
                >
                  <i class="far fa-dot-circle"></i>
                </a>
                {/* <a
                              class="nav-item last"
                              id={"nav-contact-tab" + res.id}
                              data-toggle="tab"
                              href={"#nav-contact" + res.id}
                              role="tab"
                              aria-controls={"nav-contact" + res.id}
                              aria-selected="false"
                            >
                              <i class="far fa-dot-circle"></i>
                            </a> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  };
  const SortablePhoto = SortableElement(({ res, index }) => (
    <div class="col-lg-4 col-md-4" style={{ cursor: "grab" }}>
      <div id={"myDiv" + res.id} class="select_img_set_box new_edit_tour_sec">
        <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id={"nav-home" + res.id}
            role="tabpanel"
            aria-labelledby={"nav-home-tab" + res.id}
          >
            <div class="row">
              <div class="col-lg-12 col-md-12 mb-3">
                <div class="select_img_set_box_img">
                  <img draggable="false" src={res.imageurl} alt="" />
                  {res.image_type === "panoramas" ? (
                    <img
                      src={res.flag_img}
                      style={{
                        width: "80px",
                        right: "5px",
                        top: "5px",
                        border: "none",
                        boxShadow: "none",
                      }}
                      alt=""
                      draggable="false"
                    />
                  ) : (
                    <i
                      class="far fa-edit new_edit_btn"
                      style={{ top: "20px" }}
                    ></i>
                  )}
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="select_img_set_box_cont">
                  <input
                    type="text"
                    onEnter
                    tabIndex={index + 1}
                    value={res.caption}
                    placeholder={res.caption}
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-9 formbox1" style={{ marginTop: "10px" }}>
                <label style={{ marginRight: "35px" }}>
                  Use this Image on tour ?
                  <span style={{ color: "#ffa12d" }}></span>
                </label>
              </div>
              <div class="col-md-3 formbox1" style={{ marginTop: "7px" }}>
                <Switch
                  checked={res.enableontour}
                  handleDiameter={28}
                  offColor="#5D5D5D"
                  onColor="#F6AD17"
                  offHandleColor="#fff"
                  onHandleColor="#fff"
                  height={35}
                  width={60}
                  borderRadius={6}
                  uncheckedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                        color: "white",
                        paddingRight: 2,
                      }}
                    >
                      No
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                        color: "white",
                        paddingRight: 2,
                      }}
                    >
                      Yes
                    </div>
                  }
                  className="react-switch"
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id={"nav-profile" + res.id}
            role="tabpanel"
            aria-labelledby={"nav-profile-tab" + res.id}
          >
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="select_img_set_box_img">
                  <img src={res.imageurl} alt="" />
                  <i class="far fa-edit edit-btn"></i>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <div class="caption_setting">
                  <h6>Caption Setting</h6>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="socila_status_single cap_set">
                      <label>Font</label>
                      <select value={res.tourfontstyle}>
                        <option
                          value={"Georgia"}
                          selected={res.tourfontstyle == "Georgia" ? true : ""}
                        >
                          Georgia
                        </option>
                        <option
                          value={"Arial"}
                          selected={res.tourfontstyle == "Arial" ? true : ""}
                        >
                          Arial
                        </option>
                        <option
                          value={"Times New Roman"}
                          selected={
                            res.tourfontstyle == "Times New Roman" ? true : ""
                          }
                        >
                          Times New Roman
                        </option>
                        <option
                          value={"Verdana"}
                          selected={res.tourfontstyle == "Verdana" ? true : ""}
                        >
                          Verdana
                        </option>
                        <option
                          value={"Tahoma"}
                          selected={res.tourfontstyle == "Tahoma" ? true : ""}
                        >
                          Tahoma
                        </option>
                      </select>
                    </div>
                    <div class="socila_status_single cap_set">
                      <label>Size</label>
                      <select value={res.tourfontsize}>
                        <option value="22" selected="selected">
                          22
                        </option>
                        <option value="24" selected="selected">
                          24
                        </option>
                        <option value="26" selected="selected">
                          26
                        </option>
                        <option value="28" selected="selected">
                          28
                        </option>
                        <option value="30" selected="selected">
                          30
                        </option>
                        <option value="32" selected="selected">
                          32
                        </option>
                        <option value="34" selected="selected">
                          34
                        </option>
                        <option value="36" selected="selected">
                          36
                        </option>
                      </select>
                    </div>
                    <div class="socila_status_single cap_set">
                      <label>Color</label>
                      <select value={res.tourfontcolor}>
                        <option>Red</option>
                        <option>green</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>cyan</option>
                        <option>pink</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="caption_loc">
                  <div class="caption_setting">
                    <h6>Caption Location</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-2">
                <div class="pre_tour_single">
                  <input
                    style={{ display: "none" }}
                    class="radio"
                    type="radio"
                    name={"caption" + res.id}
                    value="top"
                    id={"a" + res.id}
                    checked={res.tourfontlocation === "top" ? true : false}
                  />
                  <label id="lbl" for={"a" + res.id}>
                    <img src={up_img} />
                  </label>
                </div>
              </div>
              <div class="col-lg-2 col-md-2">
                <div class="pre_tour_single">
                  <input
                    class="radio"
                    type="radio"
                    name={"caption" + res.id}
                    value="center"
                    id={"b" + res.id}
                    checked={res.tourfontlocation === "center" ? true : false}
                  />
                  <label id="lbl" for={"b" + res.id}>
                    <img src={middle_img} />
                  </label>
                </div>
              </div>
              <div class="col-lg-2 col-md-2">
                <div class="pre_tour_single">
                  <input
                    class="radio"
                    type="radio"
                    name={"caption" + res.id}
                    value="bottom"
                    id={"c" + res.id}
                    checked={res.tourfontlocation === "bottom" ? true : false}
                  />
                  <label id="lbl" for={"c" + res.id}>
                    <img src={bottom_img} />
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <button className="next_btn_apply_changes">
                  Apply to all images
                </button>
              </div>
            </div>
          </div>
          {/* <div
                      class="tab-pane fade"
                      id={"nav-contact" + res.id}
                      role="tabpanel"
                      aria-labelledby={"nav-contact-tab" + res.id}
                    >
                      <div class="row">
                        <div class="col-lg-4 col-md-4">
                          <div class="select_img_set_box_img">
                            <img src={res.imageurl} alt="" />
                            <i class="far fa-edit edit-btn"></i>
                          </div>
                        </div>
                        <div class="col-lg-8 col-md-8">
                          <div class="caption_loc">
                            <div class="caption_setting">
                              <h6>
                                Use Ken Burns Effects on This Image:{" "}
                              </h6>
                              <Switch
                                onChange={(event) => {
                                  handleKenburnTourChange(event, res.id);
                                }}
                                checked={res.enablekenburns}
                                handleDiameter={28}
                                offColor="#5D5D5D"
                                onColor="#F6AD17"
                                offHandleColor="#fff"
                                onHandleColor="#fff"
                                height={35}
                                width={60}
                                borderRadius={6}
                                uncheckedIcon={
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 15,
                                      color: "white",
                                      paddingRight: 2,
                                    }}
                                  >
                                    No
                                  </div>
                                }
                                checkedIcon={
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                      fontSize: 15,
                                      color: "white",
                                      paddingRight: 2,
                                    }}
                                  >
                                    Yes
                                  </div>
                                }
                                className="react-switch"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="brdr" />
                    </div> */}
        </div>
        <div class="nav_tab_sec">
          <nav>
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                class="nav-item active first"
                id={"nav-home-tab" + res.id}
                data-toggle="tab"
                href={"#nav-home" + res.id}
                role="tab"
                aria-controls={"#nav-home" + res.id}
                aria-selected="true"
              >
                <i class="far fa-dot-circle"></i>
              </a>
              <a
                class="nav-item middle"
                id={"nav-profile-tab" + res.id}
                data-toggle="tab"
                href={"#nav-profile" + res.id}
                role="tab"
                aria-controls={"nav-profile" + res.id}
                aria-selected="false"
              >
                <i class="far fa-dot-circle"></i>
              </a>
              {/* <a
                          class="nav-item last"
                          id={"nav-contact-tab" + res.id}
                          data-toggle="tab"
                          href={"#nav-contact" + res.id}
                          role="tab"
                          aria-controls={"nav-contact" + res.id}
                          aria-selected="false"
                        >
                          <i class="far fa-dot-circle"></i>
                        </a> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  ));
  const SortableGallery = SortableContainer(({ items }) => (
    <div className="row">
      {items.map((value, index) => (
        <SortablePhoto key={`item-${index}`} index={index} res={value} />
      ))}
    </div>
  ));
  const SortableItem = SortableElement(({ value }) => (
    <img width={"200px"} src={value.imageurl} />
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </ul>
    );
  });
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setDragImages(arrayMove(dragImages, oldIndex, newIndex));
  };
  return (
    <>
      <h1>hello</h1>
      <SortableGallery axis={"xy"} items={dragImages} onSortEnd={onSortEnd} />;
    </>
  );
}

export default DragAndDrop;
