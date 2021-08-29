import * as React from "react"

function User(props) {
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#DFE6ED" d="M0 0h100v100H0z" />
      <path
        d="M61.833 63.375v-3.083a6.167 6.167 0 00-6.166-6.167H43.333a6.166 6.166 0 00-6.166 6.167v3.083M49.5 47.958a6.167 6.167 0 100-12.333 6.167 6.167 0 000 12.333z"
        stroke="#9FADBA"
        strokeWidth={3.083}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default User