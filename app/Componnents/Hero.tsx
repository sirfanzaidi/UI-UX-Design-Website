import Image from "next/image";
import BlueArrow from "../../public/Image/blue-button.svg";
import Gradient from "../../public/Image/Gradient.svg";
import HeroImage from "../../public/Image/Image.svg";
import Google from "../../public/Image/Google.svg";
import Slack from "../../public/Image/Slack.svg";
import Truspiolot from "../../public/Image/Trustpilot.svg";
import Cnn from "../../public/Image/CNN.svg";
import Clutch from "../../public/Image/Clutch.svg";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-4 text-[#36485C] text-[18px] lg:text-[18px] lg:leading-7">
          Get a birds eye view with our cutomizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boots
          productivity and efficiency!
        </p>
        <div className="flex w-full mt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className=" w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing{" "}
            <span>
              <Image src={BlueArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
              <Image src={Truspiolot} alt="" />
              <Image src={Cnn} alt="" />
              <Image src={Clutch} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
