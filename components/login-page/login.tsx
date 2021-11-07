/** @format */

import React from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { auth, provider } from "../../config/firebase";

const LogInComponent: React.FunctionComponent = () => {
	const router = useRouter();

	const signInWithGoogleHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				router.push("/");
			})
			.catch((error) => {
				// An error happened.
				// console.log(error);
			});
	};

	return (
		<Wrapper>
			<Container>
				<UberLogo src='/images/uber-gra-logo.jpg' alt='Uber Logo' />
				<Title>Log in to access your account</Title>
				<HeadImage src='/images/Signup.svg' alt='Image' />
				<Button onClick={signInWithGoogleHandler}>
					Sig in with Google
				</Button>
			</Container>
		</Wrapper>
	);
};

export default LogInComponent;

const Wrapper = tw.div` flex flex-col h-screen w-screen bg-[#F6F6F6] items-center justify-center over overflow-x-hidden p-4 `;

const Container = tw.div`  bg-[#F6F6F6] shadow-md h-[800px] w-full  max-w-[500px] p-6 flex flex-col  mt-[10rem]  lg:mt-[4rem] rounded-[5px]`;

const Button = tw.button`
bg-black text-white  text-center p-4 rounded-[6px]  w-full text-[1.3rem]`;

const UberLogo = tw.img`h-14 w-24 object-contain  `;

const Title = tw.div`text-[1.6rem] lg:text-[2rem] text-gray-500  mb-[5rem] mt-[2rem]`;

const HeadImage = tw.img`
 object-cover w-full h-[200px]  mb-[5rem] `;
