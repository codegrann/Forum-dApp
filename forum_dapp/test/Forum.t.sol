// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {Test, console} from "forge-std/Test.sol";
import {Forum} from "../src/Forum.sol";

contract ForumTest is Test {
    Forum public forum;
    Forum.Post public post;

    //Part A - Test Create Post Function
    function setUp() public {
        // create dummy address. this will "prank" for a msg.sender address
        vm.prank(address(1));
        string memory _title = "StackUp";
        string memory _description = "Empowering Developers at Scale!";
        bool _spoil = false;
        forum = new Forum();
        forum.createPost(_title, _description, _spoil);
    }
    //Part B - Test Create Poll Function
    function testCreatePoll() public {
        forum.createPoll(1, "Enjoying the quest so far?", "Yes", "No");
        Forum.Poll memory _poll = forum.getPollFromPost(1);
        assertEq(_poll.question, "Enjoying the quest so far?");
    }
    //Part C - Test Get Post Function
    function testGetPost() public view {
        Forum.Post memory _post = forum.getPost(1);
        assertEq(_post.title, "StackUp");
        assertEq(_post.description, "Empowering Developers at Scale!");
        assertEq(_post.spoil, false);
    }
    function testVotePost() public {
        forum.upVotePost(1);
        Forum.Post memory _post = forum.getPost(1);
        assertEq(_post.likes, 1);
        forum.downVotePost(1);
        _post = forum.getPost(1);
        assertEq(_post.likes, 0);
    }
}
