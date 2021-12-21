import "./App.css";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { MEDIA_ABI, MEDIA_ADDRESS } from "./contractConfig";
import Post from "./components/cards/post/postCard";

function App() {
	const { ethereum } = window;
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const contract = new ethers.Contract(MEDIA_ADDRESS, MEDIA_ABI, signer);
	const [metamaskAddress, setMetamaskAddress] = useState("");
	const [newUsername, setNewUsername] = useState("");
	const [yourUsername, setYourUsername] = useState("");
	const [posts, setPosts] = useState([]);
	const [postText, setPostText] = useState("");

	const connectWallet = async () => {
		if (!ethereum) {
			alert("Please install metamask");
		}
		try {
			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});
			setMetamaskAddress(accounts[0]);
		} catch (e) {
			console.log(e);
		}
	};

	const getPosts = async () => {
		const newPosts = await contract.getPosts();
		console.log(newPosts);
		setPosts(newPosts);
	};

	const post = async () => {
		await contract.post(postText);
		setPostText("");
	};

	const getUsername = async () => {
		const username = await contract.getUsername(metamaskAddress);
		console.log({ username });
		setYourUsername(username);
	};
	const signUp = async () => {
		await contract.signUp(newUsername);
		setYourUsername(newUsername);
		setNewUsername("");
	};

	useEffect(() => {
		connectWallet();
		getPosts();
	}, []);

	useEffect(() => {
		if (metamaskAddress.length > 0) {
			getUsername();
		}
	}, [metamaskAddress]);

	return (
		<div className='App'>
			<p>Your Metamask Address: {metamaskAddress}</p>
			<p>Your username: {yourUsername}</p>
			<div>
				<label>
					Upload Username:
					<input
						type='text'
						value={newUsername}
						onChange={(e) => {
							setNewUsername(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							signUp();
						}}
					>
						Submit
					</button>
				</label>
			</div>

			<div>
				<h1>Posts</h1>
				<label>
					Make Post:
					<input
						type='text'
						value={postText}
						onChange={(e) => {
							setPostText(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							post();
						}}
					>
						Submit
					</button>
				</label>
				{posts.map((d) => (
					<Post
						contract={contract}
						userAddress={d[2]}
						text={d[1]}
						likes={d[0]}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
