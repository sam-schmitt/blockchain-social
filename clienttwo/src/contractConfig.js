export const MEDIA_ADDRESS = "0x41238B57DAf615f9DF077F674e55C649109cb32b";
export const MEDIA_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_username",
				type: "string",
			},
		],
		name: "signUp",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_text",
				type: "string",
			},
		],
		name: "post",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getPosts",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "likes",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "text",
						type: "string",
					},
					{
						internalType: "address",
						name: "user",
						type: "address",
					},
				],
				internalType: "struct Media.Post[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_address",
				type: "address",
			},
		],
		name: "toggleFollow",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_address",
				type: "address",
			},
		],
		name: "checkFollow",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_address",
				type: "address",
			},
		],
		name: "getUsername",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
];
