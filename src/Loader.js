import ContentLoader from "react-content-loader";
import React from "react";
export default function Loader() {
  return (
    <ContentLoader
      height={91}
      width={571}
      speed={4}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="73" y="24" rx="4" ry="4" width="422" height="15" />
      <rect x="73" y="54" rx="3" ry="3" width="307" height="13" />
      <circle cx="36" cy="49" r="24" />
      <circle cx="539" cy="45" r="24" />
    </ContentLoader>
  );
}
