import { Heading, Subheading } from "@/components/heading";
import InfoBox from "@/components/HomePage/InfoBox";
import { Stat } from "@/components/HomePage/Stats";
import VideoBox from "@/components/HomePage/VideoBox";
import { Select } from "@/components/select";

export default function HomePage() {
  return (
    <>
      <Heading>Good afternoon, Aziz</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Overview</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Last week</option>
            <option value="last_two">Last two weeks</option>
            <option value="last_month">Last month</option>
            <option value="last_quarter">Last quarter</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border rounded-lg p-4 shadow-sm">
        <Stat title="Total revenue" value="$1M" change="+10%" />
        <Stat title="Average order value" value="6.8M" change="+34%" />
        <Stat title="Tickets sold" value="340" change="+26.6%" />
        <Stat title="Pageviews" value="80" change="-18%" />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoBox />
        <VideoBox />
      </div>
    </>
  );
}


