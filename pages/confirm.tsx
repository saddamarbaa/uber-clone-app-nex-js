/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import ConfirmPageComponent from "../components/confirm-page/confirm-page";

const ConfirmPage: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Confirm page</title>
				<meta
					name='description'
					content='Uber Clone build with React + Next Js + TypeScript.'
				/>
			</Head>
			<ConfirmPageComponent />
		</Fragment>
	);
};

export default ConfirmPage;
