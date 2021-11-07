/** @format */

import tw from "tailwind-styled-components";
import React from "react";
import Map from "../ui/map/map";

import Header from "../header/header";
import Footer from "../footer/footer";
import ConfirmActionItems from "./confirm-actions";

const ConfirmPageComponent = () => {
	return (
		<React.Fragment>
			<Header />
			<Wrapper>
				<Container>
					<Map />
					{/* <ConfirmActionItems /> */}
				</Container>
			</Wrapper>

			<Footer />
		</React.Fragment>
	);
};

export default ConfirmPageComponent;

const Wrapper = tw.div`
 min-h-screen w-full `;

const Container = tw.div`
flex flex-col  min-h-screen w-full
mb-[10rem] `;
