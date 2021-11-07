/** @format */

import { BellIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const Header: React.FunctionComponent = () => {
	const [user] = useAuthState(auth);

	const userSignedOutHandler = (event: React.SyntheticEvent) => {
		// User is signed out(Remove the user from Firebase)
		if (user) {
			auth
				.signOut()
				.then(() => {
					// Sign-out successful.
				})
				.catch((error) => {
					// An error happened.
				});
			// dispatch(setLogOutState());
		}
	};

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
					<p
						onClick={userSignedOutHandler}
						className='link-button bg-[#585656] cursor-pointer font-bold'>
						Sign Out
					</p>
					<div className='relative hidden md:inline-flex'>
						<BellIcon className='h-7 cursor-pointer  text-white' />
					</div>
					<div className='flex'>
						<img
							onClick={userSignedOutHandler}
							className='rounded-full cursor-pointer h-[40px] w-[40px]'
							src={
								user?.photoURL ? user?.photoURL : "/images/tem-img.png"
							}
							alt='Picture of the author'
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
