import React, { useState, useEffect, useContext } from "react";
import { postRecord } from "../../CommonMethods/Save";
import { APIURL, APIPath } from "../../CommonMethods/Fetch";
const APICreateSubscribeFlashVideo = APIURL() + "create-subscribe-flashvideo";

function PaymentPage(props) {
  const [videoDownload, setDownloadVideo] = useState("");
  const orderAndDownload = (e) => {
    e.preventDefault();
    console.log('hii');
    //VideoFlashDownload(flash_data.flash_data);
    var obj = JSON.parse(localStorage.getItem(("order_download_data")));
    postRecord(APICreateSubscribeFlashVideo, obj).then((res) => {
      if (res.data[0].response.status === "success") {
        console.log(res.data[0].response);
        setDownloadVideo(res.data[0].response.data.file);
        localStorage.setItem("file_link", res.data[0].response.data.file);
      }
    });
  };

  return (
    <div>
      <form  onSubmit={(e)=>orderAndDownload(e)}>
        Card Number:
        <input type="text" />
        Cvv :<input type="text" />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default PaymentPage;
