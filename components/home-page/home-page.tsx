/** @format */

import tw from "tailwind-styled-components";
import React from "react";
import Map from "../ui/map/map";
import ActionItems from "./action-Items";

import Header from "../header/header";
import Footer from "../footer/footer";
import CarList from "./car-list";

const HomePageComponent: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Header />
			<Wrapper>
				<Container>
					<Map />
					<ActionItems />
				</Container>

				<CarList />
			</Wrapper>

			<Footer />
		</React.Fragment>
	);
};

export default HomePageComponent;

const Wrapper = tw.div`
 min-h-screen w-full `;

const Container = tw.div`
flex flex-col  min-h-screen w-full
mb-[3rem] `;

// pk.eyJ1Ijoic2FkZGFtcyIsImEiOiJja3ZtZDA2ZGwwNHc3MnZxaHo0N3ZscGd0In0
// 	.UH4OprHf4BWxaYcgayDEEw;
