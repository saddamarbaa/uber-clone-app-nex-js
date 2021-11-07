/** @format */

import { BellIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FunctionComponent = () => {
	return (
		<header className='sticky top-0 z-50 bg-black  min-h-[74px]   border-b-2 border-gray-200 shadow-md '>
			<div className=' max-w-[1300px] mx-auto flex items-center justify-between px-4 '>
				<div className='flex  items-center space-x-4'>
					<div className='flex  w-[8rem] relative lg-flex items-center h-[4rem] cursor-pointer my-auto'>
						<Link href='/'>
							<Image
								src='/images/uber-dark.svg'
								alt='Uber Logo'
								layout='fill'
								objectFit='contain'
							/>
						</Link>
					</div>
					<p className='link-button'>Safty</p>
					<p className='link-button'>Help</p>
					<p className='link-button'>COVID-19 resources</p>
				</div>

				<div className='flex items-center space-x-6'>
					<div className='relative hidden md:inline-flex'>
						<BellIcon className='h-7 cursor-pointer  text-white' />
					</div>
					<div className='flex'>
						<img
							className='rounded-full cursor-pointer h-[40px] w-[40px]'
							src={"/images/saddam2.jpg"}
							alt='Picture of the author'
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
