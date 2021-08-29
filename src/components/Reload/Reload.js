import * as React from "react"

function Reload(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={512}
      height={512}
      {...props}
    >
      <path
        fill="none"
        stroke="#3F4E5A"
        strokeMiterlimit={10}
        d="M5.5 2.303a6 6 0 103-.803H8"
      />
      <path d="M6 4.536V1H2.464z" fill="#3F4E5A" stroke="#3F4E5A" />
    </svg>
  )
}

export default Reload
