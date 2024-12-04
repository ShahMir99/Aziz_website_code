import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

interface Props {
  title: string;
  desc: string;
  buttonText: string;
}

const GoogleAuthButton: React.FC<Props> = ({ title, desc, buttonText }) => {
  return (
    <div className="pt-10 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-lightDark font-medium">{desc}</p>
      </div>
      <Link to="">
        <button className="w-full border border-gray-300 shadow-sm p-[9px] rounded-lg flex items-center justify-center">
          <div className="flex items-center gap-2">
            <FcGoogle className="w-5 h-5 shrink-0" />
            <p className="text-[13px] font-medium">{buttonText}</p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default GoogleAuthButton;
