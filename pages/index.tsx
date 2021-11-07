/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";

import HomePageComponent from "../components/home-page/home-page";

const HomePage: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Uber Clone app</title>
				<meta
					name='description'
					content='Uber Clone build with React + Next Js + TypeScript.'
				/>
			</Head>

			<HomePageComponent />
		</Fragment>
	);
};

export default HomePage;
