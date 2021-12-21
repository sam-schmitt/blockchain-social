import React from "react";
import ProfileCard from "../profile/profileCard";

export default function Post({ userAddress, contract, text, likes }) {
	return (
		<>
			<ProfileCard contract={contract} userAddress={userAddress} />
			<p>{text}</p>
		</>
	);
}
