import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ActionItem = ({ title, description, btnText, Icon, href }: any) => {
  return (
    <div className="border p-3 rounded-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-400/50 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h1 className="text-xs font-bold text-neutral-600">{title}</h1>
          <p className="text-xs text-neutral-500 font-semibold">
            {description}
          </p>
        </div>
        <Link to={href}>
          <Button size="sm" className="px-5 py-3 bg-blue-600 hover:bg-blue-600">
            {btnText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ActionItem;
