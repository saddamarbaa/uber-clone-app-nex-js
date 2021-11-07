/** @format */

import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import LogInComponent from "../components/login-page/login";
import type { NextPage } from "next";

const LogInScreen: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Uber Login</title>
			</Head>
			<meta name='description' content='LogIn to  Uber' />

			<LogInComponent />
		</Fragment>
	);
};

export default LogInScreen;
