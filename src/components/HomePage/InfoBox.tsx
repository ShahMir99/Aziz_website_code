import React from "react";
import ActionItem from "@/components/HomePage/ActionItem";
import { Clipboard, Chrome, Mail, Cable } from "lucide-react";

const InfoBox = () => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-start gap-3">
        <Clipboard className="w-4 h-4 text-neutral-500" />
        <h1 className="capitalize text-base font-semibold text-neutral-600">
          Getting started
        </h1>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <ActionItem
          title="CHROME EXTENSION"
          description="The chrome extension is required for the compaigns to work correctly"
          btnText="Install"
          Icon={Chrome}
          href="#"
        />
        <ActionItem
          title="CONNECT EMAIL"
          description="Authorize sending email from account in use"
          btnText="Connect"
          Icon={Mail}
          href="#"
        />
        <ActionItem
          title="CREATE YOUR FIRST COMPAIGN"
          description="Start sending hyper-personalized messages"
          btnText="Create"
          Icon={Cable}
          href="#"
        />
      </div>
    </div>
  );
};

export default InfoBox;
