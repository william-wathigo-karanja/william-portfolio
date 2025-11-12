import React from "react";

export default function SectionDivider({ flip }) {
  return (
    <div
      style={{
        overflow: "hidden",
        lineHeight: 0,
        background: "transparent",
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "60px",
          transform: flip ? "rotate(180deg)" : "none",
        }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.57-16.38,168.76-17.16,250.32.39,57.36,12.08,113.5,31.29,170.53,41.86,82.43,15.24,168.82,8.35,250.76-11.16V0H0V27.35C91.21,47.86,211.12,67.22,321.39,56.44Z"
          opacity=".25"
          fill="#e0e6f3"
        ></path>
        <path
          d="M1200 0L0 0 0 46.29C146.32 85.31 291.12 86.56 435.85 66.79 575.58 47.85 714.43 11.49 853.87 9.9 990.64 8.33 1128.33 41.07 1200 66.6V0z"
          opacity=".5"
          fill="#f0f3f9"
        ></path>
        <path
          d="M0,0V15.81C52.4,36.38,104.87,55.65,163,65.14,268,82.4,381.93,72.09,488,49.22,603.89,24,713.51-8.21,829.8,2.88c87.93,8.73,172.5,35.38,260.2,41.78,36.57,2.62,73.37,1.09,109.9-2.79V0Z"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
  );
}
