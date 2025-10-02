import React from "react";

export default function LinkedInProfile({ imageUrl, size = 100 }) {
  return (
    <div className="rounded-full overflow-hidden shadow-lg" style={{ width: size, height: size }}>
      <img
        src={imageUrl}
        alt="LinkedIn Profile"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
