// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Forum} from "../src/Forum.sol";

contract ForumScript is Script {
    Forum public forum;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        forum = new Forum();

        vm.stopBroadcast();
    }
}
