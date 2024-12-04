import React from "react";
import {
  SparklesIcon,
} from '@heroicons/react/20/solid'

const VideoBox = () => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
    <div className="flex items-center justify-start gap-3">
      <SparklesIcon className="w-5 h-5 text-neutral-500" />
      <h1 className="capitalize text-base font-semibold text-neutral-600">
        DISCOVER THE FUTURE OF PROSPECTING
      </h1>
    </div>
    <div className="mt-2 relative w-full h-[300px] overflow-hidden rounded-lg">
      <iframe
        className="absolute inset-0  w-full h-full"
        src="https://www.youtube.com/embed/43xmaSJbEVs"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  
  );
};

export default VideoBox;
