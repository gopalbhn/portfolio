import React from "react";

export default function LinkedIn({
  size = 48,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      role="img"
      aria-label="LinkedIn"
    >
      <title>LinkedIn</title>
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.98V9.23h2.95v9.51ZM6.46 7.93a1.71 1.71 0 1 1 .02-3.42 1.71 1.71 0 0 1-.02 3.42Zm12.28 10.81h-2.94v-4.63c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.71H9.53V9.23h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.98 0 3.57 1.96 3.57 4.5v5.24Z" />
    </svg>
  );
}