import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <section className="w-full h-full md:grid md:grid-cols-2 overflow-hidden">
        <div className="overflow-y-auto">
          <Outlet />
        </div>
        <div
          style={{ backgroundImage: "url(/images/auth/bg-points.svg)" }}
          className="hidden md:block bg-primary rounded-tl-xl rounded-bl-xl p-[4.5rem] bg-contain bg-no-repeat bg-right"
        >
          <div className="flex  flex-col gap-8">
            <h1 className="text-xl text-white font-bold text-left">
              Join Humanlinker
            </h1>
            <div className="relative">
              <div className="h-[500px] w-[550px] absolute top-0 left-10 bg-contain">
                <img src="/images/auth/app.png" alt="app_image" className="w-[100%] h-[100%]"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
