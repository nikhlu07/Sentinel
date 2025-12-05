// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    struct Task {
        address client;
        address agent;
        uint256 amount;
        bool isCompleted;
        bool isReleased;
        bool isDisputed;
        uint256 createdAt;
    }

    mapping(uint256 => Task) public tasks;
    uint256 public nextTaskId;
    address public arbiter;
    uint256 public constant TIMEOUT = 7 days;

    event Deposited(uint256 taskId, address client, address agent, uint256 amount);
    event Completed(uint256 taskId);
    event Released(uint256 taskId, address agent, uint256 amount);
    event Disputed(uint256 taskId);
    event Resolved(uint256 taskId, address winner, uint256 amount);
    event Refunded(uint256 taskId, address client, uint256 amount);

    constructor(address _arbiter) {
        arbiter = _arbiter;
    }

    function deposit(address _agent) external payable {
        require(msg.value > 0, "Amount must be greater than 0");
        tasks[nextTaskId] = Task(msg.sender, _agent, msg.value, false, false, false, block.timestamp);
        emit Deposited(nextTaskId, msg.sender, _agent, msg.value);
        nextTaskId++;
    }

    function complete(uint256 _taskId) external {
        Task storage task = tasks[_taskId];
        require(msg.sender == task.agent, "Only agent can complete");
        require(!task.isCompleted, "Already completed");
        task.isCompleted = true;
        emit Completed(_taskId);
    }

    function release(uint256 _taskId) external {
        Task storage task = tasks[_taskId];
        require(msg.sender == task.client, "Only client can release");
        require(!task.isDisputed, "Task is disputed");
        require(!task.isReleased, "Already released");

        task.isReleased = true;
        payable(task.agent).transfer(task.amount);
        emit Released(_taskId, task.agent, task.amount);
    }

    function raiseDispute(uint256 _taskId) external {
        Task storage task = tasks[_taskId];
        require(msg.sender == task.client || msg.sender == task.agent, "Only parties can dispute");
        require(!task.isReleased, "Already released");
        task.isDisputed = true;
        emit Disputed(_taskId);
    }

    function resolveDispute(uint256 _taskId, address _winner) external {
        require(msg.sender == arbiter, "Only arbiter");
        Task storage task = tasks[_taskId];
        require(task.isDisputed, "Not disputed");
        require(!task.isReleased, "Already released");

        task.isReleased = true;
        payable(_winner).transfer(task.amount);
        emit Resolved(_taskId, _winner, task.amount);
    }

    function refund(uint256 _taskId) external {
        Task storage task = tasks[_taskId];
        require(msg.sender == task.client, "Only client");
        require(!task.isCompleted, "Agent already completed");
        require(!task.isReleased, "Already released");
        require(block.timestamp > task.createdAt + TIMEOUT, "Timeout not reached");

        task.isReleased = true;
        payable(task.client).transfer(task.amount);
        emit Refunded(_taskId, task.client, task.amount);
    }
}
