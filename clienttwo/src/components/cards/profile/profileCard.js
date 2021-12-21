import React, { useState, useEffect } from "react";

export default function ProfileCard({ userAddress, contract }) {
	const [username, setUsername] = useState("");
	const getUsername = async () => {
		const username = await contract.getUsername(userAddress);
		setUsername(username);
	};
	useEffect(() => {
		getUsername();
	}, [userAddress]);
	return (
		<>
			<p>Posted By: {username}</p>
		</>
	);
}
