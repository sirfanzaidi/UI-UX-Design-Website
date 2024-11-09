import Image from "next/image";

// import Facbook from '../../public/image/Facebook.svg'
// import Twitter from '../../public/image/X.svg'
// import Feed from '../../public/image/Feed.svg'

export function Footer(){
    return(
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]">
            <Image src="/Image/Logo.svg" alt="Logo" width={50} height={50} />
                <p className="font-bold text-[#36485C] text-[17px]">Irfan Zaidi</p>
            </div>
            <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5 ">
                <li>Features</li>
                <li>Pricing </li>
                <li>Enterprise</li>
                <li>Careers</li>
                </ul>
                <p className="pt-[56px] text-center text-[14px] font-medium sm:pt-5">© Copyright 2024. Your Site. All rights reserved.</p>
            <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
            <Image src="/Image/Facebook.svg" alt="facebook Logo" width={20} height={20} />
            <Image src="/Image/Feed.svg" alt="Feed" width={20} height={20} />
            <Image src="/Image/X.svg" alt="Twitter" width={20} height={20} />
               
            </div>

        </div>
    )
}