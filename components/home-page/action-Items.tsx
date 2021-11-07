/** @format */

import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";

const ActionItems: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<Container>
				<Header>
					<UberLogo src='/images/upberlog2.jpg' alt='Uber Logo' />
					<ProfileContainer>
						<Name>Saddam Arbaa</Name>
						<UserImage src='/images/saddam2.jpg' alt='User Logo' />
					</ProfileContainer>
				</Header>

				<ActionsButtons>
					<Link href='/search'>
						<ActionButton>
							<ActionImage
								alt='Uber car '
								src='https://i.ibb.co/cyvcpfF/uberx.png'
							/>
							Ride
						</ActionButton>
					</Link>

					<ActionButton>
						<ActionImage
							alt='Uber bike '
							src='https://i.ibb.co/n776JLm/bike.png'
						/>
						Wheels
					</ActionButton>
					<ActionButton>
						<ActionImage
							alt='Uber car '
							src='https://i.ibb.co/5RjchBg/uberschdule.png'
						/>
						Reserve
					</ActionButton>
				</ActionsButtons>
				<InputButton>Where to go?</InputButton>
			</Container>
		</Wrapper>
	);
};

export default ActionItems;

const Wrapper = tw.div`
w-full   flex-1 p-5 `;

const Container = tw.div`
 max-w-[1300px] mx-auto  `;

const Header = tw.div` flex items-center justify-between`;

const UberLogo = tw.img`
h-28
`;

const ProfileContainer = tw.div`
flex items-center space-x-4 `;

const Name = tw.div``;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer`;

const ActionsButtons = tw.div`
flex flex-col space-y-5 md:space-y-0 md:flex-row  md:items-center md:space-x-5 `;

const ActionButton = tw.button`
bg-gray-200 flex-1 cursor-pointer h-40 items-center flex flex-col justify-center rounded-lg transition duration-75 transform cursor-pointer hover:shadow-2xl hover:scale-105 shadow-sm  md:text-xl p-4 max-w-[440px] `;

const ActionImage = tw.img`
h-24 `;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4  items-center mt-8 rounded-lg shadow-sm  max-w-[410px]`;
