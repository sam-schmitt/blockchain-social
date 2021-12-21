// SPDX-License-Identifier: SAM
pragma solidity ^0.8.10;

contract Media {

    uint256 token_supply = 10000000;

    struct User {
        uint256 balance;
        string username;
        mapping (address => bool) following;
    }

    struct Post {
        uint256 likes;
        string text;
        address user;
    }

    mapping (address => User) users;
    
    Post[] posts;

    function signUp(string memory _username) public {
        users[msg.sender].username = _username;
    }

    function post(string memory _text) public {
        posts.push(Post({likes: 0, text: _text, user: msg.sender}));
    }

    function getPosts() public view returns(Post[] memory) {
        return posts;
    }

    function toggleFollow(address _address) public {
        users[msg.sender].following[_address] = !users[msg.sender].following[_address];
    }

    function checkFollow(address _address) public view returns(bool){
        return users[msg.sender].following[_address];
    }

    function getUsername(address _address) public view returns(string memory){
        return users[_address].username;
    }

}