import Image from "next/image"

import User from '../../public/Image/User.svg'
import Menu from '../../public/Image/Menu.svg'

const navLinks = [
    {name:  'Features'},
    {name:  'Pricing'},
    {name:  'Enterprise'},
    {name:  'Careers'},
]

export function Navbar(){
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg: container lg:mx-auto">
            <div className="flex items-center">
            <Image src="/Image/Logo.svg" alt="Logo" width={50} height={50} />
            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((item, index) => (
                        <p className="text-[#36485c] font-medium" key={index}>
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>
            
            <div className='flex gap-x-5'>
                    <p className="hidden lg:block font-medium text-[#36485c] pr-[56px]">Open an Account</p>

                <div className="flex items-center gap-x-2">
                <Image src={User} alt="usre Profile"/>
                <span className="hidden font-medium text-[#36485c] lg:block">Sign in</span>
                </div>
            <Image src={Menu} alt="Menu Button" className="lg:hidden"/>
            </div>
            </nav>
           )
}