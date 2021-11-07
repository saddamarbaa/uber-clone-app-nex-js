/** @format */
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken = process.env.MAP_BOX_ACCESS_TOKEN;

const Map = () => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
			center: [-99.29011, 39.39172],
			zoom: 5,
		});

		addToMap(map);
	});

	const addToMap = (map) => {
		// Create a default Marker and add it to the map.
		const marker1 = new mapboxgl.Marker()
			.setLngLat([-99.29011, 39.39172])
			.addTo(map);
	};

	// map will be in this div
	return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
w-full  flex-1 min-h-[400px] lg:min-h-[600px]`;
