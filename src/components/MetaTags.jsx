import React, { useEffect } from "react";
import { MetaInfo } from "../CommonMethods/MetaTagsContext";

function MetaTags() {
  const metaCtx = MetaInfo();
  useEffect(() => {
    // document.pageTitle = `${pageTitle} | Pop Telecom`;
    document
      .querySelector('meta[name="title"]')
      .setAttribute("content", metaCtx.metaTitle ? metaCtx.metaTitle : "");
    // document
    //   .querySelector('meta[name="description"]')
    //   .setAttribute("content", metaDesc ? metaDesc : "");
    // document
    //   .querySelector('meta[name="keywords"]')
    //   .setAttribute("content", metaKeyWords ? metaKeyWords : "");
    // if (document.querySelector('meta[name="twitter:card"]')) {
    //   document
    //     .querySelector('meta[name="twitter:card"]')
    //     .setAttribute("content", twitterCard ? twitterCard : "");
    // } else {
    //   var meta = document.createElement("meta");
    //   meta.name = "twitter:card";
    //   meta.content = twitterCard;
    //   document.getElementsByTagName("head")[0].append(meta);
    // }
    // if (document.querySelector('meta[name="twitter:title"]')) {
    //   document
    //     .querySelector('meta[name="twitter:title"]')
    //     .setAttribute("content", twitterTitle ? twitterTitle : "");
    // } else {
    //   var meta = document.createElement("meta");
    //   meta.name = "twitter:title";
    //   meta.content = twitterTitle;
    //   document.getElementsByTagName("head")[0].append(meta);
    // }
    // if (document.querySelector('meta[name="twitter:description"]')) {
    //   document
    //     .querySelector('meta[name="twitter:description"]')
    //     .setAttribute("content", twitterDesc ? twitterDesc : "");
    // } else {
    //   var meta = document.createElement("meta");
    //   meta.name = "twitter:description";
    //   meta.content = twitterDesc;
    //   document.getElementsByTagName("head")[0].append(meta);
    // }
    // if (document.querySelector('meta[name="twitter:site"]')) {
    //   document
    //     .querySelector('meta[name="twitter:site"]')
    //     .setAttribute("content", twitterSite ? twitterSite : "");
    // } else {
    //   var meta = document.createElement("meta");
    //   meta.name = "twitter:site";
    //   meta.content = twitterSite;
    //   document.getElementsByTagName("head")[0].append(meta);
    // }
    // if (document.querySelector('meta[property="og:title"]')) {
    //   document
    //     .querySelector('meta[property="og:title"]')
    //     .setAttribute("content", ogTitle ? ogTitle : "");
    // } else {
    //   setOpenGraphMetadata("og:title", ogTitle);
    // }
    // if (document.querySelector('meta[property="og:description"]')) {
    //   document
    //     .querySelector('meta[property="og:description"]')
    //     .setAttribute("content", ogDesc ? ogDesc : "");
    // } else {
    //   setOpenGraphMetadata("og:description", ogDesc);
    // }
    // if (document.querySelector('meta[property="og:site_name"]')) {
    //   document
    //     .querySelector('meta[property="og:site_name"]')
    //     .setAttribute("content", ogSiteName ? ogSiteName : "");
    // } else {
    //   setOpenGraphMetadata("og:site_name", ogSiteName);
    // }
  }, []);
  return <></>;
}

export default MetaTags;
