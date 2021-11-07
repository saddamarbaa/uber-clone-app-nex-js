/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import SearchPageComponent from "../components/search-page/search-page";

const SearchPage: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Uber Search</title>
				<meta
					name='description'
					content='Uber Clone build with React + Next Js + TypeScript.'
				/>
			</Head>

			<SearchPageComponent />
		</Fragment>
	);
};

export default SearchPage;
