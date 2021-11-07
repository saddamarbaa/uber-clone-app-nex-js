/** @format */

import Link from "next/link";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const ConfirmActionItems: React.FunctionComponent = () => {
	const [pickUpCoordinate, setPickUpCoordinate] = useState<any>();
	const [dropOffCoordinate, setPropOffCoordinate] = useState<any>();

	console.log(pickUpCoordinate, dropOffCoordinate);

	const getDropOffUpCoordinate = () => {
		const dropUPLocation = "london";

		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropUPLocation}.json?access_token=${process.env.MAP_BOX_ACCESS_TOKEN}`,
		)
			.then((response) => response.json())
			.then((data) => {
				setPropOffCoordinate(data.features[0].center);
			})
			.catch((error) => {
				// console.error("Error:", error);
			});
	};

	const getPickUpCoordinate = () => {
		const pickUpLocation = "paris";

		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUpLocation}.json?access_token=${process.env.MAP_BOX_ACCESS_TOKEN}`,
		)
			.then((response) => response.json())
			.then((data) => {
				setPickUpCoordinate(data.features[0].center);
				// console.log("Success:", data);
			})
			.catch((error) => {
				// console.error("Error:", error);
			});
	};

	useEffect(() => {
		getPickUpCoordinate();
		getDropOffUpCoordinate();
	}, []);

	return (
		<Wrapper>
			<Container></Container>
		</Wrapper>
	);
};

export default ConfirmActionItems;

const Wrapper = tw.div`
w-full   flex-1 p-5 `;

const Container = tw.div`
 max-w-[1300px] mx-auto  pb-8`;

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
